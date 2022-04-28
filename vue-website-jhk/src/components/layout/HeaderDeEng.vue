<template>
  <header>
    <div id="right">
      <base-button @click="$emit('filter-language', 'de')" mode="de-eng"
        >deutsch /
      </base-button>
      <base-button @click="$emit('filter-language', 'eng')" mode="de-eng">
        english</base-button
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>

<style scoped></style>
