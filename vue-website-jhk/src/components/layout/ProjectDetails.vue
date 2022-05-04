<template>
  <div id="content">
    <div>
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
    </div>
  </div>
</template>

<script>
import ImageChange from "./ImageChange.vue";
export default {
  components: { ImageChange },
  props: ["selectedProject", "selectedLanguage"],
  data() {
    return {};
  },
  methods: {},
};
</script>
