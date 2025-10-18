<template>
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
        <div class="process-step card-hover">
            <h2 class="step-number">
                {{ stepNumber }}
            </h2>
            <h3 class="text-lg font-bold">{{ title }}</h3>
            <div class="text-muted">{{ description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    stepNumber: number;
    title: string;
    description: string;
    hasNextStep?: boolean;
    stepLineWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
    hasNextStep: false,
    stepLineWidth: '80px'
});
</script>

<style lang="scss" scoped>
.process-step {
    height: 100%;
    background: #ffffff;
    padding: 1.5rem 1rem;
    border: 1px solid #dee2e6;
    overflow: hidden;
}

.step-number {
    border: var(--bs-gray-400) solid 1px;
    color: var(--bs-primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 50px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    // margin: 0 auto;
    overflow: hidden;
}
</style>
