<template>
  <div class="">
    <div class="flex justify-between items-start">
      <div>
        <time
          class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
          datetime="2022-09-05"
          ><span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
            ><span
              class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"
            ></span
          ></span>
          {{ date }}
        </time>
        <h2 class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
          {{ title }}
        </h2>
      </div>
      <div v-if="badge" class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded-full">
        {{ badge }}
      </div>
    </div>
    <p class="relative z-10 mt-2 text-sm text-gray-800 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    default: ''
  }
});
</script>
