<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 class="text-3xl font-bold underline text-blue-700">Hello World</h1>
    <p>Hello LLMOps</p>
    <a-button type="primary">注册/登录</a-button>
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
