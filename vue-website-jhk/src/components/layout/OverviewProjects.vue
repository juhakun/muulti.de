<template>
  <div>
    <single-project-short
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      :selectedLanguage="selectedLanguage"
    ></single-project-short>
  </div>
</template>

<script>
import SingleProjectShort from "./SingleProjectShort.vue";
export default {
  emits: ["details-wanted-on"],
  props: ["filteredProjects", "selectedLanguage"],
  components: {
    SingleProjectShort,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped></style>
