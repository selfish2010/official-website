<template>
  <form class="contact-form space-y-6" @submit.prevent="handleSubmit">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- 姓名 -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="请输入您的姓名"
          required
        />
      </div>
      
      <!-- 邮箱 -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="请输入您的电子邮箱"
          required
        />
      </div>
    </div>
    
    <!-- 主题 -->
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
      <input
        type="text"
        id="subject"
        v-model="formData.subject"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
        placeholder="请输入消息主题"
        required
      />
    </div>
    
    <!-- 消息内容 -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息内容</label>
      <textarea
        id="message"
        rows="5"
        v-model="formData.message"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
        placeholder="请输入您的详细消息..."
        required
      ></textarea>
    </div>
    
    <!-- 提交按钮 -->
    <div class="text-center">
      <button
        type="submit"
        class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        发送消息
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const emit = defineEmits<{
  submit: [formData: FormData];
}>();

const handleSubmit = () => {
  // 验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    alert('请输入有效的电子邮箱地址');
    return;
  }
  
  // 发送表单数据事件
  emit('submit', formData.value);
  
  // 重置表单
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<style scoped>
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>