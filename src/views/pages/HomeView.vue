<script setup lang="ts">
import { useAccountStore } from '@/stores/account'

const accountStore = useAccountStore()

function updateName() {
  accountStore.update({ name: 'TejParker' })
}
</script>

<template>
  <p>这里是主页面</p>
  <p>当前登录账号: {{ accountStore.account.name }}</p>
  <p>当前登录邮箱: {{ accountStore.account.email }}</p>
  <a-button type="primary" @click="updateName">更新名字</a-button>
  <a-button @click="accountStore.clear">重置</a-button>
  <router-link to="/space/apps">跳转到应用列表</router-link>
</template>

<style scoped></style>
