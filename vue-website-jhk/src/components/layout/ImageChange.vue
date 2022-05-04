<template>
  <table style="vertical-align: top; padding-top: 0.5rem">
    <tr>
      <td>
        <tr v-if="selectedProject.copyright[1] !== ''">
          <section>
            <img
              :src="img"
              style="width: 450px; padding-top: 0rem; padding-bottom: 0rem"
            />
          </section>
          <p class="copyright">{{ selectedProject.copyright[1] }}</p>
        </tr>
        <tr v-else-if="selectedProject.copyright[1] === ''">
          <section>
            <img
              :src="img"
              style="width: 450px; padding-top: 0rem; padding-bottom: 1rem"
            />
          </section>
          <p class="copyright">{{ selectedProject.copyright[1] }}</p>
        </tr>
      </td>
      <td style="vertical-align: top; padding-top: 0rem">
        <tr>
          <td>
            <img
              :src="this.selectedProject.img1"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img1"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img2"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img2"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img3"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img3"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <img
              :src="this.selectedProject.img4"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img4"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img5"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img5"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img6"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img6"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <img
              :src="this.selectedProject.img7"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img7"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img8"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img8"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img9"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img9"
              @mouseout="this.img = this.selectedProject.img"
            />
          </td>
        </tr>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["selectedProject"],
  data() {
    return {
      img: this.selectedProject.img,
    };
  },
};
</script>

<style scoped>
.copyright {
  font-size: 7pt;
  color: #7f7f7f;
}

section {
  height: 300px;
}
</style>
