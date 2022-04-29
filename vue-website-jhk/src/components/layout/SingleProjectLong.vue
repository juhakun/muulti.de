<template>
  <div id="content">
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
            <img :src="img" style="width: 500px" />
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
    <div id="detailedText">
      <p>
        Bei der Konzeption und Gestaltung der Wanderausstellung wurde besonderen
        Wert auf Aspekte der Nachhaltigkeit gelegt. Die Verwendung nachhaltiger
        Materialien, der langfristige Einsatz und die dafür erforderliche,
        flexible Anpassung an wechselnde Exponate und Ausstellungsorte sowie
        platzsparender und kostengünstiger Transport standen für die Gestaltung
        hierbei im Vordergrund. Seit 2013 ist die Ausstellung jährlich mit den
        Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war
        bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie
        der Munich Creative Business Week in München, der Ecostyle in Frankfurt
        am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi
        Museum für Angewandte Kunst in Leipzig.
      </p>
    </div>
    <div id="detailedText" style="border-color: white">
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
  </div>
</template>

<script>
export default {
  props: ["selectedProject"],
  data() {
    return { img: this.selectedProject.img };
  },
  methods: {
    setImage() {},
  },
};
</script>
<style scoped>
.copyright {
  font-size: 7pt;
  color: #7f7f7f;
}
</style>
