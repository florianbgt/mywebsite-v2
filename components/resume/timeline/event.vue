<script setup lang="ts">
defineProps<{
  title: string;
  companyName?: string;
  from?: string;
  to?: string;
  where?: string;
  links?:Array<string>;
}>();
</script>

<template>
    <div class="flex flex-col">
        <div class="flex justify-start items-start gap-5">
            <div class="text-dark text-2xl">
                <span class="font-bold">
                    {{ title }}
                </span>
                <template v-if="companyName">
                    at {{ companyName }}
                </template>
            </div>
            <div v-if="from || to" class="flex gap-2 text-dark text-lg">
                <span v-if="from || to">
                    <template v-if="from">
                        from {{ from }}
                    </template>
                    <template v-if="to">
                        to {{ to }}
                    </template>
                </span>
                <span v-if="where">
                    {{ where }}
                </span>
            </div>
        </div>
        <div class="text-md text-dark">
            <slot />
        </div>
        <ul v-if="links" class="mt-3">
            <li v-for="(link, index) in links" :key="index">
                <a :href="link" target="_blank" class="text-md text-dark underline">
                    {{ link }}
                </a>
            </li>
        </ul>
    </div>
</template>