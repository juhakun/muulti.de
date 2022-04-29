<template>
  <table>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="table">
          <img :src="projectImgSrc" />
        </div>
      </td>
      <td style="vertical-align: top">
        <h2>{{ projectName.toUpperCase() }}</h2>
        <p>{{ projectDes }}</p>
      </td>
    </tr>
    <tr>
      <td>
        <p class="copyright">{{ projectCopyright }}</p>
      </td>
      <td>
        <base-button
          @click="selectProject(this.selectedProject)"
          v-if="selectedLanguage === 'de'"
          style="float: right"
          mode="de-eng"
          >mehr</base-button
        >
        <base-button
          @click="selectProject(this.selectedProject)"
          v-else-if="selectedLanguage === 'eng'"
          style="float: right"
          mode="de-eng"
          >more</base-button
        >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  inject: ["selectProject"],
  props: [
    "id",
    "projectName",
    "projectDes",
    "projectImgSrc",
    "projectCopyright",
    "selectedLanguage",
  ],
  data() {
    return {
      selectedProject: {
        id: this.id,
        name: this.projectName,
        description: this.projectDes,
        im: this.projectImgSrc,
        copyright: this.projectCopyright,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
img {
  max-width: 400px;
}

table {
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  margin-right: 8rem;
  border-bottom: 1px dashed;
  border-color: gray;
  vertical-align: top;
}

.table {
  max-width: 90%;
  min-width: 300px;
  margin-left: rem;
  margin-right: 1rem;
  float: left;
}

.copyright {
  font-size: 7pt;
  color: #7f7f7f;
}
</style>
