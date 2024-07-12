import { defineStore } from 'pinia'
import { ref } from 'vue'

const initAccount = {
  name: 'Simon',
  email: 'chenxin12390@126.com',
  avatar: '',
}
export const useAccountStore = defineStore('account', () => {
  // define
  const account = ref({ ...initAccount })

  // func
  function update(params: any): void {
    Object.assign(account.value, params)
  }

  function clear(): void {
    account.value = { ...initAccount }
  }

  return { account, update, clear }
})
