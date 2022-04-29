<template>
  <header>
    <header-de-eng
      @filter-language="setLanguage"
      :selectedLanguage="selectedLanguage"
    ></header-de-eng>
    <header-logo></header-logo>
    <base-navigation
      @filter-category="filterProjects"
      :buttonsClicked="buttonsClicked"
    ></base-navigation>
    <overview-projects
      v-if="detailsWanted === false"
      :filteredProjects="filteredProjects"
      :selectedLanguage="selectedLanguage"
    ></overview-projects>
    <SingleProjectLong
      v-if="detailsWanted === true"
      :selectedLanguage="selectedLanguage"
      :selectedProject="filteredProject"
    ></SingleProjectLong>
  </header>
</template>

<script>
import BaseNavigation from "./UI/BaseNavigation.vue";
import OverviewProjects from "./layout/OverviewProjects.vue";
import SingleProjectLong from "./layout/SingleProjectLong.vue";
import HeaderDeEng from "./layout/HeaderDeEng.vue";
export default {
  emits: ["filter-category", "filter-language"],
  components: {
    OverviewProjects,
    BaseNavigation,
    SingleProjectLong,
    HeaderDeEng,
  },
  data() {
    return {
      detailsWanted: false,
      buttonsClicked: false,
      selectedLanguage: "de",
      selectedProject: undefined,
      filteredProjects: [
        {
          id: "01",
          category: "software",
          name: "Webseite mit Vue.JS und JavaScript",
          nameDe: "Webseite mit Vue.JS und JavaScript",
          nameEng: "Website with Vue.JS and JavaScript",
          description:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionDe:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionEng:
            "The Website, that has been written in HTML almost 10 years ago, has now been redone with Vue.Js and JavaScript.",
          img: require("@/assets/img/vuejs.png"),
          copyright: "",
          news: true,
        },
      ],
      news: [
        {
          id: "01",
          category: "software",
          name: "Webseite mit Vue.JS und JavaScript",
          nameDe: "Webseite mit Vue.JS und JavaScript",
          nameEng: "Website with Vue.JS and JavaScript",
          description: "",
          descriptionDe:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionEng:
            "The Website, that has been written in HTML almost 10 years ago, has now been redone with Vue.Js and JavaScript.",
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
          nameDe: "Webseite mit Vue.JS und JavaScript",
          nameEng: "Website with Vue.JS and JavaScript",
          description: "",
          descriptionDe:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionEng:
            "The Website, that has been written in HTML almost 10 years ago, has now been redone with Vue.Js and JavaScript.",
          img: require("@/assets/img/vuejs.png"),
          copyright: "",
          news: true,
        },
      ],

      exhibitions: [
        {
          id: "02",
          category: "exhibit",
          name: "",
          nameDe: "Bundespreis Ecodesign",
          nameEng: "Bundespreis Ecodesign",
          description: "",
          descriptionDe:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
          descriptionEng:
            "Since 2013, the exhibition has been on the move every year with the award winners and nominees of the award and has been exhibited at numerous trade fairs and museums, such as the Munich Creative Business Week in Munich, the Ecostyle in Frankfurt am Main , the Museum of Arts and Crafts in Hamburg and the Grassi Museum for Applied Arts in Leipzig.",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "03",
          category: "exhibit",
          name: "",
          nameDe: "Spot on Materials",
          nameEng: "Spot on Materials",
          description: "",
          descriptionDe:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
          descriptionEng:
            "The exhibition SPOT ON MATERIALS presented new and innovative materials and illustrateed these on the basis of products that have already been implemented. The products and materials make clear, which status materials have as a generator for creativity, for new ideas and unusual solutions.",
          img: require("@/assets/img/som_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "04",
          category: "exhibit",
          name: "Woher kommt das Neue?",
          nameDe: "Woher kommt das Neue?",
          nameEng: "Where does the New come from?",
          description: "",
          descriptionDe:
            "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
          descriptionEng:
            "The exhibition WHERE DOES THE NEW COME FROM – CREATIVITY AND INGENUITY IN DESIGN focussed on the creative process rather than on the final product: sensitivity, passion, openness for the new and unexpected and the courage to cross boundaries characterise this process and the work of the creatives and enable the development of unique ideas.",
          img: require("@/assets/img/wkdn_03.jpg"),
          copyright: "© Hessen Design e.V. / Britta Büning",
          news: false,
        },
        {
          id: "05",
          category: "exhibit",
          name: "",
          nameDe: "German Shades of Green",
          nameEng: "German Shades of Green",
          description: "",
          descriptionDe:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          descriptionEng:
            "The exhibition GERMAN SHADES OF GREEN—SUSTAINABLE DESIGN FROM GERMANY showcased examples of sustainable design. It showed by means of products, concepts and ideas from Germany how sustainability can be implemented into design and how design decisively contributes to the success of sustainable development.",
          img: require("@/assets/img/gg_tai_02.jpg"),
          copyright: "© IDZ Internationales Design Zentrum Berlin e.V.",
          news: false,
        },
        {
          id: "06",
          category: "exhibit",
          name: "",
          nameDe: "Design Deutschland",
          nameEng: "Design Deutschland",
          description: "",
          descriptionDe:
            "DESIGN DEUTSCHLAND ist eine internationale Wanderausstellung des Rat für Formgebung, die jährlich eine aktuelle, exemplarische Auswahl von jeweils 120 bis 150 Produkten renommierter deutscher Unternehmen und Designer umfasst. Parallel zur Wanderausstellung konnten sich deutsche Unternehmen an einzelnen internationalen Veranstaltungsorten im Rahmen eines Gemeinschaftsstands präsentieren.",
          descriptionEng:
            "DESIGN DEUTSCHLAND is an international travelling exhibition of the German Design Council, that annually presents a current, exemplary selection of 120 to 150 products of renowned German companies and designers. In addition to the travelling exhibition German design brands had the opportunity to present themselves within a joint fair stand at single international venues.",
          img: require("@/assets/img/dd_nb_01.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "07",
          category: "exhibit",
          name: "",
          nameDe: "Imm Cologne",
          nameEng: "Imm Cologne",
          description: "",
          descriptionDe:
            "Im Rahmen der Internationalen Möbelmesse IMM COLOGNE werden jedes Jahr zahlreiche Designaktivitäten und Sonderschauen präsentiert. In den vergangenen Jahren zählten hierzu unter anderen die Trendshow INFORMED BY COLOGNE und der BOULEVARD OF INNOVATIONS.",
          descriptionEng:
            "Each year numerous design activities and special shows are being presented during the international furniture fair IMM COLOGNE including INFORMED BY COLOGNE and the BOULEVARD OF INNOVATIONS in 2007, 2009 and 2010.",
          img: require("@/assets/img/imm_09_10.jpg"),
          copyright: "© Koelnmesse / Constantin Meyer",
          news: false,
        },
        {
          id: "08",
          category: "exhibit",
          name: "",
          nameDe: "Nominee selection",
          nameEng: "Nominee selection",
          description: "",
          descriptionDe:
            "Die Ausstellungsreihe NOMINEE SELECTION zeigte neben den Preisträgern des vom Bundesministerium für Wirtschaft und Technologie ausgelobten Designpreises der Bundesrepublik Deutschland eine Reihe von Produkten, die zum Designpreis 2009 und 2010 nominiert waren.",
          descriptionEng:
            "The exhibition series NOMINEE SELECTION showed products that were nominated for the design prize of the Federal Republic of Germany—awarded by the Federal Ministry of Economy—in 2009 and 2010 in addition to the winners of the design prize.",
          img: require("@/assets/img/DPNS_09_03.jpg"),
          copyright: "© Rat für Formgebung/German Design Council / Guido Mieth",
          news: false,
        },
        {
          id: "09",
          category: "exhibit",
          name: "",
          nameDe: "usability park",
          nameEng: "usability park",
          description: "",
          descriptionDe:
            "Die Ausstellung USABILITY PARK präsentierte Produkte, die sowohl dem Anspruch an hohe Benutzerfreundlichkeit als auch ästhetischen Ansprüchen der Verbraucher gerecht werden.",
          descriptionEng: "",
          img: require("@/assets/img/up_08_03.jpg"),
          copyright: "© Frank Nickerl",
          news: false,
        },
        {
          id: "10",
          category: "exhibit",
          name: "",
          nameDe: "Access Berlin Design",
          nameEng: "Access Berlin Design",
          description: "",
          descriptionDe:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          descriptionEng:
            "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
          img: require("@/assets/img/abd_08_06.jpg"),
          copyright: "© Antonia Roth",
          news: false,
        },
        {
          id: "11",
          category: "exhibit",
          name: "",
          nameDe: "Ideal Standard",
          nameEng: "Ideal Standard",
          description: "",
          descriptionDe:
            "Das Projekt IDEAL STANDARD – DER CHARME DER DINGE befasste sich mit Produkten des täglichen Lebens. Kernstücke des Projekts waren ein Katalog und eine Ausstellung bei DMY zum Designmai 2006 in Berlin.",
          descriptionEng:
            "The project IDEAL STANDARD—THE CHARM OF THINGS was concerned with products of our everyday life. A catalogue and an exhibition at DMY within the Designmai 2006 in Berlin were two central parts of the project.",
          img: require("@/assets/img/is_06.jpg"),
          copyright: "",
          news: false,
        },
        {
          id: "12",
          category: "exhibit",
          name: "",
          nameDe: "Bundespressestrand",
          nameEng: "Bundespressestrand",
          description: "",
          descriptionDe:
            "Die bekannte Berliner Sommer-Gastronomie BUNDESPRESSESTRAND eröffnete während der Wintermonate 2004/2005 erstmals eine Winterpräsenz für Abendveranstaltungen in einem zur Sommerlocation nahegelegen Bürogebäude. Die leerstehende Büroetage wurde in eine Winterlandschaft verwandelt, um auch den Berlinern einen kleinen Skiurlaub zu ermöglichen.",
          descriptionEng:
            "In 2004/2005 the well known Berlin summer event location BUNDESPRESSESTRAND for the first time opened up a winter venue for evening events in an office buliding near to the summer site. The empty office floor was transformed into a winter landscape in order to allow the Berliners a small skiing vacation.",
          img: require("@/assets/img/bps_06.jpg"),
          copyright: "",
          news: false,
        },
      ],

      graphics: [{}],

      management: [{}],

      about: [{}],

      contact: [{}],
    };
  },

  provide() {
    return {
      selectProject: this.setSelectedProject,
    };
  },
  computed: {},
  methods: {
    setLanguage(language) {
      this.selectedLanguage = language;
      this.filterLanguage(this.selectedLanguage);
      this.buttonsClicked = true;
      // console.log(this.selectedLanguage);
    },
    filterLanguage(language) {
      console.log(this.selectedLanguage);
      if (language === "de") {
        for (let i = 0; i < this.filteredProjects.length; i++) {
          this.filteredProjects[i].name = this.filteredProjects[i].nameDe;
          this.filteredProjects[i].description =
            this.filteredProjects[i].descriptionDe;
        }
      } else if (language === "eng") {
        for (let i = 0; i < this.filteredProjects.length; i++) {
          this.filteredProjects[i].name = this.filteredProjects[i].nameEng;
          this.filteredProjects[i].description =
            this.filteredProjects[i].descriptionEng;
        }
      }
    },

    filterProjects(cat) {
      this.buttonsClicked = true;
      this.detailsWanted = false;
      if (cat === "news") {
        this.filteredProjects = this.projects.filter((proj) => proj === "news");
      } else if (cat === "software") {
        this.filteredProjects = this.projects.filter(
          (proj) => proj === "software"
        );
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
      this.filterLanguage(this.selectedLanguage);
    },

    setSelectedProject(project) {
      this.detailsWanted = true;
      console.log(this.detailsWanted);
      this.filteredProject = project;

      console.log(this.filteredProject.name);
    },
  },
};
</script>
