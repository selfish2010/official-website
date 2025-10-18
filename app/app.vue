<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 在脚本部分导入SCSS文件
import './assets/scss/main.scss';

onMounted(() => {
  // 加载Font Awesome图标库
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(link);
  
  // 初始化全局动画
  initGlobalAnimations();
});

// 初始化全局动画效果
function initGlobalAnimations() {
  // 为页面元素添加淡入动画
  const animatedElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 全局动画类 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.animate__fadeIn {
  opacity: 1;
  transform: translateY(0);
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 防止锚点跳转时的顶部遮挡 */
:target {
  scroll-margin-top: 80px;
}

/* 响应式图片 */
img {
  max-width: 100%;
  height: auto;
}

/* 优化链接样式 */
a {
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  text-decoration: none;
}

/* 表单元素基础样式 */
input,
textarea,
select {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* 通用按钮样式 */
.btn {
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
}

/* 卡片通用样式 */
.card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

/* 标题通用样式 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

/* 段落通用样式 */
/* p {
  margin-bottom: 1.25rem;
  line-height: 1.6;
} */

/* 列表通用样式 */
/* ul, ol {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
} */

/* 工具类 */
/* .text-center {
  text-align: center;
}

.text-primary {
  color: var(--primary) !important;
}

.text-secondary {
  color: var(--secondary) !important;
}

.bg-primary {
  background-color: var(--primary) !important;
}

.bg-secondary {
  background-color: var(--secondary) !important;
} */

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-14 {
  margin-bottom: 3.5rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.pb-20 {
  padding-bottom: 5rem;
}
</style>
