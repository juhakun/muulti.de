<template>
  <div class="content">
    <single-project-short
      v-for="project in filteredProjects"
      :key="project.id"
      :projectName="project.name"
      :projectDes="project.description"
      :projectImgSrc="project.img"
      :projectCopyright="project.copyright"
      @details-wanted="$emit('details-wanted2', true)"
    ></single-project-short>
    <h2 style="padding-left: 1rem">{{ title }}</h2>
  </div>
</template>

<script>
import SingleProjectShort from "./SingleProjectShort.vue";
export default {
  emits: ["details-wanted"],
  props: ["filteredProjects", "title", "selectedLanguage"],
  components: {
    SingleProjectShort,
  },
  data() {
    return {
      detailsWanted: false,
    };
  },
  computed: {
    // properties: function () {
    //   if (this.selectedLanguage === "de") {
    //     for (var i = 0; i < this.filteredProjects.length; i++) {
    //       return {
    //         key: "project.id",
    //         projectName: "project.name",
    //         projectDes: "project.description",
    //         projectImgSrc: "project.img",
    //         projectCopyright: "project.copyright",
    //       };
    //     }
    //   } else {
    //     for (var j = 0; j < this.filteredProjects.length; j++) {
    //       return {
    //         key: "project.id",
    //         projectName: "project.nameEng",
    //         projectDes: "project.descriptionEng",
    //         projectImgSrc: "project.img",
    //         projectCopyright: "project.copyright",
    //       };
    //     }
    //   }
    // },
  },
  // watch: {
  //   selectedLanguage: function (value) {
  //     if (value === "de") {
  //       for (let i = 0; i < this.selectedProjects.length; i++) {
  //         this.selectedProjects[i].name = this.filteredProjects[i].nameDe;
  //         this.selectedProjects[i].description =
  //           this.filteredProjects[i].descriptionDe;
  //       }
  //     } else if (value === "eng") {
  //       for (let i = 0; i < this.selectedProjects.length; i++) {
  //         this.selectedProjects[i].name = this.filteredProjects[i].nameEng;
  //         // this.selectedProjects[i].description =
  //         //   this.filteredProjects[i].descriptionEng;
  //       }
  //     }
  //   },
  // },
  methods: {
    setDetailStatus(details) {
      this.detailsWanted = details;
      console.log(this.detailsWanted);
    },
    statusOpenProjectDetails() {
      this.$emit("details-wanted", this.detailsWanted);
    },
  },
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
