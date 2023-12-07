<script setup lang="ts">
import Sumary from '@/components/resume/summary.vue'
import Intro from '@/components/resume/intro.vue'
import Skillsets from '@/components/resume/skillsets.vue'
import Timeline from '@/components/resume/timeline.vue'

const components = [
  Sumary,
  Intro,
  Skillsets,
  Timeline
]
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div
        class="
            absolute
            w-[50%]
            top-[20%] bottom-[20%]
            bg-gradient-to-t
            from-[#AF6DF0] via-[#68CBEA] to-[#ED1597]
            dark:from-[A250F4 ] dark:via-[#5389F1] dark:to-[#ED1597]
            filter blur-[177px] dark:blur-[255px] opacity-30
            rounded-[28px]
            pointer-events-none
          "
      />
    </div>
    <div
      v-for="(component, index) in components"
      :key="index"
      class="
              flex flex-col gap-10 justify-center items-center
              w-full min-h-screen px-5 py-20
          "
    >
      <component :is="component" />
    </div>
  </div>
</template>
