<script setup lang="ts">
const colorMode = useColorMode()
const iconName = ref('')

const handleClick = () => {
  if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}

watch(colorMode, () => {
  if (colorMode.value === 'light') {
    iconName.value = 'material-symbols:dark-mode'
  } else {
    iconName.value = 'material-symbols:light-mode'
  }
})
</script>

<template>
  <button aria-label="light/dark mode" @click="handleClick">
    <Icon
      v-if="iconName"
      :name="iconName"
      size="2rem"
      class="text-light-primary dark:text-dark-primary"
    />
  </button>
</template>
