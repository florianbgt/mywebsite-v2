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
    date: 'Jan 2023 to Present',
    where: 'Amsterdam, Netherlands',
    description: `
      As the Founder and Chief Technology Officer of NanoAPI, I lead the development of a command-line interface (CLI) tool designed to help businesses modernize their legacy software systems. Our tool enables the transformation of monolithic codebases into modular microservices, enhancing code visibility and facilitating continuous improvement without disrupting existing workflows.
    `,
    tasks: [
      'Directed the creation of NanoAPI\'s CLI tool, empowering developers to efficiently refactor monolithic architectures into microservices.',
      'Collaborated closely with clients to understand their specific challenges, ensuring our tool effectively addresses their needs and adds substantial value.',
      'Assembled and mentored a diverse team of engineers, fostering a culture of innovation and excellence that propels our mission forward.',
      'Implemented solutions that reduced clients\' cloud infrastructure costs and enhanced software reliability under high-load conditions.',
      'Secured participation in the Techstars Berlin 2024 cohort, gaining valuable mentorship and resources to accelerate NanoAPI\'s growth.'
    ],
    link: 'https://nanoapi.io/'
  },
  {
    title: 'Participant',
    entityName: 'Techstars',
    date: 'Sep 2024 to Dec 2024',
    where: 'Berlin, Germany',
    description: `
      NanoAPI was selected as one of 12 startups from over 6,000 applicants across Europe to join the Techstars Berlin 2024 Accelerator Program. During this intensive program, I engaged in activities that significantly advanced our company's development.
    `,
    tasks: [
      'Collaborated with experienced mentors to refine NanoAPI\'s business model and product strategy.',
      'Conducted extensive market research to confirm product-market fit and identify growth opportunities.',
      'Developed and presented pitches to potential investors, enhancing fundraising skills and expanding our network.',
      'Participated in workshops focused on scaling operations, team building, and leadership development.'
    ],
    link: 'https://www.techstars.com/'
  },
  {
    title: 'Full Stack Developer',
    entityName: 'GET Protocol Foundation',
    date: 'Feb 2022 to Jul 2024',
    where: 'Amsterdam, Netherlands',
    description: `
      At GET Protocol Foundation, I contributed to the development of a complex Kubernetes ecosystem comprising multiple microservices (Python and Golang), a monolithic application (Python), and various web and native applications (Vue.js, React Native).
    `,
    tasks: [
      'Collaborated with Product and UX/UI teams to design and implement a microservice enabling secondary ticket sales, integrating payment processing, KYC procedures, and multi-party payouts via Stripe.',
      'Worked closely with cross-functional teams to create a reservation system within an existing infrastructure, facilitating ticket sales through retail outlets.',
      'Partnered with UX/UI designers to expand the customer dashboard, providing real-time tracking of orders and payments, thereby eliminating dependence on daily CSV reports.',
      'Assisted in onboarding new employees and mentored junior developers, fostering a collaborative and growth-oriented environment.',
      'Addressed production bugs and refactored legacy codebases to improve system stability and performance.'
    ],
    link: 'https://get-protocol.com/'
  },
  {
    title: 'Web Developer & Product Development Engineer',
    entityName: 'Hutchinson',
    date: 'Jan 2019 to Jan 2022',
    where: 'Danielson, Connecticut, USA',
    description: `
      At Hutchinson, I combined my software development skills with engineering expertise to create tools and solutions that streamlined product development and manufacturing processes.
    `,
    tasks: [
      'Designed and built tools to automate the design, validation, and report generation of mechanical components, reducing development costs and time while improving the quality of new products.',
      'Created a monolithic API (Python) and a web application (Nuxt.js) to support engineering teams.',
      'Converted Windows-based scientific computing libraries into pluggable Linux containers using Docker, enhancing portability and scalability.',
      'Extensively used Docker for both development and production environments.',
      'Maintained a self-hosted Linux server to support internal tools.',
      'Adapted and integrated standard design solutions from France to meet U.S. customer requirements.',
      'Implemented additive manufacturing techniques (FDM 3D printing) to lower costs and accelerate prototyping for internal and customer use.',
      'Managed the design, validation, and sourcing of components for non-standard product development.'
    ],
    link: 'https://www.hutchinson.com/'
  },
  {
    title: 'Engineer',
    date: '2015 to 2019',
    description: `
      Various positions in the automotive and aerospace industry as an engineer (scientific computing, design, product validation, application).
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
