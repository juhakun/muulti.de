<template>
  <div class="content">
    <single-project-short
      v-for="project in filteredProjects"
      :key="project.id"
      :id="project.id"
      :projectName="project.name"
      :projectDes="project.description"
      :projectImgSrc="project.img"
      :projectCopyright="project.copyright"
      :selectedLanguage="selectedLanguage"
    ></single-project-short>
    <h2 style="padding-left: 1rem">{{ title }}</h2>
  </div>
</template>

<script>
import SingleProjectShort from "./SingleProjectShort.vue";
export default {
  emits: ["details-wanted-on"],
  props: ["filteredProjects", "title", "selectedLanguage"],
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

<style scoped>
.content {
  padding: 0rem 2rem;
  max-width: 90%;
  min-width: 600px;
  float: left;
}
</style>
