<template>
  <div class="card" :class="version">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>

</style>