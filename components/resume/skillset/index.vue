<template>
    <Screen class="bg-primary">
        <div class="w-full text-center grid grid-cols-1 md:grid-cols-4 gap-5 max-w-2xl">
            <ResumeSkillsetSkill
                title="Backend"
                :skills="[
                    'Python (Django, Flask)',
                    'Golang',
                    'Docker'
                ]"
            />
            <ResumeSkillsetSkill
                title="Frontend"
                :skills="[
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
                    'AWS'
                ]"
            />
            <ResumeSkillsetSkill
                title="Payments"
                :skills="[
                    'Stripe'
                ]"
            />
        </div>
    </Screen>
</template>