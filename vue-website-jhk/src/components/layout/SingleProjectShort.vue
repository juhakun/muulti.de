<template>
  <table>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="table">
          <section>
            <a href="#">
              <img
                v-if="
                  selectedProject.name !== 'Hotel Weisshaar' &&
                  selectedProject.name !== 'Berliner Republik' &&
                  selectedProject.name !==
                    'Oracle Certified Associate, Java SE 8 Programmer (OCA)'
                "
                :src="project.img"
                @click="selectProject(this.selectedProject)"
              />
              <img v-else :src="project.img" />
            </a>
          </section>
        </div>
      </td>
      <td style="vertical-align: top">
        <h2 v-html="project.name.toUpperCase()" style="color: #404040"></h2>
        <p v-html="project.description"></p>
      </td>
    </tr>
    <tr>
      <td>
        <p class="copyright">{{ project.copyright[0] }}</p>
      </td>
      <td>
        <base-button
          v-if="selectedLanguage === 'de' && selectedProject.id === 'FS1'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/propertyM"
            target="_blank"
            style="color: #29a329"
            >mehr auf GitHub</a
          ></base-button
        >

        <base-button
          v-if="selectedLanguage === 'de' && selectedProject.id === 'FS2'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/catch-the-balloons"
            target="_blank"
            style="color: #29a329"
            >mehr auf GitHub</a
          ></base-button
        >

        <base-button
          v-if="selectedLanguage === 'de' && selectedProject.id === 'FR1'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/muulti.de"
            target="_blank"
            style="color: #29a329"
            >mehr auf GitHub</a
          ></base-button
        >

        <base-button
          @click="selectProject(this.selectedProject)"
          v-if="
            selectedLanguage === 'de' &&
            selectedProject.name !== 'Hotel Weisshaar' &&
            selectedProject.name !== 'Berliner Republik' &&
            selectedProject.name !==
              'Oracle Certified Associate, Java SE 8 Programmer (OCA)'
          "
          style="float: right"
          mode="de-eng"
          ><a href="#" style="color: #29a329">mehr</a></base-button
        >
        <base-button
          v-if="selectedLanguage === 'eng' && selectedProject.id === 'FS1'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/propertyM"
            target="_blank"
            style="color: #29a329"
            >more on GitHub</a
          ></base-button
        >

        <base-button
          v-if="selectedLanguage === 'eng' && selectedProject.id === 'FS2'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/catch-the-balloons"
            target="_blank"
            style="color: #29a329"
            >more on GitHub</a
          ></base-button
        >

        <base-button
          v-if="selectedLanguage === 'eng' && selectedProject.id === 'FR1'"
          style="float: left; margin-left: 0px"
          mode="de-eng"
        >
          <a
            href="https://github.com/juhakun/muulti.de"
            target="_blank"
            style="color: #29a329"
            >more on GitHub</a
          ></base-button
        >

        <base-button
          @click="selectProject(this.selectedProject)"
          v-if="
            selectedLanguage === 'eng' &&
            selectedProject.name !== 'Hotel Weisshaar' &&
            selectedProject.name !== 'Berliner Republik' &&
            selectedProject.name !==
              'Oracle Certified Associate, Java SE 8 Programmer (OCA)'
          "
          style="float: right"
          mode="de-eng"
          ><a href="#" style="color: #29a329">more</a></base-button
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

section {
  height: 233px;
}
</style>
