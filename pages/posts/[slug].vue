<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`post-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template>
    <Screen class="bg-dark text-light">
        <div class="min-h-screen w-full max-w-6xl">
            <NuxtLink to="/posts" class="text-light text-xl font-bold underline">
                All posts
            </NuxtLink>
            <template v-if="data">
                <nuxt-img
                    class="w-full h-[15rem] object-cover mt-5"
                    :src="
                        'image' in data
                            ? `${data._path}/${data.image}`
                            : '/posts/default.png'
                    "
                    alt="Florian Bigot"
                />
                <div class="text-3xl text-primary my-2">
                    {{ data.title }}
                </div>
                <ContentDoc />
            </template>
            
        </div>
    </Screen>
</template>