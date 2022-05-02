<template>
  <div id="nav">
    <base-button
      v-if="buttonsClicked === false"
      mode="active"
      @click="$emit('filter-category', 'news')"
      >News</base-button
    >
    <base-button v-else @click="$emit('filter-category', 'news')"
      >News</base-button
    >
    <base-button @click="$emit('filter-category', 'software')"
      >Software</base-button
    >
    <base-button @click="$emit('filter-category', 'exhibitions')"
      >Exhibition / Interior</base-button
    >
    <base-button @click="$emit('filter-category', 'graphics')"
      >Graphics</base-button
    >
    <base-button @click="$emit('filter-category', 'management')"
      >Design Management</base-button
    >
    <base-button @click="$emit('show-about', 'about')">About</base-button>
    <base-button @click="$emit('show-contact', 'contact')">Contact</base-button>
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
