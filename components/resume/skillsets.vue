<script setup lang="ts">
const skillsets = [
  {
    title: 'Backend',
    skills: [
      'Python (Django, Flask)',
      'Golang',
      'Node.js (Express)',
      'RabbitMQ',
      'Redis'
    ]
  },
  {
    title: 'Frontend',
    skills: [
      'Vue.js & Nuxt.js',
      'React.js & Next.js',
      'React Native'
    ]
  },
  {
    title: 'Payments',
    skills: [
      'Stripe',
      'Mollie'
    ]
  },
  {
    title: 'Ops',
    skills: [
      'Docker',
      'Kubernetes',
      'Gitops',
      'AWS',
      'Firebase',
      'Sentry',
      'NewRelic'
    ]
  }
]
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      v-for="skillset in skillsets"
      :key="skillset.title"
      class="flex flex-col gap-2"
    >
      <div class="text-2xl font-bold">
        {{ skillset.title }}
      </div>
      <div class="flex flex-wrap gap-4">
        <template
          v-for="(skill, skillIndex) in skillset.skills"
          :key="skill"
          class="text-lg"
        >
          <div v-if="skillIndex > 0">
            -
          </div>
          <div>
            {{ skill }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
