<template>
    <div id="homebanner" class="carousel slide home-banner" data-bs-ride="carousel" data-bs-touch="true">
        <div class="carousel-indicators">
            <button v-for="(item, index) in bannerObj" :key="index" type="button" data-bs-target="#homebannerIndicators"
                :data-bs-slide-to="index" :class="{'active': index === 0}" :aria-current="index === 0 ? 'true' : 'false'"
                :aria-label="`Slide ${index + 1}`"></button>
        </div>
        <div class="carousel-inner">

            <!-- <div class="carousel-item gradient-orange py-20">
                        <div class="container mx-auto px-4"> -->

            <div v-for="(item, index) in bannerObj" :key="index" class="carousel-item py-20"
                :class="bgArr[index] + (index === 0 ? ' active' : '')">
                <div class="container mx-auto px-4">
                    <div class="mx-auto">
                        <h1 class="text-white">
                            {{ item.title }}
                        </h1>
                        <h6>
                            {{ item.description }}
                        </h6>
                        <div class="text-end">
                            <a :href="item.linkUrl" class="banner-link">
                                <span>{{ item.linkText }} </span>
                                <i class="iconfont icon-jiantou_yemian_xiangyou_o ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#homebanner"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next d-none d-md-block" type="button" data-bs-target="#homebanner"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
const bannerObj = reactive([{
    title: '专业微信公众号开发服务',
    description: '专业微信公众号开发服务专业微信公众号开发服务',
    linkText: '查看详情',
    linkUrl: '/services/wechat',
}, {
    title: '跨境电商全渠道营销与私域运营解决方案',
    description: '集供应链管理、多渠道销售、精准营销、用户忠诚度培育和社交分销的综合性商业操作系统',
    linkText: '案例解读',
    linkUrl: '/case/ecommerce',
}, {
    title: '全方位、定制化的网站开发服务',
    description: '覆盖从概念到上线的整个生命周期 构建您的商业成功引擎',
    linkText: '查看详情',
    linkUrl: '/services/website',
}]);
const bgArr = ['gradient-blue', 'gradient-orange', 'gradient-cyan'];
</script>
<style lang="scss" scoped>
.home-banner {
    h1 {
        font-size: 2.5rem !important;
        min-height: 2.5em;
        display: flex;
        align-items: flex-end;
        margin-bottom: 1rem;
    }

    h6 {
        font-size: 1.2rem !important;
        min-height: 2.5em;
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .banner-link {
        display: inline-block;
        color: #fff;
    }
}

/* 首页特定样式 */
.gradient-blue {
    background: linear-gradient(135deg, var(--bs-primary) 0%, var(--bs-info) 100%);
}

.gradient-orange {
    background: linear-gradient(135deg, var(--bs-teal) 0%, var(--bs-orange) 100%);
}

.gradient-cyan {
    background: linear-gradient(135deg, var(--bs-cyan) 0%, var(--bs-green) 100%);
}

.carousel-control-next,
.carousel-control-prev {
    width: 40px;
}
:deep(.carousel-indicators) {
    button {
        height: 4px;
        transition: width 0.5s;
        background-color: rgba(255, 255, 255, 0.5);
    }

    button.active {
        width: 50px;
        background-color: rgba(255, 255, 255, 1);
    }
}
</style>
