# 企业官网脚手架

这是一个基于Nuxt 3开发的企业官网脚手架，集成了常用的前端技术栈和组件，可快速搭建现代化企业官网。

## 技术栈

- **框架**: Nuxt 3
- **UI框架**: Bootstrap 5 + Tailwind CSS
- **CSS预处理器**: SCSS
- **动画库**: Animate.css
- **图标**: IconFont
- **构建工具**: Vite
- **语言**: TypeScript

## 项目结构

```
├── app/                    # 应用程序主目录
│   ├── app.vue            # 应用根组件
│   ├── assets/            # 静态资源目录
│   │   ├── css/          # CSS样式文件
│   │   ├── images/       # 图片资源
│   │   └── scss/         # SCSS样式文件
│   ├── components/        # 可复用组件
│   ├── composables/       # 可复用的组合式函数
│   ├── layouts/           # 页面布局
│   └── pages/             # 页面组件
│       ├── case/          # 案例页面
│       ├── services/      # 服务页面
│       └── solutions/     # 解决方案页面
├── public/                 # 公共静态资源
├── nuxt.config.ts         # Nuxt配置文件
├── tailwind.config.js     # Tailwind配置
└── postcss.config.js      # PostCSS配置
```

## 功能模块

### 主要组件

- **Header.vue**: 网站头部导航栏
- **Footer.vue**: 网站底部信息
- **HomeBanner.vue**: 首页横幅组件
- **FeatureGrid.vue**: 特性展示网格
- **ServiceCard.vue**: 服务卡片组件
- **SolutionCard.vue**: 解决方案卡片组件
- **CaseCard.vue**: 案例卡片组件
- **ContactForm.vue**: 联系表单组件
- **StatCard.vue**: 数据统计卡片
- **PartnerLogo.vue**: 合作伙伴Logo组件

### 页面结构

- **首页** (`index.vue`): 网站主要入口，展示企业简介、主要服务和优势
- **联系我们** (`contact.vue`): 联系表单和企业联系方式
- **服务页面** (`services/`): 详细的服务介绍页面
- **解决方案** (`solutions/`): 企业解决方案展示
- **案例展示** (`case/`): 企业成功案例展示

## 开始使用

### 安装依赖

```bash
# 使用npm
npm install

# 使用pnpm
pnpm install

# 使用yarn
yarn install
```

### 开发服务器

启动开发服务器，访问 `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

### 构建生产版本

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

### 本地预览生产构建

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## 自定义配置

### 网站基本信息

在 `nuxt.config.ts` 中可以修改网站的标题、描述和关键词等SEO信息：

```typescript
app: {
  head: {
    title: '技术驱动增长 · 全链路数字化解决方案',
    meta: [
      { name: 'description', content: '官网脚手架' },
      { name: 'keywords', content: '网站开发, 小程序开发' },
    ]
  }
}
```

### 自定义样式

1. 在 `app/assets/scss/custom-utils.scss` 中添加自定义工具类
2. 在 `tailwind.config.js` 中配置Tailwind自定义主题
3. 全局CSS和SCSS文件在 `nuxt.config.ts` 的 `css` 数组中引入

### 添加新页面

1. 在 `app/pages/` 目录下创建新的Vue文件或目录
2. Nuxt会根据文件结构自动生成路由
3. 例如：创建 `app/pages/about.vue` 会自动生成 `/about` 路由

### 添加新组件

1. 在 `app/components/` 目录下创建新的Vue组件
2. 组件命名建议使用PascalCase格式（如 `FeatureCard.vue`）
3. 在需要使用的页面中直接引入组件即可

## SEO优化

本脚手架已经配置了基本的SEO优化：
- 响应式设计，适配不同设备
- 合理的页面结构和语义化HTML
- 支持自定义页面标题、描述和关键词
- 已配置网站图标（favicon）

## 部署指南

### 静态网站部署

可以生成静态网站文件进行部署：

```bash
npm run generate
```

生成的静态文件位于 `.output/public` 目录，可以部署到任何静态网站托管服务。

### 服务器部署

也可以构建Node.js应用进行部署：

```bash
npm run build
```

然后在服务器上运行：

```bash
node .output/server/index.mjs
```

## 注意事项

1. 请确保替换 `public/` 目录下的图片资源为您的企业实际图片
2. 自定义 `app/components/` 中的组件内容以符合企业风格
3. 更新 `nuxt.config.ts` 中的SEO配置
4. 生产环境部署前建议进行性能优化和安全检查
