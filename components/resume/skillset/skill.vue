<script setup lang="ts">
defineProps<{
  title: string;
  skills:Array<string>;
}>();
</script>

<template>
    <div class="flex flex-col gap-2 max-w-2xl">
        <div class="text-dark text-3xl font-bold">
            {{ title }}
        </div>
        <div v-for="skill, index in skills" :key="index" class="text-dark text-lg font-bold">
            {{ skill }}
        </div>
    </div>
</template>