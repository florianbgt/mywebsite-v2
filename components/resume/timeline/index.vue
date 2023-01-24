<template>
    <Screen class="bg-primary">
        <div class="flex flex-col max-w-2xl gap-10">
            <ResumeTimelineEvent
                title="Fullstack Developer"
                companyName="GET Protocol"
                from="Jan 2022"
                where="Amsterdam, Netherlands"
                :links="['https://get-protocol.com/']"
            >
                <ul class="list-inside list-disc">
                    <li>
                        Develop all kind of new features in a complex kubernetes ecosystem of several microservices (Python and Golang) and a monolith application (Python) as well as several web and native applications (Vue.js, React native)
                    </li>
                    <li>
                        Diversify revenue source by designing and integrating a new microservice that handles secondary sale of tickets. Process KYCs, and payouts to multiple parties (end users, customers, customers of customers) in an async way using Stripe
                    </li>
                    <li>
                        Ensure future growth and business scale by implementing a dashboard to track the lifetime of tickets, orders, payments, refunds and payouts.
                    </li>
                    <li>
                        Onboard new employees and mentor junior developers
                    </li>
                </ul>
            </ResumeTimelineEvent>
            <ResumeTimelineSeparator/>
            <ResumeTimelineEvent
                title="Product development engineer"
                companyName="Hutchinson"
                from="Jan 2019"
                to="Jan 2022"
                where="Providence, RI, USA"
                :links="['https://www.hutchinson.com/']"
            >
                <ul class="list-inside list-disc">
                    <li>
                        Web applications development using Django REST APIs and Vue universal applications (SPA with PWA and SSR capabilities)
                    </li>
                    <li>
                        Extensive use of Docker from development to production
                    </li>
                    <li>
                        Conversion of windows based scientific computing libraries into a pluggable Linux container using Docker
                    </li>
                    <li>
                        Regular deployments and maintenance of a web applications on a Linux server
                    </li>
                </ul>
            </ResumeTimelineEvent>
            <ResumeTimelineSeparator/>
            <ResumeTimelineEvent
                title="Various engineering jobs in the industry"
                from="2015"
                to="2019"
            >
                <ul class="list-inside list-disc">
                    <li>
                        Areospace and automotive industry
                    </li>
                    <li>
                        Scientific computing
                    </li>
                    <li>
                        3D modeling
                    </li>
                    <li>
                        Design and validation of mechanical parts
                    </li>
                </ul>
            </ResumeTimelineEvent>
            <ResumeTimelineSeparator/>
            <ResumeTimelineEvent
                title="Master of science in Mechanical Engineering (2018)"
                companyName="University of Technology of Compiegne"
                :links="['https://www.utc.fr/']"
            />
            <ResumeTimelineSeparator/>
            <ResumeTimelineEvent
                title="Bachelor of science in Material Science (2015)"
                companyName="University of Rennes"
                :links="['https://www.univ-rennes.fr/']"
            />
        </div>
    </Screen>
</template>