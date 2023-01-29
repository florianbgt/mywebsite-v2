<script setup lang="ts">
defineProps<{
  title: string;
  skills:Array<string>;
}>();
</script>

<template>
    <div class="text-light flex flex-col gap-2 max-w-2xl">
        <div class="text-3xl font-bold">
            {{ title }}
        </div>
        <div v-for="skill, index in skills" :key="index" class="text-lg">
            {{ skill }}
        </div>
    </div>
</template>