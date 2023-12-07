<script setup lang="ts">
import { watch, ref, type Ref } from 'vue'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const posts: Ref<ParsedContent[]> = ref([])
const search: Ref<string> = ref('')

const fetchPosts = async () => {
  const fetchedPosts = await queryContent('posts').where({
    title: {
      $icontains: search.value
    }
  }).find()
  posts.value = fetchedPosts
}

watch(search, async () => {
  await fetchPosts()
})

await useAsyncData(async () => {
  await fetchPosts()
})
</script>

<template>
  <div
    class="
            flex flex-col gap-5 justify-center items-center
            w-full min-h-screen px-5 py-20
        "
  >
    <div class="flex">
      <NuxtLink to="/" class="text-xl font-bold hover:underline">
        Want to learn more about me?
      </NuxtLink>
    </div>

    <div class="flex flex-col">
      <label
        for="search"
        class="font-bold text-lg"
      >
        Search
      </label>
      <input
        id="search"
        v-model="search"
        type="text"
        placeholder="Search"
        class="
                    shaddow appearance-none
                    text-lg text-light-on-background
                    border rounded w-full py-2 px-3
                    focus:outline focus:outline-2
                    focus:outline-offset-0
                    focus:shadow-outline
                    focus:outline-light-primary
                    dark:focus:outline-dark-primary
                "
      >
    </div>

    <div class="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-3">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="
                    flex flex-col justify-around gap-2
                    border border-light-primary
                    dark:border-dark-primary
                    rounded-xl p-2
                "
      >
        <div class="text-xl font-bold">
          {{ post.title }}
        </div>

        <NuxtImg
          class="shaddow-2xl"
          :src="
            'image' in post
              ? `${post.image}`
              : '/posts/default.png'
          "
          :alt="post.title"
          width="600px"
        />
      </NuxtLink>
    </div>
  </div>
</template>
