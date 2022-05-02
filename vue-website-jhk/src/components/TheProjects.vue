<template>
  <header>
    <header-de-eng
      @filter-language="setLanguage"
      :selectedLanguage="selectedLanguage"
    ></header-de-eng>
    <header-logo></header-logo>
    <base-navigation
      @filter-category="filterProjects"
      @show-about="showDetailsAbout"
      :buttonsClicked="buttonsClicked"
    ></base-navigation>
    <SingleProjectLong
      v-if="me.detailsWanted === true"
      :selectedLanguage="selectedLanguage"
      :me="me"
    ></SingleProjectLong>
    <overview-projects
      v-if="detailsWanted === false"
      :filteredProjects="filteredProjects"
      :selectedLanguage="selectedLanguage"
      :me="me"
    ></overview-projects>

    <SingleProjectLong
      v-if="detailsWanted === true"
      :selectedLanguage="selectedLanguage"
      :selectedProject="selectedProject"
    ></SingleProjectLong>
    <SingleProjectLong
      v-else-if="me.detailsWanted === true"
      :selectedLanguage="selectedLanguage"
      :me="me"
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
      me: {
        detailsWanted: false,
        portrait: "",
        headline: "",
        cv: "",
        title: "",
        mail: "",
        imprint: "",
      },
      filteredProjects: [
        {
          id: "01",
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
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],
      news: [
        {
          id: "01",
          name: "Webseite mit Vue.JS und JavaScript",
          nameDe: "Webseite mit Vue.JS und JavaScript",
          nameEng: "Website with Vue.JS and JavaScript",
          description: "",
          descriptionDe:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionEng:
            "The Website, that has been written in HTML almost 10 years ago, has now been redone with Vue.Js and JavaScript.",
          img: require("@/assets/img/vuejs.png"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],

      software: [
        {
          id: "01",
          name: "Webseite mit Vue.JS und JavaScript",
          nameDe: "Webseite mit Vue.JS und JavaScript",
          nameEng: "Website with Vue.JS and JavaScript",
          description: "",
          descriptionDe:
            "Die Webseite www.juliahaeusler.com, die vor fast 10 Jahren in HTML geschrieben wurde, wurde nun mit VueJS und JavaScript neu umgesetzt.",
          descriptionEng:
            "The Website, that has been written in HTML almost 10 years ago, has now been redone with Vue.Js and JavaScript.",
          img: require("@/assets/img/vuejs.png"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],

      exhibitions: [
        {
          id: "02",
          name: "",
          nameDe: "Bundespreis Ecodesign",
          nameEng: "GERMAN ECODESIGN AWARD",
          description: "",
          descriptionDe:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
          descriptionEng:
            "Since 2013, the exhibition has been on the move every year with the award winners and nominees of the award and has been exhibited at numerous trade fairs and museums, such as the Munich Creative Business Week in Munich, the Ecostyle in Frankfurt am Main , the Museum of Arts and Crafts in Hamburg and the Grassi Museum for Applied Arts in Leipzig.",
          img: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
        {
          id: "03",
          name: "",
          nameDe: "Spot on Materials",
          nameEng: "Spot on Materials",
          description: "",
          descriptionDe:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
          descriptionEng:
            "The exhibition SPOT ON MATERIALS presented new and innovative materials and illustrateed these on the basis of products that have already been implemented. The products and materials make clear, which status materials have as a generator for creativity, for new ideas and unusual solutions.",
          img: require("@/assets/img/som_01.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
        {
          id: "04",
          name: "Woher kommt das Neue?",
          nameDe: "Woher kommt das Neue?",
          nameEng: "Where does the New come from?",
          description: "",
          descriptionDe:
            "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
          descriptionEng:
            "The exhibition WHERE DOES THE NEW COME FROM – CREATIVITY AND INGENUITY IN DESIGN focussed on the creative process rather than on the final product: sensitivity, passion, openness for the new and unexpected and the courage to cross boundaries characterise this process and the work of the creatives and enable the development of unique ideas.",
          img: require("@/assets/img/wkdn_03.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Hessen Design e.V. / Britta Büning",
        },
        {
          id: "05",
          name: "",
          nameDe: "German Shades of Green",
          nameEng: "German Shades of Green",
          description: "",
          descriptionDe:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          descriptionEng:
            "The exhibition GERMAN SHADES OF GREEN—SUSTAINABLE DESIGN FROM GERMANY showcased examples of sustainable design. It showed by means of products, concepts and ideas from Germany how sustainability can be implemented into design and how design decisively contributes to the success of sustainable development.",
          img: require("@/assets/img/gg_tai_02.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© IDZ Internationales Design Zentrum Berlin e.V.",
        },
        {
          id: "06",
          name: "",
          nameDe: "Design Deutschland",
          nameEng: "Design Deutschland",
          description: "",
          descriptionDe:
            "DESIGN DEUTSCHLAND ist eine internationale Wanderausstellung des Rat für Formgebung, die jährlich eine aktuelle, exemplarische Auswahl von jeweils 120 bis 150 Produkten renommierter deutscher Unternehmen und Designer umfasst. Parallel zur Wanderausstellung konnten sich deutsche Unternehmen an einzelnen internationalen Veranstaltungsorten im Rahmen eines Gemeinschaftsstands präsentieren.",
          descriptionEng:
            "DESIGN DEUTSCHLAND is an international travelling exhibition of the German Design Council, that annually presents a current, exemplary selection of 120 to 150 products of renowned German companies and designers. In addition to the travelling exhibition German design brands had the opportunity to present themselves within a joint fair stand at single international venues.",
          img: require("@/assets/img/dd_nb_01.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
        {
          id: "07",
          name: "",
          nameDe: "Imm Cologne",
          nameEng: "Imm Cologne",
          description: "",
          descriptionDe:
            "Im Rahmen der Internationalen Möbelmesse IMM COLOGNE werden jedes Jahr zahlreiche Designaktivitäten und Sonderschauen präsentiert. In den vergangenen Jahren zählten hierzu unter anderen die Trendshow INFORMED BY COLOGNE und der BOULEVARD OF INNOVATIONS.",
          descriptionEng:
            "Each year numerous design activities and special shows are being presented during the international furniture fair IMM COLOGNE including INFORMED BY COLOGNE and the BOULEVARD OF INNOVATIONS in 2007, 2009 and 2010.",
          img: require("@/assets/img/imm_09_10.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Koelnmesse / Constantin Meyer",
        },
        {
          id: "08",
          name: "",
          nameDe: "Nominee selection",
          nameEng: "Nominee selection",
          description: "",
          descriptionDe:
            "Die Ausstellungsreihe NOMINEE SELECTION zeigte neben den Preisträgern des vom Bundesministerium für Wirtschaft und Technologie ausgelobten Designpreises der Bundesrepublik Deutschland eine Reihe von Produkten, die zum Designpreis 2009 und 2010 nominiert waren.",
          descriptionEng:
            "The exhibition series NOMINEE SELECTION showed products that were nominated for the design prize of the Federal Republic of Germany—awarded by the Federal Ministry of Economy—in 2009 and 2010 in addition to the winners of the design prize.",
          img: require("@/assets/img/DPNS_09_03.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Rat für Formgebung/German Design Council / Guido Mieth",
        },
        {
          id: "09",
          name: "",
          nameDe: "usability park",
          nameEng: "usability park",
          description: "",
          descriptionDe:
            "Die Ausstellung USABILITY PARK präsentierte Produkte, die sowohl dem Anspruch an hohe Benutzerfreundlichkeit als auch ästhetischen Ansprüchen der Verbraucher gerecht werden.",
          descriptionEng: "",
          img: require("@/assets/img/up_08_03.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Frank Nickerl",
        },
        {
          id: "10",
          name: "",
          nameDe: "Access Berlin Design",
          nameEng: "Access Berlin Design",
          description: "",
          descriptionDe:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          descriptionEng:
            "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
          img: require("@/assets/img/abd_08_06.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Antonia Roth",
        },
        {
          id: "11",
          name: "",
          nameDe: "Ideal Standard",
          nameEng: "Ideal Standard",
          description: "",
          descriptionDe:
            "Das Projekt IDEAL STANDARD – DER CHARME DER DINGE befasste sich mit Produkten des täglichen Lebens. Kernstücke des Projekts waren ein Katalog und eine Ausstellung bei DMY zum Designmai 2006 in Berlin.",
          descriptionEng:
            "The project IDEAL STANDARD—THE CHARM OF THINGS was concerned with products of our everyday life. A catalogue and an exhibition at DMY within the Designmai 2006 in Berlin were two central parts of the project.",
          img: require("@/assets/img/is_06.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
        {
          id: "12",
          name: "",
          nameDe: "Bundespressestrand",
          nameEng: "Bundespressestrand",
          description: "",
          descriptionDe:
            "Die bekannte Berliner Sommer-Gastronomie BUNDESPRESSESTRAND eröffnete während der Wintermonate 2004/2005 erstmals eine Winterpräsenz für Abendveranstaltungen in einem zur Sommerlocation nahegelegen Bürogebäude. Die leerstehende Büroetage wurde in eine Winterlandschaft verwandelt, um auch den Berlinern einen kleinen Skiurlaub zu ermöglichen.",
          descriptionEng:
            "In 2004/2005 the well known Berlin summer event location BUNDESPRESSESTRAND for the first time opened up a winter venue for evening events in an office buliding near to the summer site. The empty office floor was transformed into a winter landscape in order to allow the Berliners a small skiing vacation.",
          img: require("@/assets/img/bps_06.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],

      graphics: [
        {
          id: "13",
          name: "",
          nameDe: "Spot on Materials",
          nameEng: "Spot on Materials",
          description: "",
          descriptionDe:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben. ",
          descriptionEng:
            "The exhibition SPOT ON MATERIALS presented new and innovative materials and illustrateed these on the basis of products that have already been implemented. The products and materials make clear, which status materials have as a generator for creativity, for new ideas and unusual solutions.",
          img: require("@/assets/img/som_logo.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
        {
          id: "14",
          name: "",
          nameDe: "German Shades of Green",
          nameEng: "German Shades of Green",
          description: "",
          descriptionDe:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          descriptionEng:
            "The exhibition GERMAN SHADES OF GREEN—SUSTAINABLE DESIGN FROM GERMANY showcased examples of sustainable design. It showed by means of products, concepts and ideas from Germany how sustainability can be implemented into design and how design decisively contributes to the success of sustainable development.",
          img: require("@/assets/img/gg_tai_10_2.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© IDZ Internationales Design Zentrum Berlin e.V.",
        },
        {
          id: "15",
          name: "",
          nameDe: "Hotel Weisshaar",
          nameEng: "Hotel Weisshaar",
          description: "",
          descriptionDe:
            "Logo-Redesign für das traditionsreiche HOTEL WEISSHAAR in Meersburg am Bodensee sowie Entwicklung und Gestaltung diverser Druckerzeugnisse und Werbemittel. ",
          descriptionEng:
            "Logo-Redesign für das traditionsreiche HOTEL WEISSHAAR in Meersburg am Bodensee sowie Entwicklung und Gestaltung diverser Druckerzeugnisse und Werbemittel. ",
          img: require("@/assets/img/Weisshaar_01.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© IDZ Internationales Design Zentrum Berlin e.V.",
        },
        {
          id: "16",
          name: "",
          nameDe: "Access Berlin Design",
          nameEng: "Access Berlin Design",
          description: "",
          descriptionDe:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          descriptionEng:
            "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
          img: require("@/assets/img/abd_Logo.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Antonia Roth",
        },
        {
          id: "17",
          name: "",
          nameDe: "Berliner Republik",
          nameEng: "Berliner Republik",
          description: "",
          descriptionDe:
            "Gestaltung des Covers für die Jubiläumsausgabe der Zeitschrift BERLINER REPUBLIK anlässlich ihres fünfjährigen Bestehens.",
          descriptionEng:
            "Cover design for the anniversary edition of the magazine BERLINER REPUBLIK in celebration of its fifth birthday. ",
          img: require("@/assets/img/BR_01.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Antonia Roth",
        },
        {
          id: "18",
          name: "",
          nameDe: "Marquardt lässt grüssen",
          nameEng: "MARQUARDT SAYS HELLO",
          description: "",
          descriptionDe:
            "Eine Kleiderkollektion mit Illustrationen zum Ort Marquardt bei Potsdam. ",
          descriptionEng:
            "A dress collection with illustrations inspired by the village of Marquardt near Potsdam.",
          img: require("@/assets/img/Illustration_04_2.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],

      management: [
        {
          id: "19",
          name: "",
          nameDe: "Bundespreis Ecodesign",
          nameEng: "GERMAN ECODESIGN AWARD",
          description: "",
          descriptionDe:
            "Der BUNDESPREIS ECODESIGN wurde 2012 erstmals vom Bundesumweltministerium und dem Umweltbundesamt ausgelobt und zeichnet innovative Produkte und Konzepte aus, die gleichermaßen ästhetischen als auch ökologischen Ansprüchen genügen. Der Preis bietet Unternehmen sowie Designerinnen und Designern eine Plattform, um ihre Produkte und Ideen von herausragender ökologischer und gestalterischer Qualität zu präsentieren.",
          descriptionEng:
            "In 2012 the GERMAN ECODESIGN AWARD was awarded for the first time by the Federal Minister of the Environment and the Federal Environmental Agency and honors innovative products and concepts, that meet aesthetic as well as ecological demands. The prize offers companies as well as designers a platform to present their products and ideas of exceptional ecological and artistic quality. ",
          img: require("@/assets/img/eco1.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright:
            "© IDZ Internationales Design Zentrum Berlin e.V. / Sandra Kühnapfel",
        },
        {
          id: "20",
          name: "",
          nameDe: "DEUTSCHER MARKEN- UND DESIGNKONGRESS",
          nameEng: "GERMAN BRAND AND DESIGN CONGRESS",
          description: "",
          descriptionDe:
            "Auf dem DEUTSCHE MARKEN- UND DESIGNKONGRESS diskutieren hochrangige Experten verschiedener Gestaltungsbereiche über Brandmanagementprozesse. Unter dem Titel Establishing High-Value Brands beschäftigte sich der Kongress in 2011 mit der Implementierung von Marken, wobei die Markenkommunikation nach innen und außen im Mittelpunkt stand.",
          descriptionEng:
            "At the GERMAN BRAND AND DESIGN CONGRESS experts from different design areas discuss brand management processes. Under the title Establishing High-Value Brands in 2011 the congress dealt with the implementation of brands focussing on the inward and outward communication of brands.",
          img: require("@/assets/img/dmdk_11_06.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright:
            "© Rat für Formgebung/German Design Council / Sandra Kühnapfel",
        },
        {
          id: "21",
          name: "",
          nameDe: "DEUTSCHES DESIGN MUSEUM",
          nameEng: "GERMAN DESIGN MUSEUM",
          description: "",
          descriptionDe:
            "Über die Relevanz und Aufgabe eines DEUTSCHEN DESIGN MUSEUMS diskutierten renommierte Designer, Künstler und Pressevertreter im Rahmen einer Roundtable-Veranstaltung in Berlin. Der folgende öffentlichen Diskurs eröffnete der deutschen Designszene die Möglichkeit, sich an der Diskussion zu beteiligen. ",
          descriptionEng:
            "Renowned designers, artists and press representatives discussed the relevance and intention of a GERMAN DESIGN MUSEUM in the course of a round-table event in Berlin. The following public discourse offered the German design scene the possibility to be involved in the discussion. ",
          img: require("@/assets/img/ddm_03.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright:
            "© Rat für Formgebung/German Design Council / Sandra Kühnapfel",
        },
        {
          id: "22",
          name: "",
          nameDe: "BRAND NEW GERMANY",
          nameEng: "BRAND NEW GERMANY",
          description: "",
          descriptionDe:
            "Die BRAND NEW GERMANY KONFERENZ UND VORTRAGSREIHE bot Designagenturen, Designern und Unternehmen der deutschen Kreativwirtschaft die Möglichkeit, sich über Chancen und Risiken des asiatischen Markts, dem sie sich häufig nicht länger entziehen können, zu informieren. Bereits in Asien vertretene Unternehmen und Dienstleister berichteten über ihre Erfahrungen.",
          descriptionEng:
            "The BRAND NEW GERMANY CONFERENCE AND SERIES OF LECTURES offered design agencies, designers and companies from the German creative industry the opportunity to catch up on the chances and risks of the Asian market, from which they can often no longer evade. Companies and service providers already represented in Asia reported on their experiences. ",
          img: require("@/assets/img/bng_01.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright: "© Rat für Formgebung/German Design Council",
        },
        {
          id: "23",
          name: "",
          nameDe: "MATERIAL VISION KONFERENZ",
          nameEng: "MATERIAL VISION CONFERENCE",
          description: "",
          descriptionDe:
            "Auf der MATERIAL VISION KONFERENZ mit dem Titel Designing the Weightless World erhielten Produktentwickler, Designer und Architekten parallel zur Fachmesse Material Vision 2011 einen exklusiven Ausblick in die Materialtrends von morgen.",
          descriptionEng:
            "Parallel to the trade fair Material Vision 2011, product developers, designers and architects got an exclusive outlook on the material trends of tomorrow at the MATERIAL VISION CONFERENCE under the title Designing the Weightless World. ",
          img: require("@/assets/img/mv_11_02.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright:
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
        },
        {
          id: "24",
          name: "",
          nameDe: "YDMI–YOUNG DESIGNERS MEET THE INDUSTRY",
          nameEng: "YDMI—YOUNG DESIGNERS MEET THE INDUSTRY",
          description: "",
          descriptionDe:
            "YDMI – YOUNG DESIGNERS MEET THE INDUSTRY ist die Recruiting- und Akquiseplattform des Rat für Formgebung für die Designszene, auf der ausgewählte Young Professionals aus den Bereichen Kommunikations-, Produkt- sowie Industriedesign auf Unternehmen mit ausgewiesener Design-Kompetenz treffen. ",
          descriptionEng:
            "YDMI—YOUNG DESIGNERS MEET THE INDUSTRY is the recruiting and acquisition platform for the design scene organised by the German Design Council, on which selected Young Professionals from the fields of communication design, product design and industrial design meet up with companies with outstanding design expertise.",
          img: require("@/assets/img/YDMI_08_09_2.jpg"),
          img1: require("@/assets/img/ECO_Darmstadt_01.jpg"),
          img2: require("@/assets/img/ECO_Darmstadt_02.jpg"),
          img3: require("@/assets/img/ECO_Dessau_01.jpg"),
          img4: require("@/assets/img/ECO_Dessau_02.jpg"),
          img5: require("@/assets/img/ECO_Berlin_01.jpeg"),
          img6: require("@/assets/img/ECO_FFM_01.jpeg"),
          img7: "",
          img8: "",
          img9: "",
          copyright:
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
        },
      ],

      about: [
        {
          id: "12",
          name: "",
          nameDe: "Julia Haeusler-Kun",
          nameEng: "Julia Haeusler-Kun",
          description: "",
          descriptionDe:
            "bietet vielfältige Dienstleistungen in den Bereichen Programmierung, Design und Kommunikation. Die Verbindung unterschiedlicher Disziplinen ist zentraler Bestandteil ihrer Arbeit und ermöglicht die Entwicklung außergewöhnlicher, ganzheitlicher Konzepte. Seit 2004 ist sie für zahlreiche namhafte Kunden tätig. Geboren in Konstanz, studierte sie zunächst Architektur an der Technischen Hochschule Karlsruhe und schloss ihr anschließendes Design-Studium mit dem Schwerpunkt Produktdesign an der Fachhochschule Postdam mit dem Diplom ab. Ergänzend zu ihrer Ausbildung im Designbereich absolvierte sie eine einjährige Weiterbildung zur zertifizierten Softwareentwicklerin, die sie im Sommer 2022 abschloss. Julia Häusler lebt und arbeitet in Berlin.",
          descriptionEng:
            "born in Constance, studied architecture at the Technical University Karlsruhe before she finished her design studies at the University of Applied Sciences in Potsdam with her diploma. Since 2004 she works for clients such as the German Design Council—the German competence center for design in Frankfurt—, the IDZ International Design Center Berlin and the Goethe Institute in Taipei. Her knowledge—both in architecture and design—, her interest in present developments and trends in the design sector as well as best contacts into the national and international design scene serve as a basis of inspiration to her in order to develop unique concepts. Julia Häusler lives and works in Berlin and Mannheim. ",
          img: require("@/assets/img/bps_06.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],

      contact: [
        {
          id: "12",
          name: "",
          nameDe: "Bundespressestrand",
          nameEng: "Bundespressestrand",
          description: "",
          descriptionDe:
            "Die bekannte Berliner Sommer-Gastronomie BUNDESPRESSESTRAND eröffnete während der Wintermonate 2004/2005 erstmals eine Winterpräsenz für Abendveranstaltungen in einem zur Sommerlocation nahegelegen Bürogebäude. Die leerstehende Büroetage wurde in eine Winterlandschaft verwandelt, um auch den Berlinern einen kleinen Skiurlaub zu ermöglichen.",
          descriptionEng:
            "In 2004/2005 the well known Berlin summer event location BUNDESPRESSESTRAND for the first time opened up a winter venue for evening events in an office buliding near to the summer site. The empty office floor was transformed into a winter landscape in order to allow the Berliners a small skiing vacation.",
          img: require("@/assets/img/bps_06.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          copyright: "",
        },
      ],
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
      this.detailsWanted = false;
      this.buttonsClicked = true;

      if (cat !== "about" || cat !== "contact") {
        this.me.detailsWanted = false;
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
        }
      } else if (cat === "about") {
        this.me.detailsWanted = true;
        this.me.portrait = require("@/assets/img/jh2.jpg");
        this.me.headline = "Julia Haeusler-Kun";
        this.me.cv =
          "bietet vielfältige Dienstleistungen in den Bereichen Programmierung, Design und Kommunikation. Die Verbindung unterschiedlicher Disziplinen ist zentraler Bestandteil ihrer Arbeit und ermöglicht die Entwicklung außergewöhnlicher, ganzheitlicher Konzepte. Seit 2004 ist sie für zahlreiche namhafte Kunden tätig.\n" +
          " Geboren in Konstanz, studierte sie zunächst Architektur an der Technischen Hochschule Karlsruhe und schloss ihr anschließendes Design-Studium mit dem Schwerpunkt Produktdesign an der Fachhochschule Postdam mit dem Diplom ab. Ergänzend zu ihrer Ausbildung im Designbereich absolvierte sie eine einjährige Weiterbildung zur zertifizierten Softwareentwicklerin, die sie im Sommer 2022 abschloss. Julia Häusler lebt und arbeitet in Berlin.";
        this.title = "Diplom Designer (FH)";
        this.me.mail = "mail@juliahaeusler.com";
        this.me.imprint = "";
      }
      this.filterLanguage(this.selectedLanguage);
    },
    setSelectedProject(project) {
      this.detailsWanted = true;
      console.log(this.detailsWanted);
      this.selectedProject = project;

      console.log(this.selectedProject.name);
    },
    showDetailsAbout() {
      this.me.detailsWanted = true;
      this.me.portrait = require("@/assets/img/jh2.jpg");
      this.me.headline = "Julia Haeusler-Kun";
      this.me.cv =
        "bietet vielfältige Dienstleistungen in den Bereichen Programmierung, Design und Kommunikation. Die Verbindung unterschiedlicher Disziplinen ist zentraler Bestandteil ihrer Arbeit und ermöglicht die Entwicklung außergewöhnlicher, ganzheitlicher Konzepte. Seit 2004 ist sie für zahlreiche namhafte Kunden tätig.\n" +
        " Geboren in Konstanz, studierte sie zunächst Architektur an der Technischen Hochschule Karlsruhe und schloss ihr anschließendes Design-Studium mit dem Schwerpunkt Produktdesign an der Fachhochschule Postdam mit dem Diplom ab. Ergänzend zu ihrer Ausbildung im Designbereich absolvierte sie eine einjährige Weiterbildung zur zertifizierten Softwareentwicklerin, die sie im Sommer 2022 abschloss. Julia Häusler lebt und arbeitet in Berlin.";
      this.title = "Diplom Designer (FH)";
      this.me.mail = "mail@juliahaeusler.com";
      this.me.imprint = "";
    },
  },
};
</script>
