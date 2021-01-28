<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>

  </div>
</template>

<script>

export default {
  
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>



</style>