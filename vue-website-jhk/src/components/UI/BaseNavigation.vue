<template>
  <div id="nav">
    <base-button @click="setCategory('de-home')">Home</base-button>
    <base-button @click="setCategory('de-software')">Software</base-button>
    <base-button @click="setCategory('de-exhibit')"
      >Exhibition / Interior</base-button
    >
    <base-button @click="setCategory('de-graphics')">Graphics</base-button>
    <base-button @click="setCategory('de-management')"
      >Design Management</base-button
    >
    <base-button @click="setCategory('de-about')">About</base-button>
    <base-button @click="setCategory('de-contact')">Contact</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "de-home",
    };
  },
  provide() {
    return {
      category: this.selectedCategory,
    };
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
