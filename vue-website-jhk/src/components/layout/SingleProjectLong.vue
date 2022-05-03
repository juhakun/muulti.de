<template>
  <div id="content">
    <section style="padding-top: 1rem" v-if="selectedLanguage === 'de'">
      <h2>
        {{ selectedProject.nameDe.toUpperCase() }}<br />
        {{ selectedProject.subtitleDe }}
      </h2>
      <image-change :selectedProject="selectedProject"></image-change>

      <div id="detailedText">
        <p>
          {{ selectedProject.textDe }}
        </p>
      </div>
    </section>
    <section style="padding-top: 1rem" v-if="selectedLanguage === 'eng'">
      <h2>
        {{ selectedProject.nameEng.toUpperCase() }}<br />
        {{ selectedProject.subtitleEng }}
      </h2>
      <image-change :selectedProject="selectedProject"></image-change>

      <div id="detailedText">
        <p>
          {{ selectedProject.textEng }}
        </p>
      </div>
    </section>
    <section v-if="selectedLanguage === 'de' && selectedProject.client !== ''">
      <div id="detailedText">
        <p>
          AUFTRAGEBER<br />
          {{ selectedProject.client }}<br /><br />
          LEISTUNGEN
        </p>

        <li v-for="service in selectedProject.servicesDe" :key="service.id">
          {{ service }}<br />
        </li>
      </div>
    </section>
    <section v-if="selectedLanguage === 'eng' && selectedProject.client !== ''">
      <div id="detailedText">
        <p>
          CLIENT<br />
          {{ selectedProject.client }}<br /><br />
          SERVICES
        </p>
        <li v-for="service in selectedProject.servicesEng" :key="service.id">
          {{ service }}<br />
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import ImageChange from "./ImageChange.vue";
export default {
  components: { ImageChange },
  props: ["selectedProject", "me", "selectedLanguage", "servicesDe"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  padding-left: 0.25rem;
}

li {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  list-style-type: "// ";
}

p {
  margin-bottom: 0rem;
  margin-top: 0rem;
}
</style>
