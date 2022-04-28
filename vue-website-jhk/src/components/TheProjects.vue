<template>
  <header>
    <base-navigation
      @filter-category="filterProjects"
      :buttonsClicked="buttonsClicked"
    ></base-navigation>
    <OverviewProjects
      v-if="detailsWanted === false && buttonsClicked === false"
      :filteredProjects="news"
      @details-wanted2="setDetailStatus"
    ></OverviewProjects>
    <overview-projects
      v-else-if="detailsWanted === false && buttonsClicked === true"
      :filteredProjects="filteredProjects"
      @details-wanted2="setDetailStatus"
    ></overview-projects>
    <SingleProjectLong v-if="detailsWanted === true"></SingleProjectLong>
  </header>
</template>

<script>
import BaseNavigation from "./UI/BaseNavigation.vue";
import OverviewProjects from "./layout/OverviewProjects.vue";
import SingleProjectLong from "./layout/SingleProjectLong.vue";
export default {
  emits: ["filter-category", "details-wanted2"],
  components: {
    OverviewProjects,
    BaseNavigation,
    SingleProjectLong,
  },
  data() {
    return {
      detailsWanted: false,
      component: "overview-projects",
      buttonsClicked: false,
      filteredProjects: undefined,
      news: [
        {
          id: "01",
          category: "software",
          name: "Webseite mit Vue.JS und JavaScript",
          description:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          nameEng: "Website with Vue.JS and JavaScript",
          descriptionEng: "",
          img: require("@/assets/img/vuejs.png"),
          copyright: "",
          news: true,
        },
      ],
      software: [
        {
          id: "01",
          category: "software",
          name: "Webseite mit Vue.JS und JavaScript",
          description:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          nameEng: "Website with Vue.JS and JavaScript",
          descriptionEng: "",
          img: require("@/assets/img/vuejs.png"),
          copyright: "",
          news: true,
        },
      ],
      exhibitions: [
        {
          id: "02",
          category: "exhibit",
          name: "Bundespreis Ecodesign",
          description:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "03",
          category: "exhibit",
          name: "Spot on Materials",
          description:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/som_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "04",
          category: "exhibit",
          name: "Woher kommt das Neue?",
          description:
            "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
          nameEng: "Where does the New come from?",
          descriptionEng: "",
          img: require("@/assets/img/wkdn_03.jpg"),
          copyright: "© Hessen Design e.V. / Britta Büning",
          news: false,
        },
        {
          id: "05",
          category: "exhibit",
          name: "German Shades of Green",
          description:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/gg_tai_02.jpg"),
          copyright: "© IDZ Internationales Design Zentrum Berlin e.V.",
          news: false,
        },
        {
          id: "06",
          category: "exhibit",
          name: "Design Deutschland",
          description:
            "DESIGN DEUTSCHLAND ist eine internationale Wanderausstellung des Rat für Formgebung, die jährlich eine aktuelle, exemplarische Auswahl von jeweils 120 bis 150 Produkten renommierter deutscher Unternehmen und Designer umfasst. Parallel zur Wanderausstellung konnten sich deutsche Unternehmen an einzelnen internationalen Veranstaltungsorten im Rahmen eines Gemeinschaftsstands präsentieren.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/dd_nb_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "07",
          category: "exhibit",
          name: "Imm Cologne",
          description:
            "Im Rahmen der Internationalen Möbelmesse IMM COLOGNE werden jedes Jahr zahlreiche Designaktivitäten und Sonderschauen präsentiert. In den vergangenen Jahren zählten hierzu unter anderen die Trendshow INFORMED BY COLOGNE und der BOULEVARD OF INNOVATIONS.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/imm_09_10.jpg"),
          copyright: "© Koelnmesse / Constantin Meyer",
          news: false,
        },
        {
          id: "08",
          category: "exhibit",
          name: "Nominee selection",
          description:
            "Die Ausstellungsreihe NOMINEE SELECTION zeigte neben den Preisträgern des vom Bundesministerium für Wirtschaft und Technologie ausgelobten Designpreises der Bundesrepublik Deutschland eine Reihe von Produkten, die zum Designpreis 2009 und 2010 nominiert waren.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/DPNS_09_03.jpg"),
          copyright: "© Rat für Formgebung/German Design Council / Guido Mieth",
          news: false,
        },
        {
          id: "09",
          category: "exhibit",
          name: "usability park",
          description:
            "Die Ausstellung USABILITY PARK präsentierte Produkte, die sowohl dem Anspruch an hohe Benutzerfreundlichkeit als auch ästhetischen Ansprüchen der Verbraucher gerecht werden.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/up_08_03.jpg"),
          copyright: "© Frank Nickerl",
          news: false,
        },
        {
          id: "10",
          category: "exhibit",
          name: "Access Berlin Design",
          description:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/abd_08_06.jpg"),
          copyright: "© Antonia Roth",
          news: false,
        },
        {
          id: "11",
          category: "exhibit",
          name: "Ideal Standard",
          description:
            "Das Projekt IDEAL STANDARD – DER CHARME DER DINGE befasste sich mit Produkten des täglichen Lebens. Kernstücke des Projekts waren ein Katalog und eine Ausstellung bei DMY zum Designmai 2006 in Berlin.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/is_06.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "12",
          category: "exhibit",
          name: "Bundespressestrand",
          description:
            "Die bekannte Berliner Sommer-Gastronomie BUNDESPRESSESTRAND eröffnete während der Wintermonate 2004/2005 erstmals eine Winterpräsenz für Abendveranstaltungen in einem zur Sommerlocation nahegelegen Bürogebäude. Die leerstehende Büroetage wurde in eine Winterlandschaft verwandelt, um auch den Berlinern einen kleinen Skiurlaub zu ermöglichen.",
          nameEng: this.name,
          descriptionEng: "",
          img: require("@/assets/img/bps_06.jpg"),
          copyright: "",
          news: false,
        },
      ],
      graphics: [{}],
      management: [{}],
      about: [{}],
      contact: [{}],

      // filteredProjects: [
      //   {
      //     id: "",
      //     category: "home",
      //     name: "Hallo",
      //     description:
      //       "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
      //     nameEng: "Where does the New come from?",
      //     descriptionEng: "",
      //     img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
      //   },
      // ],
    };
  },
  computed: {},

  // properties: {
  //   function() {
  //     if (this.openProjectDetails === "true") {
  //       return {
  //         filteredProjects: "filteredProjects",
  //       };
  //     } else {
  //       return 0;
  //     }
  //   },
  // },

  methods: {
    filterProjects(cat, buttonsClicked) {
      this.buttonsClicked = buttonsClicked;
      if (cat === "news") {
        this.filteredProjects = this.news;
      } else if (cat === "software") {
        this.filteredProjects = this.software;
      } else if (cat === "exhibitions") {
        this.filteredProjects = this.exhibitions;
      } else if (cat === "graphics") {
        this.filteredProjects = this.graphics;
      } else if (cat === "management") {
        this.filteredProjects = this.management;
      } else if (cat === "about") {
        this.filteredProjects = this.about;
      } else if (cat === "contact") {
        this.filteredProjects = this.contact;
      }
    },

    setDetailStatus(details) {
      this.detailsWanted = details;
      console.log(this.detailsWanted);
    },
  },
};
</script>
