<script setup lang="ts">
    type Event = {
        title: string;
        entityName?: string;
        date?: string;
        where?: string;
        description?: string;
        tasks?: Array<string>;
        link?: string;
    }

const events: Array<Event> = [
  {
    title: 'Founder & CTO',
    entityName: 'NanoAPI',
    date: 'Jan 2023 to present',
    where: 'Amsterdam, Netherlands',
    description: `
      Provide company with a plug and play infrastructure that deploy and scale their software in an efficient, secure and cost effective manner.
      <br>
      Are you struggling handling high load on your software? Wanna reduce your cloud bill? 
      <br>
      We can help you! Feel free to get in touch with us.
    `,
    link: 'https://nanoapi.io/'
  },
  {
    title: 'Fullstack Developer',
    entityName: 'GET Protocol',
    date: 'Jan 2022 to Jul 2024',
    where: 'Amsterdam, Netherlands',
    description: `
      Developing all kind of new features in a complex kubernetes ecosystem of several microservices (Python and Golang) and a monolith application (Python) as well as several web and native applications (Vue.js, React native)
    `,
    tasks: [
      `
        Diversifing revenue source by designing, developing and integrating a new microservice allowing secondary sale of tickets.
        <br>
        Process payments, KYCs, and send payouts to multiple parties (end users, customers, customers of customers) using Stripe.
      `,
      'Creating a resevation system into a complexe existing system allowing the sale of tickets through shops.',
      'Expanding an existing dashboard, so our customers can track buyers orders and payments in real time instead of relying on daily generated csv reports.',
      'Onboarding new employees and mentor junior developers.',
      'Troubleshooting and hotfix production bugs, improve infrastructure, refactor existing codebase.'
    ],
    link: 'https://get-protocol.com/'
  },
  {
    title: 'Product development engineer',
    entityName: 'Hutchinson',
    date: 'Jan 2019 to Jan 2022',
    where: 'Providence, RI, USA',
    description: `
      Designed and Developed a set of tools to automate the design, validation and report generation of mechanical components.
      <br>
      Cut down the development cost and time, and increased the quality of new products being developed.
    `,
    tasks: [
      'Created a monolith API (Python) and Web application (Nuxt.js)',
      'Converted windows based scientific computing libraries into a pluggable Linux container using Docker.',
      'Extensively used Docker from development to production.',
      'Maintained a self hosted Linux server.'
    ],
    link: 'https://www.hutchinson.com/'
  },
  {
    title: 'Mechanical Engineer',
    date: '2015 to 2019',
    description: `
      I worked as a mechanical engineer in the aerospace and automotive industry before I persued my career as a software engineer.
      <br> 
      I worked on projects related to the design and validation of mechanical components and systems, and developed scientific computing libraries.
    `
  },
  {
    title: 'MsC in Mechanical Engineering',
    entityName: 'University of Technology of Compiegne',
    date: '2018',
    where: 'France'
  },
  {
    title: 'BsC in Material Science',
    entityName: 'University of Rennes',
    date: '2015',
    where: 'France'
  }
]
</script>

<template>
  <div class="flex flex-col max-w-[1000px] gap-10">
    <div
      v-for="event in events"
      :key="event.title"
      class="flex flex-col gap-2"
    >
      <div class="flex justify-start items-center gap-5">
        <div class="text-2xl">
          <span class="font-bold">
            {{ event.title }}
          </span>
          <template v-if="event.entityName">
            @ {{ event.entityName }}
          </template>
        </div>
        <div
          v-if="event.date"
          class="text-lg"
        >
          {{ event.date }}
        </div>
        <div
          v-if="event.where"
          class="text-lg"
        >
          {{ event.where }}
        </div>
      </div>

      <div v-if="event.description" class="text-wrap" v-html="event.description" />

      <ul v-if="event.tasks" class="list-disc list-inside">
        <li v-for="task in event.tasks" :key="task">
          {{ task }}
        </li>
      </ul>

      <a v-if="event.link" :href="event.link" target="_blank" class="font-bold text-light-link dark:text-dark-link hover:underline">
        {{ event.link }}
      </a>
    </div>
  </div>
</template>
