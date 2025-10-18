<template>
    <div class="col-12 col-md-6 col-lg-3 my-2">
        <div class="common-card card-hover">
            <div class="common-icon">
                <i :class="['iconfont', icon]"></i>
            </div>
            <h3 v-if="title" class="common-title">{{ title }}</h3>
            <p v-if="description" class="common-description">{{ description }}</p>
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
        required: true
    },
})
</script>

<style scoped lang="scss">
.common-card {
    height: 100%;
    background-color: #ffffff;
    padding: 1.5rem;
    transition: all 0.3s ease;
    border: 1px solid #dee2e6;

    /* Bootstrap 默认边框颜色 */
    .normal-ul {
        padding-left: 1rem;

        li {
            list-style-type: circle;
        }
    }
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
}

.common-icon {
    height: 4rem;
    border-radius: 50%;
    margin: 0;
    color: var(--bs-primary);

    .iconfont {
        font-size: 2.5rem;
    }
}
</style>
