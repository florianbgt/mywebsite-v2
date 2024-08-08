<script setup lang="ts">
const skillsets = [
  {
    title: 'Backend',
    skills: [
      'Golang',
      'Python',
      'Node.js',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'MongoDB',
      'CouchDB',
    ]
  },
  {
    title: 'Ops',
    skills: [
      'Docker',
      'Kubernetes',
      'Pulumi',
      'Argocd',
      'Gitops',
      'AWS',
      'Azure',
      'Google Cloud',
      'Sentry',
      'NewRelic'
    ]
  },
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
    ]
  },
  {
    title: 'Other',
    skills: [
      'Stripe',
      'Mollie'
    ]
  },
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
          <div class="mr-2">
            {{ skill }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
