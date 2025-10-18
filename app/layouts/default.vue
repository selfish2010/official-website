<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- 导航栏 -->
    <Header />
    <!-- 主要内容区 -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeNavItem = ref('');

onMounted(() => {
  // 初始化Bootstrap组件
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
  
  // 更新活动导航项
  updateActiveNavItem();
});

// 监听路由变化，更新活动导航项
function updateActiveNavItem() {
  // 获取当前路由路径
  const currentPath = route.path;
  
  // 更新活动导航项
  if (currentPath === '/') {
    activeNavItem.value = 'home';
  } else if (currentPath.includes('/solutions')) {
    activeNavItem.value = 'solutions';
  } else if (currentPath.includes('/services')) {
    activeNavItem.value = 'services';
  } else if (currentPath.includes('/cases')) {
    activeNavItem.value = 'cases';
  } else if (currentPath.includes('/about')) {
    activeNavItem.value = 'about';
  } else if (currentPath.includes('/blog')) {
    activeNavItem.value = 'blog';
  } else if (currentPath.includes('/contact')) {
    activeNavItem.value = 'contact';
  }
}
</script>

<style>
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
</style>
