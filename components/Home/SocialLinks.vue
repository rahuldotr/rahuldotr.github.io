<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">FIND ME ON</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        @click="sendVisitorActionNotification(`Visited ${link.name}`)"
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTelegram } from '~/composables/useTelegram';
const { sendVisitorActionNotification } = useTelegram();

const links = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/rahuldotr",
    icon: "mdi:instagram",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/rahuldotr",
    icon: "mdi:linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rahuldotr",
    icon: "mdi:twitter",
  },
  {
    name: "Gmail",
    url: "mailto:hello@rahulraghu.com",
    icon: "mdi:gmail",
  },
  {
    name: "GitHub",
    url: "https://github.rahulraghu.com",
    icon: "mdi:github",
  },
  {
    name: "Telegram",
    url: "https://t.me/rahuldotr",
    icon: "mdi:telegram",
  },
];
</script>
