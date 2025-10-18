<template>
    <header class="sticky-top bg-white shadow-sm z-50">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        LOGO
                    </a>
                    <!-- 移动端汉堡菜单 -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- 桌面端导航 -->
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">首页</a>
                            </li>

                            <!-- 服务项目下拉菜单 -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    服务项目
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownServices">
                                    <li><a class="dropdown-item" href="/services/wechat">微信公众号开发</a></li>
                                    <li><a class="dropdown-item" href="/services/website">网站开发/重构</a></li>
                                </ul>
                            </li>

                            <!-- 解决方案下拉菜单 -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSolutions" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    解决方案
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownSolutions">
                                    <li><a class="dropdown-item" href="/solutions/ecommerce">电商系统</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">关于我们</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.nav-item {
    margin-left: 1rem;
}

@media (max-width: 960px) {
    .nav-item {
        margin-left: 0;
    }
}

/* 导航栏样式 */
.nav-link {
    transition: all 0.3s ease;
    position: relative;
}

.header-logo {
    max-height: 40px;
}
</style>
