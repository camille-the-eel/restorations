<template>
  <div class="modal" :class="version">
    <section>
      <slot name="default"></slot>
    </section>
    <menu>
      <slot name="action"></slot>
    </menu>
    <ul></ul>
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
.reset {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: white;
}
</style>
