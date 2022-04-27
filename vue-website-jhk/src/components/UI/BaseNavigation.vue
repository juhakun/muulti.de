<template>
  <div id="nav">
    <base-button @click="setSelectedTab('de-home')">Home</base-button>
    <base-button @click="setSelectedTab('de-software')">Software</base-button>
    <base-button @click="setSelectedTab('de-exhibit')"
      >Exhibition / Interior</base-button
    >
    <base-button @click="setSelectedTab('de-graphics')">Graphics</base-button>
    <base-button @click="setSelectedTab('de-management')"
      >Design Management</base-button
    >
    <base-button @click="setSelectedTab('de-abaout')">About</base-button>
    <base-button @click="setSelectedTab('de-contact')">Contact</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "de-home",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
