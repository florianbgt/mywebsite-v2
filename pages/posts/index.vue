<script setup lang="ts">
import { watch, ref, type Ref } from "vue";
import { type ParsedContent } from "@nuxt/content/dist/runtime/types";

const search: Ref<string> = ref("");

const posts: Ref<ParsedContent[]> = ref([]);

watch(search, async (value) => {
    fetchPosts(value);
    posts.value = await fetchPosts(value);
});

const fetchPosts = async (search: string) => {
    const posts = await queryContent('/posts/').where({
        title: {
            $icontains: search,
        },
    }).find()
    return posts
};

await useAsyncData(async () => {
    posts.value = await fetchPosts(search.value);
});
</script>

<template>
    <Screen class="bg-dark text-light">
        <div class="min-h-screen w-full max-w-6xl">
            <div class="flex flex-col mb-5 mt-5">
                <label for="search" class="font-bold text-lg mb-2">
                    Search
                </label>
                <input
                    id="search"
                    v-model="search"
                    type="text"
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-dark
                        text-lg
                        focus:outline
                        focus:outline-2
                        focus:outline-offset-0
                        focus:shadow-outline
                        focus:outline-primary
                    "
                    placeholder="Search"
                />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div v-for="post in posts" :key="post._path" class="border border-primary rounded-xl p-2">
                    <NuxtLink :to="post._path">
                        <div class="text-light text-xl font-bold mb-2">
                            {{ post.title }}
                        </div>
                        <nuxt-img
                            class="shaddow-2xl mb-2"
                            :src="
                                'image' in post
                                    ? `${post._path}/${post.image}`
                                    : '/posts/default.png'
                            "
                            alt="Florian Bigot"
                            height="100"
                        />
                        <div class="text-md text-light">
                            {{ post.description }}
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </Screen>
</template>