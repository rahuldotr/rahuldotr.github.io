<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Awesome things I've found on the internet.";
useSeoMeta({
  title: "Bookmarks | Rahul R",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Node.js Project Structure and Architecture Best Practices",
    url: "https://www.youtube.com/watch?v=fc6o1gwqZuA",
  },
  {
    id: 2,
    label: "What are MicroServices? When & Why is it used? | Monolithic vs Microservices Architecture",
    url: "https://www.youtube.com/watch?v=7IFJb-uLEaI",
  },
  {
    id: 3,
    label: "Julia Evans - Blogs",
    url: "https://jvns.ca/#computer-networking",
  },
  {
    id: 4,
    label: "Beautiful Gradient Generator",
    url: "https://www.joshwcomeau.com/gradient-generator/",
  },
  {
    id: 5,
    label: "3D device mockups",
    url: "https://deviceframes.com/",
  },
  {
    id: 6,
    label: "Box shadow examples",
    url: "https://getcssscan.com/css-box-shadow-examples",
  },
  {
    id: 7,
    label: "Octupos Illustration",
    url: "https://refine.new/",
  },
  {
    id: 8,
    label: "REQRES Mock apis for testing",
    url: "https://reqres.in/",
  },
  {
    id: 9,
    label: "Haikie - SVG background generator",
    url: "https://app.haikei.app/",
  }
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
