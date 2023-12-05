<script setup lang="ts">
    type Event = {
        title: string;
        entityName?: string;
        date?: string;
        where?: string;
        description?: string;
        link?: string;
    }

    const events: Array<Event> = [
        {
            title: "Fullstack Developer",
            entityName: "GET Protocol",
            date: "Jan 2022 to present",
            where: "Amsterdam, Netherlands",
            description: `
                Develop all kind of new features in a complex kubernetes ecosystem of several microservices (Python and Golang) and a monolith application (Python) as well as several web and native applications (Vue.js, React native)
                Diversify revenue source by designing and integrating a new microservice that handles secondary sale of tickets. Process KYCs, and payouts to multiple parties (end users, customers, customers of customers) in an async way using Stripe
                Ensure future growth and business scale by implementing a dashboard to track the lifetime of tickets, orders, payments, refunds and payouts.
                Onboard new employees and mentor junior developers
            `,
            link: "https://get-protocol.com/",
        },
        {
            title: "Product development engineer",
            entityName: "Hutchinson",
            date: "Jan 2019 to Dec 2021",
            where: "Providence, RI, USA",
            description: `
                Web applications development using Django REST APIs and Vue universal applications (SPA with PWA and SSR capabilities)
                Extensive use of Docker from development to production
                Conversion of windows based scientific computing libraries into a pluggable Linux container using Docker
                Regular deployments and maintenance of a web applications on a Linux server
            `,
            link: "https://www.hutchinson.com/",
        },
        {
            title: "Mechanical Engineer",
            date: "2015 to 2021",
            description: `
                Before I started my career as a software engineer, I worked as a mechanical engineer in the aerospace and automotive industry.
                The project I worked on were mostly related to the design and validation of mechanical components and systems, and the development of scientific computing libraries.
            `,
        },
        {
            title: "MsC in Mechanical Engineering",
            entityName: "University of Technology of Compiegne",
            date: "2018",
            where: "France",
        },
        {
            title: "BsC in Material Science",
            entityName: "University of Rennes",
            date: "2015",
            where: "France",
        },
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
                        at {{ event.entityName }}
                    </template>
                </div>
                <div
                    v-if="event.date"
                    class="text-lg"
                >
                    {{ event.date  }}
                </div>
                <div
                    v-if="event.where"
                    class="text-lg"
                >
                    {{ event.where }}
                </div>
            </div>

            <div v-if="event.description" class="text-wrap">
                {{ event.description }}
            </div>

            <a v-if="event.link" :href="event.link" target="_blank" class="font-bold hover:underline">
                {{ event.link }}
            </a>
        </div>
    </div>
</template>