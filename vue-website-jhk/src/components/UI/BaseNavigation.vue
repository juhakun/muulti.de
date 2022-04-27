<template>
  <div id="nav">
    <base-button @click="$emit('filter-category', 'de-home')">Home</base-button>
    <base-button @click="$emit('filter-category', 'de-software')"
      >Software</base-button
    >
    <base-button @click="$emit('filter-category', 'de-exhibit')"
      >Exhibition / Interior</base-button
    >
    <base-button @click="$emit('filter-category', 'de-graphics')"
      >Graphics</base-button
    >
    <base-button @click="$emit('filter-category', 'de-management')"
      >Design Management</base-button
    >
    <base-button @click="$emit('filter-category', 'de-about')"
      >About</base-button
    >
    <base-button @click="$emit('filter-category', 'de-contact')"
      >Contact</base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
