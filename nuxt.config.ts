// https://nuxt.com/docs/api/configuration/nuxt-config
// 导出 Nuxt 配置对象
export default defineNuxtConfig({
  // 指定兼容性日期，用于确保配置与 Nuxt 版本兼容
  compatibilityDate: '2025-07-15',

  // 开发工具配置
  devtools: {
    enabled: true
  },

  // 全局 CSS 配置
  css: [
    // 使用编译好的 Bootstrap CSS
    'bootstrap/dist/css/bootstrap.min.css',
    // Animate.css 动画库
    'animate.css/animate.min.css',
    // 添加自定义工具类文件
    '@/assets/scss/custom-utils.scss'
  ],

  // 应用程序配置
  app: {
    // 页面头部配置
    head: {
      // HTML 属性配置
      htmlAttrs: {
        // 设置页面语言为简体中文
        lang: 'zh-CN'
      },
      // 页面标题
      title: '技术驱动增长 · 全链路数字化解决方案',
      // 页面链接配置
      link: [
        // 添加 IconFont CSS 这里
        { rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_5034941_qbltd4cl9vp.css' },
        // 添加网站图标
        { rel: 'icon', href: '/favicon.png', type: 'image/png' }
      ],
      // 页面元数据配置
      meta: [
        // 设置字符集为 UTF-8
        { charset: 'utf-8' },
        // 配置视口，确保在移动设备上正确显示
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // 设置页面描述，对 SEO 有帮助
        { name: 'description', content: '官网脚手架' },
        // 关键词，用于 SEO 优化
        { name: 'keywords', content: '网站开发, 小程序开发' },
      ]
    }
  },

  // Vite 构建工具配置
  vite: {
    // 全局常量定义
    // 这里可以定义在整个应用中可用的常量
    define: {
      // 定义 process.env 对象，确保与依赖于 Node.js 环境变量的包兼容
      'process.env': {}
    }
  }
})
