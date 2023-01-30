<template>
    <Screen class="bg-dark-secondary">
        <div class="flex flex-col gap-2 max-w-2xl text-lg text-light">
            <div>
                I am an experience full-stack developer with a proven track record of delivering tested, maintainable and performant software.
            </div>
            <div>
                My passion for problem-solving and my ability to think outside the box are what set me apart.
            </div>
            <div>
                I am proficient in Python and Javascript and am always looking to expand my knowledge, currently exploring Golang.
            </div>
            <div>
                I have extensive experience building scalable and robust microservices and monolith applications, using frameworks like Django and Flask.
            </div>
            <div>
                My expertise extends to creating engaging web and mobile front-end experiences using libraries such as Vue, React and React Native.
            </div>
            <div>
                I am also well-versed in integrating payment providers, such as Stripe, into complex environments.
            </div>
            <div>
                My AWS skills are top-notch, I am able to deploy and host applications in a modern, secure and scalable way using ECS, EC2, S3, and RDS.
            </div>
            <div>
                Based in Amsterdam 🇳🇱, I am ready for new challenges and eager to exceed expectations.
            </div>
            <div>
                If you're seeking a full-stack developer with a confident approach and a passion for delivering exceptional work, please don't hesitate to reach out. 😀
            </div>
        </div>

        <div class="w-full text-center grid grid-cols-1 md:grid-cols-4 gap-5 max-w-2xl">
            <ResumeSkillsetSkill
                title="Backend"
                :skills="[
                    'Python (Django, Flask)',
                    'Golang',
                    'Redis',
                    'Docker'
                ]"
            />
            <ResumeSkillsetSkill
                title="Frontend"
                :skills="[
                    'Typescript',
                    'Vue.js, Nuxt.js',
                    'React.js',
                    'React native'
                ]"
            />
            <ResumeSkillsetSkill
                title="Ops"
                :skills="[
                    'Docker',
                    'Gitops',
                    'Firebase',
                    'AWS (RDS, EC2, ECS, S3)'
                ]"
            />
            <ResumeSkillsetSkill
                title="Payments"
                :skills="[
                    'Stripe',
                    'Mollie'
                ]"
            />
        </div>
    </Screen>
</template>