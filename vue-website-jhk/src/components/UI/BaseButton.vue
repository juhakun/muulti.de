<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.de-eng {
  padding: 0.75rem 0.15rem 0rem;
  font-size: 10pt;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
