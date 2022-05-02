<template>
  <div id="content">
    <image-change :selectedProject="selectedProject"></image-change>

    <div id="detailedText" v-if="selectedLanguage === 'de'">
      <p>
        {{ selectedProject.textDe }}
      </p>
    </div>
    <div id="detailedText" v-else-if="selectedLanguage === 'eng'">
      <p>
        {{ selectedProject.textEng }}
      </p>
    </div>
    <div id="detailedText" v-if="selectedLanguage === 'de'">
      <p>
        AUFTRAGEBER<br />
        {{ selectedProject.name }}
      </p>
      <p>
        LEISTUNGEN<br />
        {{ selectedProject.name }}<br />
        {{ selectedProject.name }}
      </p>
    </div>
    <div id="detailedText" v-if="selectedLanguage === 'eng'">
      <p>
        CLIENT<br />
        {{ selectedProject.name }}
      </p>
      <p>
        SERVICES<br />
        {{ selectedProject.name }}<br />
        {{ selectedProject.name }}
      </p>
    </div>
  </div>
</template>

<script>
import ImageChange from "./ImageChange.vue";
export default {
  components: { ImageChange },
  props: ["selectedProject", "me", "selectedLanguage"],
  data() {
    return {};
  },
  methods: {},
};
</script>
