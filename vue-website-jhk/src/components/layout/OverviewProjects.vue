<template>
  <div id="content">
    <single-project-short
      v-for="project in filteredProjects"
      :key="project.id"
      :id="project.id"
      :projectCategory="project.category"
      :projectName="project.name"
      :projectDes="project.description"
      :projectText="project.text"
      :projectTextDe="project.textDe"
      :projectTextEng="project.textEng"
      :projectImgSrc="project.img"
      :projectImgSrc1="project.img1"
      :projectImgSrc2="project.img2"
      :projectImgSrc3="project.img3"
      :projectImgSrc4="project.img4"
      :projectImgSrc5="project.img5"
      :projectImgSrc6="project.img6"
      :projectImgSrc7="project.img7"
      :projectImgSrc8="project.img8"
      :projectImgSrc9="project.img9"
      :projectCopyright="project.copyright"
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
