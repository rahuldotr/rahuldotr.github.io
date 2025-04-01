<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useCookie } from '#app';
import { useTelegram } from '~/composables/useTelegram';

onMounted(async () => {
  const visitorCookie = useCookie('visitor-tracked');
  
  if (!visitorCookie.value) {
    const { sendVisitorActionNotification } = useTelegram();
    await sendVisitorActionNotification("New Visitor");
    
    visitorCookie.value = 'true';
    document.cookie = `visitor-tracked=true; max-age=${60*60*24*30}; path=/; SameSite=Lax`;
  }
});
</script>
