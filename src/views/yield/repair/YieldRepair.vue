<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import { post } from '@/utils/request'
const startTime = ref('')
const endTime = ref('')
const isProcessing = ref(false)

const form = reactive({
  orgName: '',
  deviceId: '',
  startTime: '',
  endTime: '',
})

    function onSelect(dateString: string, date: string) {
      console.log('onSelect', dateString, date);
    }
    function  onChange(dateString: string[], date: string) {
      // console.log('onChange: ', dateString, date);
      if (dateString.length >= 1) {
        form.startTime = dateString[0]
        startTime.value = dateString[0]
        form.endTime = dateString[1]
        endTime.value = dateString[1]
        console.log(startTime.value, endTime.value)
      } else {
        Message.warning("时间是必填的")
      }

    }
async function handleSubmit(data) {
  if (data.values['startTime'] === '' || data.values['endTime'] === '') {
    Message.error('时间未指定，必须指定时间范围')
    // console.log("时间未指定，必须指定时间范围")
  } else if (data.values['orgName'] === '' || data.values['deviceId'] === '') {
    Message.error('字段是必须的,请指定企业名称和设备ID')
  } else {
    console.log(data.values['orgName'], data.values['deviceId'], data.values['startTime'], data.values['endTime'])
    // 发起请求
    isProcessing.value = true
    const response = await post('/energy/repair', {
      body: { query: form },
    })
    const content = response.data.content
    Message.info(content)
    isProcessing.value = false
  }
}
const rules = {
  orgName: [
    {
      required: true,
      message: '企业名称是必填的',
    },
  ],
  deviceId: [
    {
      required: true,
      message: '设备ID是必填的',
    },
  ],
}

</script>

<template>
  <div class="min-h-screen">
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4  text-xl text-gray-700">
      产量数据修复
    </header>
    <div class="flex flex-row h-[calc(100vh-74px)] justify-center">

      <div class="bg-gray-50 h-full  mt-8">
<!--        <header class="flex items-center h-16 border-b border-gray-200 px-7 text-xl text-gray-700">-->
<!--          应用编排-->
<!--        </header>-->
        <div class="flex-1 p-6 text-2xl bg-blue-50 mb-8">产量补算</div>

        <a-form :model="form" :rules="rules" :style="{width:'600px'}" auto-label-width @submit="handleSubmit" >
          <a-form-item field="orgName" label="企业名称"  validate-trigger="blur">
            <a-input v-model="form.orgName" placeholder="请输入企业名称" />
          </a-form-item>
          <a-form-item field="deviceId" label="设备ID"  validate-trigger="blur">
            <a-input v-model="form.deviceId" placeholder="请输入设备ID" />
          </a-form-item>
          <a-form-item field="timeRange" label="修复时间范围">
            <a-range-picker
              showTime
              :defaultValue="['2024-08-08 00:00:00', '2024-08-09 00:00:00']"
              @change="onChange"
              @select="onSelect"
              style=" width: 380px; "
            />
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </div>


    </div>

  </div>




</template>

<style scoped>

</style>