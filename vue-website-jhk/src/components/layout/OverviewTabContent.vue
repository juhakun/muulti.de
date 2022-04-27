<template>
  <div class="content">
    <overview-each-content
      v-for="project in projects"
      :key="project.id"
      :projectName="project.name"
      :projectDes="project.description"
      :projectImgSrc="project.img"
    ></overview-each-content>
  </div>
</template>

<script>
import OverviewEachContent from "./OverviewEachContent.vue";
export default {
  components: {
    OverviewEachContent,
  },
  data() {
    return {
      projects: [
        {
          id: "01",
          name: "Ecodesign-Ausstellung",
          description:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in M&uuml;nchen, der Ecostyle in Frankfurt am Main, dem Museum f&uuml;r Kunst und Gewerbe in Hamburg und dem Grassi Museum f&uuml;r Angewandte Kunst in Leipzig.",
          img: require("@/assets/img/ECO_Darmstadt_02.jpg"),
        },
        {
          id: "02",
          name: "Designpreis-Ausstellung",
          description: "Seit 2013 ist die Ausstellung zum BUNDES",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
        },
        {
          id: "03",
          name: "Designpreis-Ausstellung",
          description: "Seit 2013 ist die Ausstellung zum BUNDES",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  padding: 0rem 2rem;
  max-width: 90%;
  min-width: 600px;
  float: left;
}
</style>
