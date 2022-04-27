<template>
  <header>
    <keep-alive><component :is="selectedCategory"></component> </keep-alive>
  </header>
</template>
<script>
import OverviewProjects from "./layout/OverviewProjects.vue";
export default {
  components: { OverviewProjects },
  data() {
    return {
      selectedCategory: "overview-projects",
      projects: [
        {
          id: "01",
          category: "de-exhibit",
          name: "Bundespreis Ecodesign",
          description:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/ECO_Darmstadt_02.jpg"),
        },
        {
          id: "02",
          category: "de-exhibit",
          name: "Spot on Materials",
          description:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
        },
        {
          id: "03",
          category: "de-exhibit",
          name: "Woher kommt das Neue?",
          description:
            "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
          nameEng: "Where does the New come from?",
          descriptionEng: "",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
        },
      ],
    };
  },
  provide() {
    return {
      allProjects: this.projects,
    };
  },
};
</script>
