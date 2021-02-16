<template>
  <div class="image" :class="version">
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