<template>
  <div class="content">
    <!-- <keep-alive
      ><component :is="selectedTab" v-bind="properties"></component>
    </keep-alive> -->
    <single-project-short
      v-for="project in filteredProjects"
      :key="project.id"
      :projectName="project.name"
      :projectDes="project.description"
      :projectImgSrc="project.img"
      @details-wanted="$emit('details-wanted2', true)"
    ></single-project-short>
  </div>
</template>

<script>
import SingleProjectShort from "./SingleProjectShort.vue";
export default {
  emits: ["details-wanted"],
  props: ["filteredProjects"],
  components: {
    SingleProjectShort,
  },
  data() {
    return {
      detailsWanted: false,
      //   projects: [
      //     {
      //       id: "01",
      //       name: "Bundespreis Ecodesign",
      //       description:
      //         "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
      //       img: require("@/assets/img/ECO_Darmstadt_02.jpg"),
      //     },
      //     {
      //       id: "02",
      //       name: "Spot on Materials",
      //       description:
      //         "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
      //       img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
      //     },
      //     {
      //       id: "03",
      //       name: "Woher kommt das Neue?",
      //       description:
      //         "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
      //       img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
      //     },
      //   ],
    };
  },
  computed: {
    // properties: {
    //   function() {
    //     if (this.selectedTab === "single-project-short") {
    //       for (var i = 0; i < this.filteredProjects.length; i++) {
    //         return {
    //           key: "project.id",
    //           projectName: "project.name",
    //           projectDes: "project.description",
    //           projectImgSrc: "project.img",
    //         };
    //       }
    //     }
    //   },
    // },
  },
  methods: {
    setDetailStatus(details) {
      this.detailsWanted = details;
      console.log(this.detailsWanted);
    },
    statusOpenProjectDetails() {
      this.$emit("details-wanted", this.detailsWanted);
    },
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
