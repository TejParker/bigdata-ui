// 1. 接口超时 100s

// 2. 不需要写api前缀， 比如 http://localhost:5000

// 3. 对经常使用的post和get进行封装

// 4. 每次获取数据都要使用response.json() 才可以获取数据，需要封装

// 超时时间
import { apiPrefix } from '@/config'

const TIME_OUT = 100000

console.log(apiPrefix)

const baseFetchOptions = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  redirect: 'follow',
}

// fetch 参数类型
type FetchOptionType = Omit<RequestInit, 'body'> & {
  params?: Record<string, any>
  body?: BodyInit | Record<string, any> | null
}

// 封装基础的fetch请求
const baseFetch = <T>(url: String, fetchOptions: FetchOptionType): Promise<T> => {
  // 将所有的配置信息合并起来
  const options: typeof baseFetchOptions & FetchOptionType = Object.assign(
    {},
    baseFetchOptions,
    fetchOptions,
  )

  // 组装url
  let urlWithPrefix = `${apiPrefix}${url.startsWith('/') ? url : `/${url}`}`

  // 获取请求方法， params， body参数
  const { method, params, body } = options

  // 如果请求是GET方法，并传递了params参数
  if (method === 'GET' && params) {
    const paramsArray: string[] = []
    Object.keys(params).forEach((key) => {
      // key=value&key2=v2
      paramsArray.push(`${key}=${encodeURIComponent(params[key])}`)
    })
    if (urlWithPrefix.search(/\?/) === -1) {
      urlWithPrefix += `?${paramsArray.join('$')}`
    } else {
      urlWithPrefix += `&${paramsArray.join('$')}`
    }
    delete options.params
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  // 同时发起两个Promise， 谁先返回就返回哪个？
  return Promise.race([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('接口超时')
      }, TIME_OUT)
    }),
    // 发起正常请求
    new Promise((resolve, reject) => {
      globalThis
        .fetch(urlWithPrefix, options as RequestInit)
        .then((res) => {
          resolve(res.json())
        })
        .catch((err) => {
          reject(err)
        })
    }),
  ]) as Promise<T>
}

export const request = <T>(url: string, options: {}) => {
  return baseFetch(url, options)
}

export const get = <T>(url: string, options: {}) => {
  return request<T>(url, Object.assign({}, options, { method: 'GET' }))
}

export const post = <T>(url: string, options: {}) => {
  return request<T>(url, Object.assign({}, options, { method: 'POST' }))
}
