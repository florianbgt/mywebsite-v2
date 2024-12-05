<script setup lang="ts">
const skillsets = [
  {
    title: 'Backend Development',
    skills: [
      'Golang',
      'Python',
      'Javascript/Typescript',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'MongoDB',
      'CouchDB'
    ]
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    skills: [
      'Docker & Kubernetes',
      'GitOps',
      'Pulumi',
      'ArgoCD',
      'AWS',
      'Azure',
      'Google Cloud',
      'Sentry',
      'New Relic'
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js',
      'React Native',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Product Management & UX/UI Design',
    skills: [
      'Product Strategy Development',
      'Roadmap Planning',
      'User Research',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Design Thinking',
      'Figma',
      'Sketch'
    ]
  },
  {
    title: 'Sales & Customer Discovery',
    skills: [
      'Customer Discovery',
      'Customer Relationship Management',
      'Market Research',
      'Lead Generation',
      'Negotiation Skills',
      'Client Engagement'
    ]
  },
  {
    title: 'Team Leadership & Management',
    skills: [
      'Team Leadership',
      'Mentorship',
      'Cross-Functional Team Collaboration',
      'Agile Methodologies',
      'Project Management',
      'Conflict Resolution',
      'Performance Monitoring',
      'Resource Allocation'
    ]
  },
  {
    title: 'Expertise',
    skills: [
      'API Design',
      'Microservices Architecture',
      'Code Splitting Tools',
      'Legacy Code Refactoring',
      'Technical Debt Management'
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
          <div class="mr-2">
            {{ skill }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
