<template>
  <button :class="version">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>

</style>