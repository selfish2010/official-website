<template>
    <div class="col d-flex align-items-start">
        <div v-if="icon" class="feature-icon bi text-muted flex-shrink-0 me-3">
            <i :class="[' fs-2', 'iconfont', icon]"></i>
        </div>
        <div>
            <h3 v-if="title" class="fw-bold mb-0 fs-4">{{ title }}</h3>
            <p v-if="description" class="service-description">{{ description }}</p>
        </div>
    </div>
    <!-- <div class="feature col">
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
    </div> -->
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
<style scoped>
.bi {
    font-size: 1.75em;
}
</style>
