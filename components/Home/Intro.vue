<template>
  <div class="space-y-6">
    <NuxtImg src="avatar.png" alt="Rahul R"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-20 w-20 sm:h-20 sm:w-20"
      sizes="64px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello! I'm Rahul 👋
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I’m a Senior Software Engineer from Kerala, India, 
      with over 5 years of experience in building web applications and sites using JavaScript, Vue, Angular, Golang, and Node.
      I finally built this website—my own little space on the internet to share experiments, professional projects, and thoughts, mostly around tech and design.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Senior Software Enginner at
      <a href="https://way.com" target="_blank" class="underline">Way.com</a>, and
      By night (and weekends), you'll find me tinkering with random software tools or new project ideas.  
    </p>
    <p class="text-gray-900 dark:text-gray-400">
       I also enjoy photography.
    </p>
    <UButton 
      label="Download Resume" 
      size="xs" 
      color="black"
      to="resume.pdf"
      target="_blank"
      download
      @click="sendVisitorActionNotification('Resume Downloaded')"
      icon="i-heroicons-document-arrow-down"
    />
  </div>
</template>

<script setup>
import { useTelegram } from '~/composables/useTelegram';

const { sendVisitorActionNotification } = useTelegram();
useSeoMeta({
  title: "Rahul R",
  description:
    "I'm Rahul R, your friendly neighborhood senior software engineer, from Kerala, India. I specialize in building web applications and sites using Javascript, Vue, Angular, Golang & Node.",
});
</script>
