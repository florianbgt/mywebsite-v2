<script setup lang="ts">
const skillsets = [
  {
    title: 'Backend',
    skills: [
      'Python (Django, Flask)',
      'Golang',
      'JS & TS (Express.js)',
      'Redis',
      'RabbitMQ'
    ]
  },
  {
    title: 'Frontend',
    skills: [
      'React.js, Next.js',
      'Vue.js, Nuxt.js',
      'React Native'
    ]
  },
  {
    title: 'Ops',
    skills: [
      'Docker',
      'Kubernetes',
      'k9s, kubectl',
      'Gitops',
      'Firebase',
      'AWS',
      'Sentry',
      'NewRelic'
    ]
  },
  {
    title: 'Payments',
    skills: [
      'Stripe (Payment, Payout, Connect)',
      'Mollie (Payment)'
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
