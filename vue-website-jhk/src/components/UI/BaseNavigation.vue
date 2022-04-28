<template>
  <div id="nav">
    <base-button v-if="buttonsClicked === false" mode="active"
      >News</base-button
    >
    <base-button v-else @click="$emit('filter-category', 'news', true)"
      >News</base-button
    >
    <base-button @click="$emit('filter-category', 'software', true)"
      >Software</base-button
    >
    <base-button @click="$emit('filter-category', 'exhibitions', true)"
      >Exhibition / Interior</base-button
    >
    <base-button @click="$emit('filter-category', 'graphics', true)"
      >Graphics</base-button
    >
    <base-button @click="$emit('filter-category', 'management', true)"
      >Design Management</base-button
    >
    <base-button @click="$emit('filter-category', 'about', true)"
      >About</base-button
    >
    <base-button @click="$emit('filter-category', 'contact', true)"
      >Contact</base-button
    >
  </div>
</template>

<script>
export default {
  props: ["buttonsClicked"],
  data() {
    return {};
  },
  methods: {},
};
</script>
