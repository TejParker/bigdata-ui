<script setup lang="ts">
import { post } from '@/utils/request'

async function debug() {
  const response = await post('/app/01f848fa-d51f-4ecb-92f4-0ff85303cf74/debug', {
    body: { query: 'Hello, who are you?' },
  })
  console.log(response)
}
</script>

<template>
  <!--  <a-button @click="debug">发起请求</a-button>-->
  <div class="min-h-screen">
    <!--    顶部导航栏-->
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4">
      顶部导航
    </header>
    <!--    底部内容-->
    <div class="flex flex-row h-[calc(100vh-74px)]">
      <!--      左侧编排-->
      <div class="w-2/3 bg-gray-50 h-full">
        <header class="flex items-center h-16 border-b border-gray-200 px-7 text-xl text-gray-700">
          应用编排
        </header>
        <div class="flex flex-row h-[calc(100%-64px)]">
          <div class="flex-1 border-r border-gray-200 p-6">人设与回复逻辑</div>
          <div class="flex-1 p-6">应用能力</div>
        </div>
      </div>

      <div class="flex flex-col w-1/3 bg-white h-full">
        <header
          class="flex flex-shrink-0 items-center h-16 px-4 text-xl bg-white border-b border-gray-200 shadow-sm"
        >
          调试与预览
        </header>
        <div class="h-full min-h-0 px-6 py-7 overflow-x-hidden overflow-y-scroll scrollbar-w-none">
          <!--          人类消息-->
          <div class="flex flex-row gap-2 mb-6">
            <a-avatar :style="{ backgroundColor: '#3370ff' }" class="flex-shrink-0" :size="30"
              >X
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="font-semibold text-gray-700">Evan</div>
              <div
                class="bg-blue-700 text-white border border-blue-800 px-4 py-3 rounded-2xl leading-5"
              >
                请详细解释一下Attention机制
              </div>
            </div>
          </div>
          <!--          AI消息-->
          <div class="flex flex-row gap-2 mb-6">
            <a-avatar :style="{ backgroundColor: '#00d0b6' }" class="flex-shrink-0" :size="30">
              <icon-apps />
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="font-semibold text-gray-700">ChatGPT</div>
              <div
                class="max-w-max bg-gray-100 text-black border border-gray-200 px-4 py-3 rounded-2xl leading-5"
              >
                注意力机制（Attention
                Mechanism）是现代深度学习中尤为重要的一种技术，尤其在处理自然语言处理（NLP）任务以及计算机视觉任务时有着广泛的应用。它的核心思想是通过赋予不同的输入元素以不同的权重，从而使模型能够关注更重要或更相关的信息。这种方法最早是在机器翻译领域引入的，但是之后迅速扩展到了其他领域。
                为了详细解释注意力机制，让我们从几个核心概念开始： ### 1. 基本概念 ####
                上下文向量（Context Vector）
                在传统的序列到序列（Sequence-to-Sequence，Seq2Seq）模型中，隐藏状态（Hidden
                State）通常会被压缩成一个固定维度的上下文向量，用来表示整个输入序列的信息。然而，这种方式经常会导致信息丢失，尤其是在处理长序列时。
                #### 权重（Weights）
                注意力机制通过计算输入元素的权重来决定哪些部分的信息是更重要的。这些权重通常是通过一种称为"注意力得分"（Attention
                Scores）的方式来计算的。
              </div>
            </div>
          </div>
          <!--          AI加载状态-->
          <div class="flex flex-row gap-2 mb-6">
            <a-avatar :style="{ backgroundColor: '#00d0b6' }" class="flex-shrink-0" :size="30">
              <icon-apps />
            </a-avatar>
            <div class="flex flex-col gap-2">
              <div class="font-semibold text-gray-700">ChatGPT</div>
              <div
                class="max-w-max bg-gray-100 text-black border border-gray-200 px-4 py-3 rounded-2xl leading-5"
              >
                <icon-loading />
              </div>
            </div>
          </div>
        </div>

        <!--        对话输入框-->
        <div class="w-full flex-shrink-0 flex flex-col">
          <!--          顶部输入框-->
          <div class="px-6 flex items-center gap-4">
            <a-button class="flex-shrink-0" type="text" shape="circle">
              <template #icon>
                <icon-empty size="16" :style="{ color: '#374151' }" />
              </template>
            </a-button>
            <!--            输入框组件-->
            <div
              class="h-[50px] flex items-center gap-2 px-4 flex-1 border border-gray-200 rounded-full"
            >
              <input type="text" class="flex-1 outline-0" />
              <a-button type="text" shape="circle">
                <template #icon>
                  <icon-plus-circle size="16" :style="{ color: '#374151' }" />
                </template>
              </a-button>
              <a-button type="text" shape="circle">
                <template #icon>
                  <icon-send size="16" :style="{ color: '#1d4ed8' }" />
                </template>
              </a-button>
            </div>
          </div>
          <!--          底部提示-->
          <div class="text-center text-gray-500 text-xs py-4">
            内容由AI生成，无法确保真实准确，仅供参考。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
