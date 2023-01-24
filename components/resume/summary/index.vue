<template>
    <Screen class="bg-dark">
        <div class="flex flex-wrap-reverse items-center justify-center gap-10">
            <div class="flex-col text-light">
                <div class="text-4xl mb-2">
                    Hi, I'm
                    <span class="text-primary font-bold">Florian</span>
                </div>
                <div class="text-xl">
                    Full stack developer
                </div>
                <div class="text-primary text-xl">
                    Python | Go | Js | Vue | React | Stripe
                </div>
                <div class="text-md">
                    Based in Amsterdam, Netherlands
                </div>
            </div>
            <nuxt-img
                class="rounded-full shaddow-2xl"
                src="/Florian.jpg"
                alt="Florian Bigot"
                width="250px"
                height="250px"
            />
        </div>
        <div class="flex justify-center">
            <div class="flex items-start flex-col gap-2 text-light">
                <a href="https://github.com/florianbgt" target="_blank" class="flex items-center gap-2 underline">
                    <ResumeSummaryIconsGithub/>
                    https://github.com/florianbgt
                </a>
                <a href="https://linkedin.com/in/florianbgt" target="_blank" class="flex items-center gap-2 underline">
                    <ResumeSummaryIconsLinkedin/>
                    https://linkedin.com/in/florianbgt
                </a>
                <a href="mailto:florian.bigot321@gmail.com" target="_blank" class="flex items-center gap-2 underline">
                    <ResumeSummaryIconsMail/>
                    florian.bigot321@gmail.com
                </a>
                <a href="tel:+31610824034" target="_blank" class="flex items-center gap-2 underline">
                    <ResumeSummaryIconsTel/>
                    +31 6 10 82 40 34
                </a>
                <a href="/Resume_Florian_Bigot.pdf" target="_blank" class="flex items-center gap-2 underline">
                    <ResumeSummaryIconsFile/>
                    My PDF resume
                </a>
            </div>
        </div>
    </Screen>
</template>