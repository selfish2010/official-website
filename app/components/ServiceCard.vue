<template>
    <div class="feature col">
        <div class="service-card card-hover">
            <div v-if="icon" class="feature-icon">
                <i :class="[' fs-2', 'iconfont', icon]"></i>
            </div>
            <h3 v-if="title" class="service-title">{{ title }}</h3>
            <p v-if="description" class="service-description">{{ description }}</p>
            <slot></slot>
            <a v-if="link" :href="link" class="service-link">
                了解更多 <i class="iconfont icon-jiantou_yemian_xiangyou_o ml-2"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
.service-card {
    height: 100%;
    background-color: #ffffff;
    padding: 1.5rem;
    transition: all 0.3s ease;
    border: 1px solid #dee2e6;
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
}

.feature-icon {
    // width: 4rem;
    height: 4rem;
    border-radius: .75rem;
    // background-color: rgba(var(--bs-primary-rgb), 0.1);
    // width: 4rem;
    // height: 4rem;
    // border-radius: 50%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // margin-bottom: 1.25rem;
    // color: var(--bs-primary);

    // .iconfont {
    //     font-size: 2.5rem;
    // }
}
</style>
