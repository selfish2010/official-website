<template>
  <div class="col-6 col-sm-4 col-md-3 col-xl-2 py-2">
    <div class="logo-container">
      <img :src="logoUrl" :alt="partnerName" :title="partnerName" class="partner-logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  partnerName: string;
  logoUrl: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.partner-logo {
  max-width: 100%;
  max-height: 100px;
}

.logo-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  border: 1px solid #dee2e6;
  padding: 10px;
}
</style>
