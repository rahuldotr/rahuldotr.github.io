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
      Last visited: {{ lastUpdated }}
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

    //get the last updated time
    const infoResponse = await fetch('https://api.counterapi.dev/v1/rahulraghu.com/rahulraghu.com/');
    
    if (!infoResponse.ok) {
      throw new Error(`Info API responded with status: ${infoResponse.status}`);
    }
    
    const infoData = await infoResponse.json();
    
    //get the current count and update it
    const countResponse = await fetch('https://api.counterapi.dev/v1/rahulraghu.com/rahulraghu.com/up');
    
    if (!countResponse.ok) {
      throw new Error(`Count API responded with status: ${countResponse.status}`);
    }
    
    const countData = await countResponse.json();
    visitorCount.value = countData.count;
  
    
    const updatedDate = new Date(infoData.updated_at);
    const day = String(updatedDate.getDate()).padStart(2, '0');
    const month = String(updatedDate.getMonth() + 1).padStart(2, '0');
    const year = updatedDate.getFullYear();
    const time = updatedDate.toLocaleTimeString('en-US');
    
    lastUpdated.value = `${day}/${month}/${year}, ${time}`;
    
    if (targetIsVisible.value) {
      startCounter();
    }
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
