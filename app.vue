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
  <div>
    <div class="absolute flex justify-center items-center w-full">
      <div class="flex w-full max-w-6xl justify-end items-end">
        <NuxtLink
          :to="link.path"
          class="text-light text-xl font-bold underline m-5"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
