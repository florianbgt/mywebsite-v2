<script setup lang="ts">
const route = useRoute();

const link = computed(() => {
  if (route.path === "/") {
    return {path: "/posts", name: "Posts" };
  }
  return {path: "/", name: "Home" };
});
</script>

<template>
  <NuxtPage/>
</template>
