<template>
    <footer>
        <section class="py-20 bg-body-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 my-3">
                        <h1>Logo</h1>
                        <p class="text-gray-300 mb-3">技术驱动增长 · 全链路数字化解决方案</p>
                        <ul>
                            <li><i class="iconfont icon-wanmei"></i>免费提供技术评估</li>
                            <li><i class="iconfont icon-wanmei"></i>定制化解决方案</li>
                            <li><i class="iconfont icon-wanmei"></i>透明的报价体系</li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 my-3">
                        <h4 class="mb-3">友情链接</h4>
                        <ul>
                            <li>友情链接</li>
                            <li>友情链接</li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 my-3">
                        <h4 class="mb-3">解决方案</h4>
                        <ul>
                            <li>解决方案</li>
                            <li>解决方案</li>
                            <li>解决方案</li>
                            <li>解决方案</li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 my-3">
                        <h4 class="mb-3">联系我们</h4>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="iconfont icon-weibiaoti-3"></i>
                                <span>北京市房山经济技术开发区</span>
                            </li>
                            <li class="flex items-center">
                                <i class="iconfont icon-dianhua"></i>
                                <span>010—00000000</span>
                            </li>
                            <li class="flex items-center">
                                <i class="iconfont icon-email"></i>
                                <span>contact@contact.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-2">
            <div class="py-2 text-center">
                &copy; 2025 XXXXXX
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
footer {
    .footer-logo {
        width: 150px;
        height: auto;
        margin-bottom: 1rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 0.5rem;
            a{
                color: var(--text-dark);
                text-decoration: none;
                transition: color 0.3s ease;
            }
        }

        i {
            margin-right: 0.5rem;
        }
    }
}
</style>
