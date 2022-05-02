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
    "projectText",
    "projectTextDe",
    "projectTextEng",
    "projectImgSrc",
    "projectImgSrc1",
    "projectImgSrc2",
    "projectImgSrc3",
    "projectImgSrc4",
    "projectImgSrc5",
    "projectImgSrc6",
    "projectImgSrc7",
    "projectImgSrc8",
    "projectImgSrc9",
    "projectCopyright",
    "selectedLanguage",
  ],
  data() {
    return {
      selectedProject: {
        id: this.id,
        name: this.projectName,
        description: this.projectDes,
        text: this.projectText,
        textDe: this.projectTextDe,
        textEng: this.projectTextEng,
        img: this.projectImgSrc,
        img1: this.projectImgSrc1,
        img2: this.projectImgSrc2,
        img3: this.projectImgSrc3,
        img4: this.projectImgSrc4,
        img5: this.projectImgSrc5,
        img6: this.projectImgSrc6,
        img7: this.projectImgSrc7,
        img8: this.projectImgSrc8,
        img9: this.projectImgSrc9,
        copyright: this.projectCopyright,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
img {
  max-width: 320px;
}

td {
  max-width: 350px;
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
