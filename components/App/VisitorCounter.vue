<template>
  <div class="px-4 flex items-center justify-center flex-col">
    <div class="flex items-center justify-center">
      <p class="text-sm text-gray-500 dark:text-gray-400 mr-2">Total Visitors:</p>
      <span
        ref="target"
        class="flex tabular-nums text-slate-900 dark:text-white text-sm font-extrabold [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter"
      >
        <span class="sr-only">{{ visitorCount }}</span>
      </span>
    </div>
    <p v-if="loading" class="text-xs mt-2 text-gray-500">Loading visitor count...</p>
    <p v-else-if="error" class="text-xs mt-2 text-red-500">{{ error }}</p>
    <p v-else class="text-xs mt-2 text-gray-500">
      Last visited user: {{ lastUpdated }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
const visitorCount = ref(0);
const loading = ref(true);
const error = ref(null);
const lastUpdated = ref('');

const fetchVisitorCount = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await fetch('https://api.counterapi.dev/v1/rahulraghu.com/rahulraghu.com/up');
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    visitorCount.value = data.count;
    
    // Format date as DD/MM/YYYY, h:mm:ss AM/PM
    const updatedDate = new Date(data.updated_at);
    const day = String(updatedDate.getDate()).padStart(2, '0');
    const month = String(updatedDate.getMonth() + 1).padStart(2, '0');
    const year = updatedDate.getFullYear();
    const time = updatedDate.toLocaleTimeString('en-US');
    
    lastUpdated.value = `${day}/${month}/${year}, ${time}`;
        
    startCounter();
  } catch (err) {
    console.error('Error fetching visitor count:', err);
    error.value = 'Failed to load visitor count';
  } finally {
    loading.value = false;
  }
};

const startCounter = () => {
  const counter = document.querySelector(".animate-counter");
  counter.animate([{ "--num": 0 }, { "--num": visitorCount.value }], {
    duration: 700,
    easing: "ease-out",
    fill: "forwards",
  });
};

watchOnce(targetIsVisible, () => {
  if (!loading.value && !error.value) {
    startCounter();
  }
});

onMounted(() => {
  fetchVisitorCount();
});
</script>

<style scoped>
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: v-bind(visitorCount);
  }
}
</style>
