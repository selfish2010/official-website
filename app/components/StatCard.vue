<template>
    <div class="col-12 col-md-3 col-xl-3">
        <div class="stat-card bg-white text-center card-hover py-4 my-2">
            <h3 class="text-primary mb-2">{{ value }}</h3>
            <div class="text-muted">{{ label }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    value: string;
    label: string;
}

const props = defineProps<Props>();
</script>
