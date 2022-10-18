<template>
  <div>
    <div>
      <section style="margin-top: 2.5rem" v-if="selectedLanguage === 'de'">
        <h2 style="color: #404040">
          {{ selectedProject.nameDe.toUpperCase() }}<br />
          {{ selectedProject.subtitleDe }}
        </h2>
        <image-change
          v-if="selectedProject.id !== 'FS2'"
          :selectedProject="selectedProject"
        ></image-change>
        <video-player v-else></video-player>

        <div id="detailedText">
          <p v-html="selectedProject.textDe"></p>
        </div>
      </section>
      <section style="margin-top: 2.5rem" v-if="selectedLanguage === 'eng'">
        <h2 style="color: #404040">
          {{ selectedProject.nameEng.toUpperCase() }}<br />
          {{ selectedProject.subtitleEng }}
        </h2>
        <image-change
          v-if="selectedProject.id !== 'FS2'"
          :selectedProject="selectedProject"
        ></image-change>
        <video-player v-else></video-player>

        <div id="detailedText">
          <p v-html="selectedProject.textEng"></p>
        </div>
      </section>
    </div>
    <div v-if="selectedProject.name === 'Design Deutschland'">
      <section style="padding-top: 2rem" v-if="selectedLanguage === 'de'">
        <h2 style="color: #404040">
          {{ designDtld.nameDe.toUpperCase() }}<br />
          {{ designDtld.subtitleDe }}
        </h2>
        <image-change :selectedProject="designDtld"></image-change>

        <div id="detailedText">
          <p>
            {{ designDtld.textDe }}
          </p>
        </div>
      </section>
      <section style="padding-top: 2rem" v-if="selectedLanguage === 'eng'">
        <h2 style="color: #404040">
          {{ designDtld.nameEng.toUpperCase() }}<br />
          {{ designDtld.subtitleEng }}
        </h2>
        <image-change :selectedProject="selectedProject"></image-change>

        <div id="detailedText">
          <p>
            {{ designDtld.textEng }}
          </p>
        </div>
      </section>
    </div>

    <div v-if="selectedProject.name === 'Imm Cologne'">
      <section style="padding-top: 2rem" v-if="selectedLanguage === 'de'">
        <h2 style="color: #404040">
          {{ imm.nameDe.toUpperCase() }}<br />
          {{ imm.subtitleDe }}
        </h2>
        <image-change :selectedProject="imm"></image-change>

        <div id="detailedText">
          <p>
            {{ imm.textDe }}
          </p>
        </div>
      </section>
      <section style="padding-top: 2rem" v-if="selectedLanguage === 'eng'">
        <h2 style="color: #404040">
          {{ imm.nameEng.toUpperCase() }}<br />
          {{ imm.subtitleEng }}
        </h2>
        <image-change :selectedProject="imm"></image-change>

        <div id="detailedText">
          <p>
            {{ selectedProject.textEng }}
          </p>
        </div>
      </section>
    </div>
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
import VideoPlayer from "./VideoPlayer.vue";
export default {
  components: { ImageChange, VideoPlayer },
  props: ["selectedProject", "selectedLanguage", "designDtld", "imm"],
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

p {
  white-space: pre-line;
  margin-bottom: 0rem;
  margin-top: 0rem;
}
</style>
