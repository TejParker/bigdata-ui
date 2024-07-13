<script setup lang="ts">
import { post } from '@/utils/request'

async function debug() {
  const response = await post('/app/xxxx/debug', {
    body: { query: 'Hello, who are you?' },
  })
  console.log(response)
}
</script>

<template>
  <a-button @click="debug">发起请求</a-button>
</template>

<style scoped></style>
