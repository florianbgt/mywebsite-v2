<script setup lang="ts">
const colorMode = useColorMode()

const handleClick = () => {
  if (colorMode.value === "dark") {
    colorMode.value = "light";
  } else {
    colorMode.value = "dark";
  }
};

const iconName = computed(() => {
  if (colorMode.value === "dark") {
    return "material-symbols:light-mode";
  } else {
    return "material-symbols:dark-mode";
  }
});
</script>

<template>
  <button @click="handleClick">
    <Icon 
      :name="iconName" 
      size="2rem"
      class="text-light-primary dark:text-dark-primary"
    />
  </button>
</template>