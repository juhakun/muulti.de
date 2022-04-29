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
          @click="selectProject(this.id)"
          v-if="selectedLanguage === 'de'"
          style="float: right"
          mode="de-eng"
          >mehr</base-button
        >
        <base-button
          @click="selectProject(this.id)"
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
    return {};
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
  border-bottom: 1px dashed;
  border-color: gray;
  vertical-align: top;
}

.table {
  max-width: 100%;
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
