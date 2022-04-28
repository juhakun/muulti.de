<template>
  <header>
    <div id="right">
      <base-button @click="setSelectedLanguage('de')" mode="de-eng"
        >deutsch /
      </base-button>
      <base-button @click="setSelectedLanguage('eng')" mode="de-eng">
        english</base-button
      >
    </div>
    <header-logo></header-logo><the-projects></the-projects>
  </header>
</template>

<script>
import TheProjects from "../TheProjects.vue";
export default {
  components: { TheProjects },
  data() {
    return {
      selectedLanguage: "de",
    };
  },
  methods: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>

<style scoped></style>
