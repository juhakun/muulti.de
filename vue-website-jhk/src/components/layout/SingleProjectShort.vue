<template>
  <table>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="table" @click="selectProject(this.selectedProject)">
          <img :src="project.img" />
        </div>
      </td>
      <td style="vertical-align: top">
        <h2>{{ project.name.toUpperCase() }}</h2>
        <p>{{ project.description }}</p>
      </td>
    </tr>
    <tr>
      <td>
        <p class="copyright">{{ project.copyright[0] }}</p>
      </td>
      <td>
        <base-button
          @click="selectProject(this.selectedProject)"
          v-if="
            selectedLanguage === 'de' &&
            selectedProject.name !== 'Hotel Weisshaar' &&
            selectedProject.name !== 'Berliner Republik'
          "
          style="float: right"
          mode="de-eng"
          >mehr</base-button
        >
        <base-button
          @click="selectProject(this.selectedProject)"
          v-else-if="
            selectedLanguage === 'eng' &&
            selectedProject.name !== 'Hotel Weisshaar' &&
            selectedProject.name !== 'Berliner Republik'
          "
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
  props: ["project", "selectedLanguage"],
  data() {
    return {
      selectedProject: this.project,
    };
  },
  methods: {},
};
</script>

<style scoped>
img {
  max-width: 350px;
  max-height: 233px;
}

td {
  max-width: 350px;
}

.table {
  max-width: 100%;
  margin-left: 0rem;
  margin-right: 1rem;
  float: left;
}

.copyright {
  font-size: 7pt;
  color: #7f7f7f;
}
</style>
