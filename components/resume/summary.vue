<script setup lang="ts">
const links = [
  {
    href: 'https://github.com/florianbgt',
    icon: 'grommet-icons:github',
    text: 'https://github.com/florianbgt'
  },
  {
    href: 'https://linkedin.com/in/florianbgt',
    icon: 'grommet-icons:linkedin',
    text: 'https://linkedin.com/in/florianbgt'
  },
  {
    href: 'mailto:florian.bigot321@gmail.com',
    icon: 'grommet-icons:mail',
    text: 'florian.bigot321@gmail.com'
  },
  {
    href: '/Resume_Florian_Bigot.pdf',
    icon: 'grommet-icons:document',
    text: 'My PDF resume'
  }
]
</script>

<template>
  <div class="flex flex-wrap-reverse items-center justify-center gap-10">
    <div class="flex-col">
      <div class="text-4xl mb-2">
        Hi, I'm
        <span class="text-light-primary dark:text-dark-primary font-bold">Florian</span>
      </div>
      <div class="text-xl">
        <s>Software Engineer</s>
        Problem Solver
      </div>
      <div class="text-light-primary dark:text-dark-primary text-xl">
        Python | Golang | Javascript/Typescript
      </div>
      <div class="text-md">
        Living in Amsterdam
        <Icon name="openmoji:flag-netherlands" size="2.5rem" />
      </div>
      <div class="text-lg mt-2">
        Check out
        <NuxtLink to="/posts" class="text-xl font-bold hover:underline">
          My Posts
        </NuxtLink>
      </div>
    </div>
    <NuxtImg
      class="rounded-full shaddow-2xl"
      src="Florian.jpg"
      alt="Florian Bigot"
      width="250px"
      height="250px"
    />
  </div>
  <div class="flex justify-center">
    <div class="flex items-start flex-col gap-2">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        class="flex items-center gap-2 hover:underline"
      >
        <Icon :name="link.icon" size="2.5rem" />
        {{ link.text }}
      </a>
    </div>
  </div>
</template>
