<template>
    <div class="col-12 col-md-6 col-xl-4 my-2">
        <div class="solution-card card-hover">
            <div class="overflow-hidden">
                <img :src="imageUrl" alt="解决方案图片" class="" />
            </div>
            <div class="p-3">
                <h3 class="s-title font-bold mb-3">{{ title }}</h3>
                <p class="text-muted mb-3">{{ description }}</p>
                <a v-if="link" :href="link" class="text-primary">
                    了解更多
                    <i class="iconfont icon-jiantou_yemian_xiangyou_o ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.solution-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bs-gray-100);
    .s-title{
        font-size: 1.5rem;
    }
}

.solution-card>div:last-child {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
