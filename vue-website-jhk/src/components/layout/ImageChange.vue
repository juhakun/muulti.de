<template>
  <table style="vertical-align: top; padding-top: 0.5rem">
    <tr>
      <h2>
        {{ selectedProject.name.toUpperCase() }}<br />
        {{ selectedProject.name }}
      </h2>
    </tr>
    <tr>
      <td>
        <tr>
          <img :src="img" style="width: 450px" />
        </tr>
      </td>
      <td style="vertical-align: top">
        <tr>
          <td>
            <img
              :src="this.selectedProject.img1"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img1"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img2"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img2"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img3"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img3"
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
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img5"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img5"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img6"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img6"
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
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img8"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img8"
            />
          </td>
          <td></td>
          <td>
            <img
              :src="this.selectedProject.img9"
              style="width: 80px"
              @mouseover="this.img = this.selectedProject.img9"
            />
          </td>
        </tr>
      </td>
    </tr>
    <tr>
      <p class="copyright">{{ selectedProject.copyright }}</p>
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
</style>
