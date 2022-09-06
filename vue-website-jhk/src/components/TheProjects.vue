<template>
  <header>
    <section>
      <div id="header">
        <header-de-eng
          @filter-language="setLanguage"
          :selectedLanguage="selectedLanguage"
        ></header-de-eng>
        <header-logo></header-logo>
        <base-navigation
          :selectedCategory="selectedCategory"
          @filter-category="filterProjects"
          @show-about="showDetailsAbout"
        ></base-navigation>
      </div>

      <div id="content">
        <overview-projects
          v-if="detailsWanted === false"
          :filteredProjects="filteredProjects"
          :selectedLanguage="selectedLanguage"
          :me="me"
        ></overview-projects>
        <single-project-long
          v-if="detailsWanted === true"
          :selectedLanguage="selectedLanguage"
          :selectedProject="selectedProject"
          :designDtld="designDtld"
          :imm="immCologne"
        ></single-project-long>
        <personal-details
          v-if="me.detailsWanted === true"
          :selectedLanguage="selectedLanguage"
          :me="me"
        ></personal-details
        ><contact-details
          v-if="contactInfoWanted === true"
          :me="me"
          :selectedLanguage="selectedLanguage"
        ></contact-details>

        <the-footer
          @go-back="filterProjects"
          @show-contact="showContactInfo"
          v-if="selectedLanguage === 'de'"
          :footer1="'zurück'"
          :footer2="'Impressum / Kontakt'"
          :selectedProject="selectedProject"
        ></the-footer>
        <the-footer
          @go-back="filterProjects"
          @show-contact="showContactInfo"
          v-else-if="selectedLanguage === 'eng'"
          :footer1="'back'"
          :footer2="'Imprint / Contact'"
          :selectedProject="selectedProject"
        ></the-footer>
      </div>
    </section>
  </header>
</template>

<script>
import BaseNavigation from "./UI/BaseNavigation.vue";
import OverviewProjects from "./layout/OverviewProjects.vue";
import SingleProjectLong from "./layout/SingleProjectLong.vue";
import HeaderDeEng from "./layout/HeaderDeEng.vue";
import PersonalDetails from "./layout/PersonalDetails.vue";
import ContactDetails from "./layout/ContactDetails.vue";
import TheFooter from "./layout/TheFooter.vue";

export default {
  created() {
    this.buttonsClicked = false;
  },
  emits: [
    "filter-category",
    "filter-language",
    "go-back",
    "show-about",
    "show-contact",
  ],
  components: {
    OverviewProjects,
    BaseNavigation,
    SingleProjectLong,
    HeaderDeEng,
    PersonalDetails,
    ContactDetails,
    TheFooter,
  },
  data() {
    return {
      detailsWanted: false,
      buttonsClicked: false,
      selectedCategory: "",
      selectedLanguage: "de",
      selectedProject: undefined,
      contactInfoWanted: false,
      me: {
        detailsWanted: false,
        portrait: require("@/assets/img/jh2.jpg"),
        headline: "muulti.de",
        name: "Julia Häusler-Kun",
        mail: "mail@muulti.de",
        title: "Diplom Designer (FH)",
      },

      filteredProjects: this.news,
      news: [
        {
          id: "N1",
          category: "news",
          name: "",
          nameDe: "Oracle Certified Associate (OCA) <br> Java SE 8 Programmer",
          nameEng: "Oracle Certified Associate (OCA) <br> Java SE 8 Programmer",
          subtitle: "",
          subtitleDe: "Zertifizierung an der Oracle University",
          subtitleEng: "Certification at Oracle University",
          description: "",
          descriptionDe:
            "Zertifizierung an der Oracle University, August 2022.",
          descriptionEng: "Certification at Oracle University, August 2022.",
          text: "",
          textDe: "",
          textEng: "",
          img: require("@/assets/img/OCAJSE8.jpg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "-",
          services: [""],
          servicesDe: [""],
          servicesEng: [],
          copyright: ["", ""],
        },
      ],

      software: [
        {
          id: "S1",
          category: "software",
          name: "",
          nameDe:
            "Fullstack-Entwicklung einer WebApp mit Java, Spring, MySQL und Hibernate",
          nameEng:
            "Full stack development of a WebApp with Java, Spring, MySQL and Hibernate",
          subtitle: "",
          subtitleDe: "Anwendung zur Verwaltung kleinerer Immobilienobjekte",
          subtitleEng:
            "Solution for property management of smaller real estate objects",
          description: "",
          descriptionDe:
            "Die WebApp wird für der Verwaltung und Nebenkostenabrechung kleinerer Immobilienobjekte entwickelt. ",
          descriptionEng:
            "The WebApp is being developed for the administration and ancillary cost accounting of smaller real estate objects.",
          text: "",
          textDe: `Im Backend der Anwendung kommen Java, Spring, MySQL und Hibernate zum Einsatz. Die Frontend-Entwicklung erfolgt mit Spring MVC. Zur Versionsverwaltung wird Git verwendet. 
          
          In der WebApp, die zur Erstellung der Nebenkostenabrechnungen für die Mieter konzipiert wurde, können alle relevanten Daten zu den zu verwaltenden Immobilien erfasst werden. Hierzu zählen u.a. Adresse, 
          Eigentümer, Größe des Objekts, Wohneinheiten, Mieter und Nebenkosten. Alle Daten werden in einer MySQL-Datenbank gespeichert. 
          
          Die WebApp ist noch in Entwicklung. Der aktuelle Entwicklungsstand kann dazugehörigen Git-Repository unter <a href='https://github.com/juhakun' target='_blank'>GitHub</a> angesehen werden.`,
          textEng: `Java, Spring, MySQL and Hibernate are used in the backend of the application. Frontend development is done with Spring MVC. Git is used for version management.
          
          All relevant data on the properties to be managed can be recorded in the web app, which was designed to create utility bills for tenants. These include address, owner, size of the property, residential units, tenants and additional costs. All data is stored in a MySQL database.
          
          The web app is still under development. The current development status can be viewed in the associated Git repository at <a href='https://github.com/juhakun' target='_blank'>GitHub</a>.

`,
          img: require("@/assets/img/Housing.png"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "",
          services: [
            "Gestaltung der Webseite",
            "Programmierung in Vue.js und Javascript",
          ],
          servicesDe: [
            "Design of the website",
            "Programming in Vue.js and Javascript",
          ],
          servicesEng: [],
          copyright: ["", ""],
        },
        {
          id: "S2",
          category: "software",
          name: "",
          nameDe:
            "Frontend-Entwicklung einer Webseite mit Vue.JS und JavaScript",
          nameEng:
            "Frontend development of a website with Vue.JS and JavaScript",
          subtitle: "",
          subtitleDe: "Redesign und Programmierung",
          subtitleEng: "Redesign and programming",
          description: "",
          descriptionDe:
            "Die Webseite <a href='https://www.juliahaeusler.com' target='_blank'>www.juliahaeusler.com</a>, die vor mehreren Jahren in HTML geschrieben wurde, wurde in Design und Programmierung überarbeitet. Die neue Seite, die mit VueJS und JavaScript umgesetzt wurde, findet man jetzt unter <a href='https://www.muulti.de' target='_blank'>www.muulti.de</a>.",
          descriptionEng:
            "The website www.juliahaeusler.com, which was written in HTML several years ago, has had its design and programming revised. The new website, which has been implemented with VueJS and JavaScript, can now be found at www.muulti.de.",
          text: "",
          textDe: `Die neu umgesetzte Webseite wurde unter Verwendung von Vue.js 3, Vue Cli, Javascript, HTML, CSS und Git in Visual Studio Code erstellt. Sie besteht aus nur 13 Layout- und UI-Komponenten, während die ursprüngliche Webseite aus 62 unterschiedlichen HTML-Seiten bestand, die miteinander verknüpft waren.

Weitere Details zum Projekt sind bei <a href='https://github.com/juhakun' target='_blank'>GitHub</a> zu finden.`,
          textEng: `The revised website was built in Visual Studio Code using Vue.js 3, Vue Cli, Javascript, HTML, CSS and Git. It consists of only 13 layout and UI components where as the original website consisted of 62 different HTML pages that were linked together.

          More details about the project can be found on <a href='https://github.com/juhakun' target='_blank'>GitHub</a>.`,
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
          client: "",
          services: [
            "Gestaltung der Webseite",
            "Programmierung in Vue.js und Javascript",
          ],
          servicesDe: [
            "Design of the website",
            "Programming in Vue.js and Javascript",
          ],
          servicesEng: [],
          copyright: ["", ""],
        },
        {
          id: "S3",
          category: "software",
          name: "",
          nameDe: "Kinderspiel *Catch the Balloons* mit Java und Swing",
          nameEng: "Children´s game *Catch the Balloons* with Java and Swing",
          subtitle: "",
          subtitleDe:
            "Ein kleines Desktop-Spiel für Kinder mit Java und GUI Swing",
          subtitleEng:
            "A little desktop childrens game with Java and GUI Swing",
          description: "",
          descriptionDe:
            "CATCH THE BALLOONS ist ein Desktop-Spiel für Kinder im Alter von  5 bis 10 Jahren. Es wurde in Java und GUI Swing programmiert.",
          descriptionEng:
            "CATCH THE BALLOONS is a desktop game for children at the age of 5 to 10 years. It was programmed in Java and GUI Swing.",
          text: "",
          textDe: `Das Spiel ist ein Übungsprojekt zur Implementierung multipler Threads (mehrere sich gleichzeitig bewegende Elemente) und zur Einbettung von Sound- und Grafikelementen als Teile des Spiels.
          
          Bevor das Spiel beginnt, kann eines von zwei Leveln ausgewählt werden. Dann müssen die roten Ballons gefangen werden, die an zufälligen Positionen am Himmel erscheinen. Der Spieler wird von zwei Wolken abgelenkt, die von links nach rechts und umgekehrt über den Bildschirm ziehen.
Wird ein Ballon angeklickt, explodiert er mit einem lauten Knall. Nur wenn dann ein Stern erscheint, bekommt der Spieler 1 Punkt. Ob ein Stern erscheint, ist ebenfalls zufällig.
Das Spiel endet nach 20 Ballons. Die erreichten Punkte werden angezeigt und man kann neu beginnen, wenn man möchte.

Das Spiel könnte um viele tolle Funktionen erweitert und die Umsetzung verfeinert werden. Da es allerdings nur ein Übungsprojekt für Multiple Threading ist, wurden es so belassen, wie es ist.

Weitere Details zum Projekt sind bei <a href='https://github.com/juhakun' target='_blank'>GitHub</a> zu finden.`,
          textEng: `The game is a practice project for implementing multiple threads (multiple moving elements at the same time) and embedding sound and graphic elements as parts of the game.
          
          Before the game starts, one of two levels can be selected. Then you have to catch the red balloons that appear at random positions in the sky. The player is distracted by two clouds moving across the screen from left to right and vice versa.
When a balloon is clicked, it explodes with a loud bang. If a star then appears, the player gets 1 point. Whether a star appears is also random.
The game ends after 20 balloons. The points achieved are displayed and you can start over if you want.

The game could be expanded with many great functions and the implementation could be refined. However, since it is only a practice project for multiple threading, it has been left as it is.

More details about the project can be found on <a href='https://github.com/juhakun' target='_blank'>GitHub</a>.`,
          img: require("@/assets/img/Balloons.jpeg"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "",
          services: [""],
          servicesDe: [""],
          servicesEng: [],
          copyright: ["", ""],
        },
        {
          id: "S4",
          category: "software",
          name: "",
          nameDe: "Gestaltung und Umsetzung einer Webseite in HTML und CSS",
          nameEng: "Design and implementation of a website in HTML and CSS",
          subtitle: "",
          subtitleDe: "www.wonder-wood.de",
          subtitleEng: "www.wonder-wood.de",
          description: "",
          descriptionDe:
            "www.wonder-wood.de erschien 2013 begleitend zur Veröffentlichung des Buches *Wonder Wood*.",
          descriptionEng:
            "www.wonder-wood.de was published in 2013 to accompany the publication of the book *Wonder Wood*.",
          text: "",
          textDe:
            "Die minimalistische Webseite mit Blog-Charakter wurde in HTML und CSS umgesetzt, und zeigte Stationen des Buches *Wonder Wood* von Barbara Glasner und Stephan Ott beim Birkhäuser Verlag. ",
          textEng:
            "The minimalist website with blog character was implemented in HTML and CSS, and showed stations of the book *Wonder Wood* by Barbara Glasner and Stephan Ott at Birkhäuser Verlag..",
          img: require("@/assets/img/WonderWood.png"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "Barbara Glasner",
          services: [],
          servicesDe: [
            "Webdesign",
            "Erstellung von Animationen",
            "Umsetzung in HTML und CSS",
          ],
          servicesEng: [
            "Web design",
            "Creation of animations",
            "Implementation in HTML and CSS",
          ],
          copyright: ["", ""],
        },
      ],

      exhibitions: [
        {
          id: "E1",
          category: "exhibitions",
          name: "",
          nameDe: "Bundespreis Ecodesign",
          nameEng: "German Ecodesign Award",
          subtitle: "",
          subtitleDe: "Wanderausstellung zum Bundespreis Ecodesign",
          subtitleEng:
            "Traveling exhibition for the German Federal Ecodesign Award",
          description: "",
          descriptionDe:
            "Seit 2013 ist die Ausstellung zum BUNDESPREIS ECODESIGN jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.",
          descriptionEng:
            "Since 2013, the exhibition has been on the move every year with the award winners and nominees of the award and has been exhibited at numerous trade fairs and museums, such as the Munich Creative Business Week in Munich, the Ecostyle in Frankfurt am Main , the Museum of Arts and Crafts in Hamburg and the Grassi Museum for Applied Arts in Leipzig.",
          text: `Bei der Konzeption und Gestaltung der Wanderausstellung wurde besonderen Wert auf Aspekte der Nachhaltigkeit gelegt. Die Verwendung nachhaltiger Materialien, der langfristige Einsatz und die dafür erforderliche, flexible Anpassung an wechselnde Exponate und Ausstellungsorte sowie platzsparender und kostengünstiger Transport standen für die Gestaltung hierbei im Vordergrund.

          Seit 2013 ist die Ausstellung jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.`,
          textDe: `Bei der Konzeption und Gestaltung der Wanderausstellung wurde besonderen Wert auf Aspekte der Nachhaltigkeit gelegt. Die Verwendung nachhaltiger Materialien, der langfristige Einsatz und die dafür erforderliche, flexible Anpassung an wechselnde Exponate und Ausstellungsorte sowie platzsparender und kostengünstiger Transport standen für die Gestaltung hierbei im Vordergrund.

          Seit 2013 ist die Ausstellung jährlich mit den Preisträgern und Nominierten des Bundespreises auf Wanderschaft und war bisher an zahlreichen Stationen auf Messen und in Museen zu sehen, wie der Munich Creative Business Week in München, der Ecostyle in Frankfurt am Main, dem Museum für Kunst und Gewerbe in Hamburg und dem Grassi Museum für Angewandte Kunst in Leipzig.`,
          textEng: `For the concept and design of the travelling exhibition special emphasis was placed on sustainability aspects. A long-term use of the exhibition using sustainable materials and the possibility to adapt the exhibition to changing exhibits and exhibition venues as well as space-saving and cost-efficient transport are the most important features of the design.

            Since 2013, the exhibition has been on the move every year with the award winners and nominees of the award and has been exhibited at numerous trade fairs and museums, such as the Munich Creative Business Week in Munich, the Ecostyle in Frankfurt am Main , the Museum of Arts and Crafts in Hamburg and the Grassi Museum for Applied Arts in Leipzig.`,
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
          client: "IDZ Internationales Design Zentrum Berlin e.V.",
          services: [
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Gestaltung der Ausstellungsgrafik im Rahmen des CI des Bundespreises",
          ],
          servicesDe: [
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Gestaltung der Ausstellungsgrafik im Rahmen des CI des Bundespreises",
          ],
          servicesEng: [
            "Concept and design of the display architecture",
            "Concept and design of the the display graphics according to the CI of the award",
          ],
          copyright: [
            "",
            "Bilder 5, 6 © IDZ Internationales Design Zentrum Berlin e.V.",
          ],
        },
        {
          id: "E2",
          category: "exhibitions",
          name: "",
          nameDe: "Spot on Materials",
          nameEng: "Spot on Materials",
          subtitle: "",
          subtitleDe: "Ausstellung zur InnoTrans 2012 in Berlin",
          subtitleEng: "Exhibition at InnoTrans 2012 in Berlin",
          description: "",
          descriptionDe:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben.",
          descriptionEng:
            "The exhibition SPOT ON MATERIALS presented new and innovative materials and illustrateed these on the basis of products that have already been implemented. The products and materials make clear, which status materials have as a generator for creativity, for new ideas and unusual solutions.",
          text: "",
          textDe:
            "Die Ausstellungsgestaltung greift Elemente auf, die dem Besucher bereits aus Innenräumen öffentlicher Verkehrsmittel bekannt sind. So setzt sich die Grundkonstruktion des Ausstellungssystems aus Rohrverbindern und Rohren zusammen, die durch Halteschlaufen und Informationstafeln ergänzt werden.",
          textEng:
            "The exhibition design takes up elements, that are already familiar to the visitors from the interiors of public transportation. The basic construction of the exhibition system consists of pipe connectors and pipes, that are supplemented by straps and information boards.",
          img: require("@/assets/img/som_01.jpg"),
          img1: require("@/assets/img/som_02.jpg"),
          img2: require("@/assets/img/som_03.jpg"),
          img3: require("@/assets/img/som_05.jpg"),
          img4: require("@/assets/img/som_10.jpg"),
          img5: require("@/assets/img/som_12.jpg"),
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "IDZ Internationales Design Zentrum Berlin e.V., Messe Berlin GmbH ",
          services: [],
          servicesDe: [
            "Inhaltliche Konzeption der Ausstellung in Zusammenarbeit mit dem IDZ",
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Konzeption und Gestaltung des Logos und der Ausstellungsgrafik",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept of content for the exhibition in collaboration with the IDZ",
            "Concept and design of the display architecture",
            "Concept and design of the logo and the display graphics",
            "Project management",
          ],
          copyright: [
            "",
            "Bilder 5, 7, 8 © IDZ Internationales Design Zentrum Berlin e.V. / Saskia Nagel ",
          ],
        },
        {
          id: "E3",
          category: "exhibitions",
          name: "Woher kommt das Neue?",
          nameDe: "Woher kommt das Neue?",
          nameEng: "Where does the New come from?",
          subtitle: "",
          subtitleDe: "Ausstellung im Designhaus Darmstadt im Sommer 2012",
          subtitleEng:
            "Exhibition at the design house Darmstadt in summer 2012",
          description: "",
          descriptionDe:
            "Die Ausstellung WOHER KOMMT DAS NEUE – KREATIVITÄT UND EINFALLSREICHTUM IM DESIGN stellte nicht das fertige Produkte, sondern den kreativen Prozess in den Mittelpunkt: Sensibilität, Leidenschaft, Aufgeschlossenheit für Neues und Unerwartetes und der Mut über Grenzen zu gehen prägen diesen Prozess und die Arbeit der Kreativen und ermöglichen die Entwicklung einzigartiger Ideen. ",
          descriptionEng:
            "The exhibition WHERE DOES THE NEW COME FROM – CREATIVITY AND INGENUITY IN DESIGN focussed on the creative process rather than on the final product: sensitivity, passion, openness for the new and unexpected and the courage to cross boundaries characterise this process and the work of the creatives and enable the development of unique ideas.",
          text: "",
          textDe:
            "Die Vielseitigkeit des kreativen Prozesses wurde anhand von Konzepten und Designobjekten renommierter zeitgenössischer Gestalter gezeigt, die dem Besucher einen besonderen Einblick in deren Arbeitsweisen, Erlebnisse und Inspirationsquellen gewähren. Die Auseinandersetzung mit wissenschaftlichen Erkenntnissen kann hierbei beispielsweise ebenso im Vordergrund stehen wie ein intuitiver und spielerischer Umgang mit Materialien, Farben und Formen oder die Inszenierung der eigenen Person.",
          textEng:
            "The versatility of the creative process was shown by means of concepts and objects designed by renowned contemporary designers, that give the visitor an exclusive insight into the designer´s ways of working, experiences and sources of inspiration. The involvement with scientific findings can here be equally important as e.g. an intuitive and playful approach to materials, colours and forms or the portrayal of oneself. ",
          img: require("@/assets/img/wkdn_03.jpg"),
          img1: require("@/assets/img/wkdn_06.jpg"),
          img2: require("@/assets/img/wkdn_05.jpg"),
          img3: require("@/assets/img/wkdn_02.jpg"),
          img4: require("@/assets/img/wkdn_01.jpg"),
          img5: require("@/assets/img/wkdn_04.jpg"),
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "Hessen Design e.V. ",
          services: [],
          servicesDe: [
            "Beratung",
            "Mitarbeit an der inhaltlichen Konzeption und Kuratierung der Ausstellung",
          ],
          servicesEng: [
            "Consulting",
            "Collaboration on concept of content for the exhibition",
          ],
          copyright: [
            "© Hessen Design e.V. / Britta Büning",
            "© Hessen Design e.V. / Britta Büning",
          ],
        },
        {
          id: "E4",
          category: "exhibitions",
          name: "",
          nameDe: "German Shades of Green—SUSTAINABLE DESIGN FROM GERMANY",
          nameEng: "German Shades of Green—SUSTAINABLE DESIGN FROM GERMANY",
          subtitle: "",
          subtitleDe: "Ausstellung zur Taiwan Design Expo 2010 in Taipeh",
          subtitleEng: "Exhibition at Taiwan Design Expo 2010 in Taipei",
          description: "",
          descriptionDe:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          descriptionEng:
            "The exhibition GERMAN SHADES OF GREEN—SUSTAINABLE DESIGN FROM GERMANY showcased examples of sustainable design. It showed by means of products, concepts and ideas from Germany how sustainability can be implemented into design and how design decisively contributes to the success of sustainable development.",
          text: "",
          textDe:
            "Um dem Nachhaltigkeitsanspruch gerecht zu werden, wurden die Exponate vor Ort – gegliedert nach den Begriffen reconsider, rethink, respect und reimagine – ausschließlich durch Projektionen präsentiert. Auf diese Weise konnten Kosten und Ressourcen für Transporte und aufwendige Ausstellungsbauten, die nach Beendigung der Ausstellung hätten entsorgt werden müssen, eingespart werden. ",
          textEng:
            "The exhibition design was guided by the claim for sustainability: The exhibits were only presented by projections—structured by the terms reconsider, rethink, respect and reimagine. That way costs and resources for transport and extensive constructions, that would otherwise have to be disposed of after the exhibition, could be saved. ",
          img: require("@/assets/img/gg_tai_02.jpg"),
          img1: require("@/assets/img/gg_tai_01.jpg"),
          img2: require("@/assets/img/gg_tai_03.jpg"),
          img3: require("@/assets/img/gg_tai_09.jpg"),
          img4: require("@/assets/img/gg_tai_04.jpg"),
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "IDZ International Design Center Berlin e.V., Goethe Institute Taipei ",
          services: [],
          servicesDe: [
            "Inhaltliche Konzeption der Ausstellung in Zusammenarbeit mit dem IDZ",
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Konzeption und Gestaltung des Logos, der Ausstellungsgrafik und der Projektionen",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept of content for the exhibition in collaboration with the IDZ",
            "Concept and design of the display architecture",
            "Concept and design of the logo, the display graphics and the projections",
            "Project management",
          ],
          copyright: [
            "© IDZ Internationales Design Zentrum Berlin e.V.",
            "© IDZ Internationales Design Zentrum Berlin e.V.",
          ],
        },
        {
          id: "E5",
          category: "exhibitions",
          name: "",
          nameDe: "Design Deutschland",
          nameEng: "Design Deutschland",
          subtitle: "",
          subtitleDe:
            "Internationale Wanderausstellung Design Deutschland Case Study 08",
          subtitleEng:
            "International travelling exhibition Design Deutschland Case Study 08",
          description: "",
          descriptionDe:
            "DESIGN DEUTSCHLAND ist eine internationale Wanderausstellung des Rat für Formgebung, die jährlich eine aktuelle, exemplarische Auswahl von jeweils 120 bis 150 Produkten renommierter deutscher Unternehmen und Designer umfasst. Parallel zur Wanderausstellung konnten sich deutsche Unternehmen an einzelnen internationalen Veranstaltungsorten im Rahmen eines Gemeinschaftsstands präsentieren.",
          descriptionEng:
            "DESIGN DEUTSCHLAND is an international travelling exhibition of the German Design Council, that annually presents a current, exemplary selection of 120 to 150 products of renowned German companies and designers. In addition to the travelling exhibition German design brands had the opportunity to present themselves within a joint fair stand at single international venues.",
          text: "",
          textDe: `IMM COLOGNE 2008
          Internationale Möbelmesse in Köln

          NEUES MUSEUM NÜRNBERG
          in Kooperation mit Die Neue Sammlung München
          ICFF INTERNATIONAL CONTEMPORARY FURNITURE FAIR 2009
          Internationale Möbelmesse in New York

          Im Rahmenprogramm zur Ausstellung fanden Empfänge, Pressekonferenzen und Vortragsveranstaltungen statt. Darüberhinaus wurden das begleitende Magazin DESIGN DEUTSCHLAND CASE STUDY 08 anlässlich der Ausstellung in Kooperation mit der Neuen Sammlung veröffentlicht. `,
          textEng: `IMM COLOGNE 2008
          International Furniture Fair in Cologne

          NEUES MUSEUM NÜRNBERG
          in cooperation with Die Neue Sammlung München—The International Design Museum in Munich

          ICFF INTERNATIONAL CONTEMPORARY FURNITURE FAIR 2009
          International Furniture Fair in New York

          Parallel to the exhibitions, receptions, press conferences and lectures took place. In addition the accompanying magazine DESIGN DEUTSCHLAND CASE STUDY 08 was published on the occasion of the presentation in cooperation with Die Neue Sammlung. `,
          img: require("@/assets/img/dd_nb_01.jpg"),
          img1: require("@/assets/img/dd_imm_03.jpg"),
          img2: require("@/assets/img/dd_imm_02.jpg"),
          img3: require("@/assets/img/dd_imm_01.jpg"),
          img4: require("@/assets/img/dd_nb_04.jpg"),
          img5: require("@/assets/img/dd_nb_06.jpg"),
          img6: require("@/assets/img/dd_nb_03.jpg"),
          img7: require("@/assets/img/dd_nb_05.jpg"),
          img8: require("@/assets/img/dd_mag_2.jpg"),
          img9: require("@/assets/img/dd_mag_3.jpg"),
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main ",
          services: [],
          servicesDe: [
            "Projektleitung",
            "Kuratierung und Inszenierung der Exponate",
          ],
          servicesEng: [
            "Head of project",
            "Curating and staging of the exhibits ",
          ],
          copyright: [
            "",
            "© Photos 1-3: Rat für Formgebung/German Design Council / Constantin Meyer ",
          ],
        },
        {
          id: "E6",
          category: "exhibitions",
          name: "",
          nameDe: "Imm Cologne",
          nameEng: "Imm Cologne",
          subtitle: "",
          subtitleDe: "Trendshow der imm cologne 2007 und 2009",
          subtitleEng: "Trend show at imm cologne 2007 and 2009",
          description: "",
          descriptionDe:
            "Im Rahmen der Internationalen Möbelmesse IMM COLOGNE werden jedes Jahr zahlreiche Designaktivitäten und Sonderschauen präsentiert. In den vergangenen Jahren zählten hierzu unter anderen die Trendshow INFORMED BY COLOGNE und der BOULEVARD OF INNOVATIONS.",
          descriptionEng:
            "Each year numerous design activities and special shows are being presented during the international furniture fair IMM COLOGNE including INFORMED BY COLOGNE and the BOULEVARD OF INNOVATIONS in 2007, 2009 and 2010.",
          text: "",
          textDe: `Die Trendshow INFORMED BY COLOGNE präsentierte jährlich zur imm cologne die Einrichtungstrends des kommenden Jahres, welche vorab im Trendbuch Interior Trends von internationalen Experten definiert wurden. Für jeden der vier vordefinierten Interior Trends 2007 und 2009 wurden Themenwelten erarbeitet und in Form einer Ausstellung dem Messepublikum präsentiert.
          Parallel zur Ausstellung fanden Vorträge von renommierten Designern, Architekten und Pressevertretern im INFORMED BY COLOGNE Trendforum statt. Zu ihnen zählten u.a. Jaime Hayon, Nipa Doshi und Jonathan Levien, Marcus Fairs, Giulio Ridolfo und Bertjan Pot. `,
          textEng: `The trend show INFORMED BY COLOGNE of the imm cologne annually presented the interior trends of the coming year which were predefined in a trend book by a board of international experts. For each of the four predefined Interior Trends 2007 and 2009 theme worlds were created and showcased in a special show.
          Parallel to the show, lectures of renowned designers, architects and press representatives were held in the INFORMED BY COLOGNE trend forum. Speakers were amongst others Jaime Hayon, Nipa Doshi und Jonathan Levien, Marcus Fairs, Giulio Ridolfo and Bertjan Pot. `,
          img: require("@/assets/img/imm_09_10.jpg"),
          img1: require("@/assets/img/imm_07_04.jpg"),
          img2: require("@/assets/img/imm_07_07.jpg"),
          img3: require("@/assets/img/imm_07_11.jpg"),
          img4: require("@/assets/img/imm_09_11.jpg"),
          img5: require("@/assets/img/imm_09_20.jpg"),
          img6: require("@/assets/img/imm_09_05.jpg"),
          img7: require("@/assets/img/imm_09_18.jpg"),
          img8: "",
          img9: "",
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main, Koelnmesse GmbH ",
          services: [],
          servicesDe: [
            "Konzeption und Gestaltung der Austellung INFORMED BY COLOGNE (2009 mit Natalie Weis / 2007 mit Barbara Glasner)",
            "Kuratierung und Inszenierung der Exponate",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept and design of the exhibition INFORMED BY COLOGNE (2009 with Natalie Weis / 2007 with Barbara Glasner)",
            "Curating and staging of the exhibits",
            "Project management",
          ],
          copyright: [
            "© Koelnmesse / Constantin Meyer",
            "© Koelnmesse / Constantin Meyer (2009) / Dieter Schwer (2007)",
          ],
        },
        // {
        //   id: "E7",
        //   category: "exhibitions",
        //   name: "",
        //   nameDe: "Nominee selection",
        //   nameEng: "Nominee selection",
        //   subtitle: "",
        //   subtitleDe:
        //     "Ausstellungsreihe zum Designpreis der Bundesrepublik Deutschland",
        //   subtitleEng: "Series of exhibitions",
        //   description: "",
        //   descriptionDe:
        //     "Die Ausstellungsreihe NOMINEE SELECTION zeigte neben den Preisträgern des vom Bundesministerium für Wirtschaft und Technologie ausgelobten Designpreises der Bundesrepublik Deutschland eine Reihe von Produkten, die zum Designpreis 2009 und 2010 nominiert waren.",
        //   descriptionEng:
        //     "The exhibition series NOMINEE SELECTION showed products that were nominated for the design prize of the Federal Republic of Germany—awarded by the Federal Ministry of Economy—in 2009 and 2010 in addition to the winners of the design prize.",
        //   text: "",
        //   textDe:
        //     "Die Ausstellung mit den für den Designpreis nominierten Proukte wurde auf der IFA 2009 und 2010 – der internationalen Funkausstellung in Berlin und der AMBIENTE 2010 – der internationalen Konsumgütermesse in Frankfurt – präsentiert.",
        //   textEng:
        //     "The exhibition with the products nominated for the design award was presented at the IFA 2009 and 2010 - the international consumer goods exhibition in Berlin and the AMBIENTE 2010 - the international consumer goods fair in Frankfurt.",
        //   img: require("@/assets/img/DPNS_09_03.jpg"),
        //   img1: require("@/assets/img/DPNS_09_03.jpg"),
        //   img2: require("@/assets/img/DPNS_09_02.jpg"),
        //   img3: require("@/assets/img/DPNS_09_04.jpg"),
        //   img4: require("@/assets/img/DPNS_10_IFA_01.jpg"),
        //   img5: require("@/assets/img/DPNS_10_IFA_02.jpg"),
        //   img6: require("@/assets/img/DPNS_10_IFA_03.jpg"),
        //   img7: require("@/assets/img/DPNS_10_03.jpg"),
        //   img8: require("@/assets/img/DPNS_10_04.jpg"),
        //   img9: require("@/assets/img/DPNS_10_08.jpg"),
        //   client: "Rat für Formgebung/German Design Council, Frankfurt am Main",
        //   services: [],
        //   servicesDe: ["Projektmanagement", "Inszenierung der Exponate"],
        //   servicesEng: ["Project management", "Staging of the exhibits"],
        //   copyright: [
        //     "© Rat für Formgebung/German Design Council / Guido Mieth",
        //     "© Rat für Formgebung/German Design Council / Guido Mieth (Bilder 1-3)",
        //   ],
        // },
        // {
        //   id: "E8",
        //   category: "exhibitions",
        //   name: "",
        //   nameDe: "usability park",
        //   nameEng: "usability park",
        //   subtitle: "",
        //   subtitleDe: "",
        //   subtitleEng: "",
        //   description: "",
        //   descriptionDe:
        //     "Die Ausstellung USABILITY PARK präsentierte Produkte, die sowohl dem Anspruch an hohe Benutzerfreundlichkeit als auch ästhetischen Ansprüchen der Verbraucher gerecht werden.",
        //   descriptionEng: "",
        //   text: "",
        //   textDe: "",
        //   textEng: "",
        //   img: require("@/assets/img/up_08_03.jpg"),
        //   img1: "",
        //   img2: "",
        //   img3: "",
        //   img4: "",
        //   img5: "",
        //   img6: "",
        //   img7: "",
        //   img8: "",
        //   img9: "",
        //   client: "",
        //   services: [],
        //   servicesDe: [],
        //   servicesEng: [],
        //   copyright: ["© Frank Nickerl", ""],
        // },
        // {
        //   id: "E9",
        //   category: "exhibitions",
        //   name: "",
        //   nameDe: "Access Berlin Design",
        //   nameEng: "Access Berlin Design",
        //   subtitle: "",
        //   subtitleDe: "",
        //   subtitleEng: "",
        //   description: "",
        //   descriptionDe:
        //     "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
        //   descriptionEng:
        //     "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
        //   text: "",
        //   textDe: "",
        //   textEng: "",
        //   img: require("@/assets/img/abd_08_06.jpg"),
        //   img1: "",
        //   img2: "",
        //   img3: "",
        //   img4: "",
        //   img5: "",
        //   img6: "",
        //   img7: "",
        //   img8: "",
        //   img9: "",
        //   client: "",
        //   services: [],
        //   servicesDe: [],
        //   servicesEng: [],
        //   copyright: ["© Antonia Roth", ""],
        // },
        // {
        //   id: "E10",
        //   category: "exhibitions",
        //   name: "",
        //   nameDe: "Ideal Standard",
        //   nameEng: "Ideal Standard",
        //   subtitle: "",
        //   subtitleDe: "",
        //   subtitleEng: "",
        //   description: "",
        //   descriptionDe:
        //     "Das Projekt IDEAL STANDARD – DER CHARME DER DINGE befasste sich mit Produkten des täglichen Lebens. Kernstücke des Projekts waren ein Katalog und eine Ausstellung bei DMY zum Designmai 2006 in Berlin.",
        //   descriptionEng:
        //     "The project IDEAL STANDARD—THE CHARM OF THINGS was concerned with products of our everyday life. A catalogue and an exhibition at DMY within the Designmai 2006 in Berlin were two central parts of the project.",
        //   text: "",
        //   textDe: "",
        //   textEng: "",
        //   img: require("@/assets/img/is_06.jpg"),
        //   img1: "",
        //   img2: "",
        //   img3: "",
        //   img4: "",
        //   img5: "",
        //   img6: "",
        //   img7: "",
        //   img8: "",
        //   img9: "",
        //   client: "",
        //   services: [],
        //   servicesDe: [],
        //   servicesEng: [],
        //   copyright: ["", ""],
        // },
        // {
        //   id: "E11",
        //   category: "exhibitions",
        //   name: "",
        //   nameDe: "Bundespressestrand",
        //   nameEng: "Bundespressestrand",
        //   subtitle: "",
        //   subtitleDe: "",
        //   subtitleEng: "",
        //   description: "",
        //   descriptionDe:
        //     "Die bekannte Berliner Sommer-Gastronomie BUNDESPRESSESTRAND eröffnete während der Wintermonate 2004/2005 erstmals eine Winterpräsenz für Abendveranstaltungen in einem zur Sommerlocation nahegelegen Bürogebäude. Die leerstehende Büroetage wurde in eine Winterlandschaft verwandelt, um auch den Berlinern einen kleinen Skiurlaub zu ermöglichen.",
        //   descriptionEng:
        //     "In 2004/2005 the well known Berlin summer event location BUNDESPRESSESTRAND for the first time opened up a winter venue for evening events in an office buliding near to the summer site. The empty office floor was transformed into a winter landscape in order to allow the Berliners a small skiing vacation.",
        //   text: "",
        //   textDe: "",
        //   textEng: "",
        //   img: require("@/assets/img/bps_06.jpg"),
        //   img1: "",
        //   img2: "",
        //   img3: "",
        //   img4: "",
        //   img5: "",
        //   img6: "",
        //   img7: "",
        //   img8: "",
        //   img9: "",
        //   client: "",
        //   services: [],
        //   servicesDe: [],
        //   servicesEng: [],
        //   copyright: ["", ""],
        // },
      ],
      designDtld: {
        id: "E6-02",
        category: "exhibitions",
        name: "Design Deutschland 2010",
        nameDe: "Design Deutschland 2010",
        nameEng: "Design Deutschland 2010",
        subtitle: "",
        subtitleDe:
          "Internationale Wanderausstellung Design Deutschland 2010 und Gemeinschaftsstand deutscher Unternehmen",
        subtitleEng:
          "International travelling exhibition Design Deutschland 2010 and joint fair stand of German design brands",
        description: "",
        descriptionDe:
          "DESIGN DEUTSCHLAND ist eine internationale Wanderausstellung des Rat für Formgebung, die jährlich eine aktuelle, exemplarische Auswahl von jeweils 120 bis 150 Produkten renommierter deutscher Unternehmen und Designer umfasst. Parallel zur Wanderausstellung konnten sich deutsche Unternehmen an einzelnen internationalen Veranstaltungsorten im Rahmen eines Gemeinschaftsstands präsentieren.",
        descriptionEng:
          "DESIGN DEUTSCHLAND is an international travelling exhibition of the German Design Council, that annually presents a current, exemplary selection of 120 to 150 products of renowned German companies and designers. In addition to the travelling exhibition German design brands had the opportunity to present themselves within a joint fair stand at single international venues.",
        text: "",
        textDe: `SALONE DEL MOBILE 2010
          in der Zona Tortona parallel zur Internationalen Möbelmesse in Mailand

          ICFF INTERNATIONAL CONTEMPORARY FURNITURE FAIR 2010
          Internationale Möbelmesse in New York

          Im Rahmenprogramm zur Ausstellung fanden Empfänge, Pressekonferenzen und Vortragsveranstaltungen statt. `,
        textEng: `SALONE DEL MOBILE 2010
          at Zona Tortona parallel to the International Furniture Fair in Milan

          ICFF INTERNATIONAL CONTEMPORARY FURNITURE FAIR 2010
          International Furniture Fair in New York

          Parallel to the exhibitions, receptions, press conferences and lectures took place. `,
        img: require("@/assets/img/dd_ma_07.jpg"),
        img1: require("@/assets/img/dd_ma_02.jpg"),
        img2: require("@/assets/img/dd_ma_03.jpg"),
        img3: require("@/assets/img/dd_ma_04.jpg"),
        img4: require("@/assets/img/dd_ma_05.jpg"),
        img5: require("@/assets/img/dd_ma_06.jpg"),
        img6: require("@/assets/img/dd_ny_03_2.jpg"),
        img7: "",
        img8: "",
        img9: "",
        client: "",
        services: [],
        servicesDe: [],
        servicesEng: [],
        copyright: ["", "© Rat für Formgebung/German Design Council"],
      },

      immCologne: {
        id: "E7-01",
        category: "exhibitions",
        name: "Boulevard of Innovations 2010",
        nameDe: "Boulevard of Innovations 2010",
        nameEng: "Boulevard of Innovations 2010",
        subtitle: "",
        subtitleDe: "Neuheitenschau der imm cologne 2010",
        subtitleEng: "Innovation show at imm cologne 2010",
        description: "",
        descriptionDe:
          "Im Rahmen der Internationalen Möbelmesse IMM COLOGNE werden jedes Jahr zahlreiche Designaktivitäten und Sonderschauen präsentiert. In den vergangenen Jahren zählten hierzu unter anderen die Trendshow INFORMED BY COLOGNE und der BOULEVARD OF INNOVATIONS.",
        descriptionEng:
          "Each year numerous design activities and special shows are being presented during the international furniture fair IMM COLOGNE including INFORMED BY COLOGNE and the BOULEVARD OF INNOVATIONS in 2007, 2009 and 2010.",
        text: "",
        textDe: `Der BOULEVARD OF INNOVATIONS präsentierte Neuheiten und Innovationen von Ausstellern der imm cologne 2010. Erstmals wurden sowohl alle für den Hitguide 2010 ausgewählten Produkte als auch alle für den interior innovation award cologne 2010 nominierten Produkte gezeigt sowie die mit dem Preis ausgezeichneten Entwürfe.`,
        textEng: `The BOULEVARD OF INNOVATIONS presented new and innovative products from exhibitors of the imm cologne 2010. For the first time products selected for the Hitguide 2010 and products nominated for the interior innovations award cologne 2010 as well as the award winners were showcased in this exhibition. `,
        img: require("@/assets/img/imm_10_01.jpg"),
        img1: require("@/assets/img/imm_10_02.jpg"),
        img2: require("@/assets/img/imm_10_03.jpg"),
        img3: require("@/assets/img/imm_10_01.jpg"),
        img4: require("@/assets/img/imm_10_04.jpg"),
        img5: require("@/assets/img/imm_10_05.jpg"),
        img6: require("@/assets/img/imm_10_06.jpg"),
        img7: "",
        img8: "",
        img9: "",
        client: "",
        services: [],
        servicesDe: [],
        servicesEng: [],
        copyright: ["", "© Koelnmesse / Constantin Meyer"],
      },

      graphics: [
        {
          id: "G1",
          category: "graphics",
          name: "Wonder Wood",
          nameDe: "Wonder Wood",
          nameEng: "Wonder Wood",
          subtitle: "",
          subtitleDe: "Gestaltung und Umsetzung einer Webseite in HTML und CSS",
          subtitleEng: "Design and implementation of a website in HTML and CSS",
          description: "",
          descriptionDe:
            "www.wonder-wood.de erschien 2013 begleitend zur Veröffentlichung des Buches 'Wonder Wood'.",
          descriptionEng:
            "www.wonder-wood.de appeared in 2013 to accompany the publication of the book 'Wonder Wood'.",
          text: "",
          textDe:
            "Die minimalistische Webseite mit Blog-Charakter wurde in HTML und CSS umgesetzt, und zeigte Station des dazugehörigen Buches 'Wonder Wood' von Barbara Glasner und Stephan Ott beim Birkhäuser Verlag. ",
          textEng:
            "The minimalist website with blog character was implemented in HTML and CSS, and showed stations of the accompanying book 'Wonder Wood' by Barbara Glasner and Stephan Ott at Birkhäuser Verlag..",
          img: require("@/assets/img/WonderWood.png"),
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client: "Barbara Glasner",
          services: [],
          servicesDe: [
            "Webdesign",
            "Erstellung von Animationen",
            "Umsetzung in HTML und CSS",
          ],
          servicesEng: [
            "Web design",
            "Creation of animations",
            "Implementation in HTML and CSS",
          ],
          copyright: ["", ""],
        },
        {
          id: "G2",
          category: "graphics",
          name: "",
          nameDe: "Spot on Materials",
          nameEng: "Spot on Materials",
          subtitle: "",
          subtitleDe: "Ausstellung zur InnoTrans 2012 in Berlin",
          subtitleEng: "Exhibition at InnoTrans 2012 in Berlin",
          description: "",
          descriptionDe:
            "Die Ausstellung SPOT ON MATERIALS präsentierte innovative Materialen und veranschaulichte diese anhand bereits umgesetzter Produkte. Die Produkte und Materialien verdeutlichen, welchen Stellenwert Materialien als Generator für Kreativität, für neue Ideen und ungewöhnliche Lösungen haben.",
          descriptionEng:
            "The exhibition SPOT ON MATERIALS presented new and innovative materials and illustrateed these on the basis of products that have already been implemented. The products and materials make clear, which status materials have as a generator for creativity, for new ideas and unusual solutions.",
          text: "",
          textDe:
            "Die Ausstellungsgestaltung greift Elemente auf, die dem Besucher bereits aus Innenräumen öffentlicher Verkehrsmittel bekannt sind. So setzt sich die Grundkonstruktion des Ausstellungssystems aus Rohrverbindern und Rohren zusammen, die durch Halteschlaufen und Informationstafeln ergänzt werden.",
          textEng:
            "The exhibition design takes up elements, that are already familiar to the visitors from the interiors of public transportation. The basic construction of the exhibition system consists of pipe connectors and pipes, that are supplemented by straps and information boards.",
          img: require("@/assets/img/som_logo.jpg"),
          img1: require("@/assets/img/som_02.jpg"),
          img2: require("@/assets/img/som_03.jpg"),
          img3: require("@/assets/img/som_05.jpg"),
          img4: require("@/assets/img/som_10.jpg"),
          img5: require("@/assets/img/som_12.jpg"),
          img6: require("@/assets/img/som_logo.jpg"),
          img7: "",
          img8: "",
          img9: "",
          client:
            "IDZ Internationales Design Zentrum Berlin e.V., Messe Berlin GmbH ",
          services: [],
          servicesDe: [
            "Inhaltliche Konzeption der Ausstellung in Zusammenarbeit mit dem IDZ",
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Konzeption und Gestaltung des Logos und der Ausstellungsgrafik",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept of content for the exhibition in collaboration with the IDZ",
            "Concept and design of the display architecture",
            "Concept and design of the logo and the display graphics",
            "Project management",
          ],
          copyright: [
            "",
            "Photos: © IDZ Internationales Design Zentrum Berlin e.V. / Saskia Nagel ",
          ],
        },
        {
          id: "G3",
          category: "graphics",
          name: "",
          nameDe: "German Shades of Green—SUSTAINABLE DESIGN FROM GERMANY",
          nameEng: "German Shades of Green—SUSTAINABLE DESIGN FROM GERMANY",
          subtitle: "",
          subtitleDe: "Ausstellung zur Taiwan Design Expo 2010 in Taipeh",
          subtitleEng: "Exhibition at Taiwan Design Expo 2010 in Taipei",
          description: "",
          descriptionDe:
            "Die Ausstellung GERMAN SHADES OF GREEN – SUSTAINABLE DESIGN FROM GERMANY stellte Beispiele nachhaltiger Gestaltung vor. Sie zeigte anhand von Produkten, Konzepten und Ideen aus Deutschland, wie Nachhaltigkeit im Design umgesetzt werden kann und wie Gestaltung entscheidend zum Erfolg nachhaltiger Entwicklung beiträgt. Auch die Ausstellungsgestaltung und die grafische Präsentation der Exponate orientierte sich an diesem Nachhaltigkeitsanspruch.",
          descriptionEng:
            "The exhibition GERMAN SHADES OF GREEN—SUSTAINABLE DESIGN FROM GERMANY showcased examples of sustainable design. It showed by means of products, concepts and ideas from Germany how sustainability can be implemented into design and how design decisively contributes to the success of sustainable development.",
          text: "",
          textDe:
            "Um dem Nachhaltigkeitsanspruch gerecht zu werden, wurden die Exponate vor Ort – gegliedert nach den Begriffen reconsider, rethink, respect und reimagine – ausschließlich durch Projektionen präsentiert. Auf diese Weise konnten Kosten und Ressourcen für Transporte und aufwendige Ausstellungsbauten, die nach Beendigung der Ausstellung hätten entsorgt werden müssen, eingespart werden. ",
          textEng:
            "The exhibition design was guided by the claim for sustainability: The exhibits were only presented by projections—structured by the terms reconsider, rethink, respect and reimagine. That way costs and resources for transport and extensive constructions, that would otherwise have to be disposed of after the exhibition, could be saved. ",
          img: require("@/assets/img/gg_tai_10_2.jpg"),
          img1: require("@/assets/img/gg_tai_01.jpg"),
          img2: require("@/assets/img/gg_tai_03.jpg"),
          img3: require("@/assets/img/gg_tai_09.jpg"),
          img4: require("@/assets/img/gg_tai_04.jpg"),
          img5: require("@/assets/img/gg_tai_10_2.jpg"),
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "IDZ International Design Center Berlin e.V., Goethe Institute Taipei ",
          services: [],
          servicesDe: [
            "Inhaltliche Konzeption der Ausstellung in Zusammenarbeit mit dem IDZ",
            "Konzeption und Gestaltung der Ausstellungsarchitektur",
            "Konzeption und Gestaltung des Logos, der Ausstellungsgrafik und der Projektionen",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept of content for the exhibition in collaboration with the IDZ",
            "Concept and design of the display architecture",
            "Concept and design of the logo, the display graphics and the projections",
            "Project management",
          ],
          copyright: [
            "",
            "Photos: © IDZ Internationales Design Zentrum Berlin e.V.",
          ],
        },
        {
          id: "G4",
          category: "graphics",
          name: "Hotel Weisshaar",
          nameDe: "Hotel Weisshaar",
          nameEng: "Hotel Weisshaar",
          subtitle: "",
          subtitleDe: "",
          subtitleEng: "",
          description: "",
          descriptionDe:
            "Logo-Redesign für das traditionsreiche HOTEL WEISSHAAR in Meersburg am Bodensee sowie Entwicklung und Gestaltung diverser Druckerzeugnisse und Werbemittel. ",
          descriptionEng:
            "Logo redesign for the traditional HOTEL WEISSHAAR in Meersburg at the Lake of Constance as well as concept and design for various means of advertising and printed material. ",
          text: "",
          textDe: "",
          textEng: "",
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
          client: "",
          services: [],
          servicesDe: [],
          servicesEng: [],
          copyright: ["", ""],
        },
        {
          id: "G5",
          category: "graphics",
          name: "",
          nameDe: "Access Berlin Design",
          nameEng: "Access Berlin Design",
          subtitle: "",
          subtitleDe: "Wanderausstellung für City of Design Shenzhen 2008",
          subtitleEng: "Travelling exhibition for City of Design Shenzhen 2008",
          description: "",
          descriptionDe:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          descriptionEng:
            "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
          text: "",
          textDe:
            "Die Ausstellung ACCESS BERLIN DESIGN stellte den Standort Berlin als wichtige Schnittstelle zwischen Industrie und Design vor und präsentierte designorientierte Unternehmen sowie Agenturen aus Berlin.",
          textEng:
            "The exhibition ACCESS BERLIN DESIGN introduced the city of Berlin as an important business location at the interface between industry and design and presented design oriented companies as well as design agencies from Berlin.",
          img: require("@/assets/img/abd_Logo2a.jpg"),
          img1: require("@/assets/img/abd_08_01.jpg"),
          img2: require("@/assets/img/abd_08_08.jpg"),
          img3: require("@/assets/img/abd_08_02.jpg"),
          img4: require("@/assets/img/abd_Logo2a.jpg"),
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main, IDZ Internationales Design Zentrum Berlin e.V. ",
          services: [],
          servicesDe: [
            "Konzeption und Gestaltung des Ausstellungssystems",
            "Konzeption und Gestaltung des Logos und der Ausstellungsgrafik",
            "Projektmanagement",
          ],
          servicesEng: [
            "Concept and design of the exhibition system",
            "Concept and design of the logo and the display graphics",
            "Project management",
          ],
          copyright: ["", ""],
        },
        {
          id: "G6",
          category: "graphics",
          name: "",
          nameDe: "Berliner Republik",
          nameEng: "Berliner Republik",
          subtitle: "",
          subtitleDe: "",
          subtitleEng: "",
          description: "",
          descriptionDe:
            "Gestaltung des Covers für die Jubiläumsausgabe der Zeitschrift BERLINER REPUBLIK anlässlich ihres fünfjährigen Bestehens.",
          descriptionEng:
            "Cover design for the anniversary edition of the magazine BERLINER REPUBLIK in celebration of its fifth birthday. ",
          text: "",
          textDe: "",
          textEng: "",
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
          client: "",
          services: [],
          servicesDe: [],
          servicesEng: [],
          copyright: ["", ""],
        },
        // {
        //   id: "G7",
        //   category: "graphics",
        //   name: "",
        //   nameDe: "Marquardt lässt grüssen",
        //   nameEng: "Marquardt says Hello",
        //   subtitle: "",
        //   subtitleDe: "",
        //   subtitleEng: "",
        //   description: "",
        //   descriptionDe:
        //     "Eine Kleiderkollektion mit Illustrationen zum Ort Marquardt bei Potsdam. ",
        //   descriptionEng:
        //     "A dress collection with illustrations inspired by the village of Marquardt near Potsdam.",
        //   text: "",
        //   textDe: "",
        //   textEng: "",
        //   img: require("@/assets/img/Illustration_04_2.jpg"),
        //   img1: "",
        //   img2: "",
        //   img3: "",
        //   img4: "",
        //   img5: "",
        //   img6: "",
        //   img7: "",
        //   img8: "",
        //   img9: "",
        //   client: "",
        //   services: [],
        //   servicesDe: [],
        //   servicesEng: [],
        //   copyright: ["", ""],
        // },
      ],

      management: [
        {
          id: "M1",
          category: "management",
          name: "",
          nameDe: "Bundespreis Ecodesign",
          nameEng: "German Ecodesign Award",
          subtitle: "",
          subtitleDe: "Preisverleihung am 22. November 2012 in Berlin",
          subtitleEng: "Award ceremony on November 22, 2012 in Berlin",
          description: "",
          descriptionDe:
            "Der BUNDESPREIS ECODESIGN wurde 2012 erstmals vom Bundesumweltministerium und dem Umweltbundesamt ausgelobt und zeichnet innovative Produkte und Konzepte aus, die gleichermaßen ästhetischen als auch ökologischen Ansprüchen genügen. Der Preis bietet Unternehmen sowie Designerinnen und Designern eine Plattform, um ihre Produkte und Ideen von herausragender ökologischer und gestalterischer Qualität zu präsentieren.",
          descriptionEng:
            "In 2012 the GERMAN ECODESIGN AWARD was awarded for the first time by the Federal Minister of the Environment and the Federal Environmental Agency and honors innovative products and concepts, that meet aesthetic as well as ecological demands. The prize offers companies as well as designers a platform to present their products and ideas of exceptional ecological and artistic quality. ",
          text: "",
          textDe:
            "Die Preisverleihung zum Bundespreis Ecodesign fand am 22. November 2012 in festlichem Rahmen in den Lichthöfen des Bundesumweltministeriums statt. Begrüßt wurden die geladenen Gäste von Bundesumweltminister Peter Altmaier und dem Juryvorsitzenden Prof. Günter Horntrich. Ausgezeichnet wurden 14 Preisträger in den Kategorien Produkt, Konzept und Nachwuchs. ",
          textEng:
            "The award ceremony for the German Ecodesign Award took place on the 22nd of November 2012 in a festive frame at the German Federal Ministry of the Environment. The invited guests were welcomed by Peter Altmaier, the Federal Minister of the Environment and the jury chairman Prof. Günter Horntrich. 14 prize winners were awarded in the categories product, concept and young talent. ",
          img: require("@/assets/img/eco1.jpg"),
          img1: require("@/assets/img/eco2.jpg"),
          img2: require("@/assets/img/eco5.jpg"),
          img3: require("@/assets/img/eco3.jpg"),
          img4: require("@/assets/img/eco6.jpg"),
          img5: require("@/assets/img/eco7.jpg"),
          img6: require("@/assets/img/eco8.jpg"),
          img7: require("@/assets/img/eco9.jpg"),
          img8: "",
          img9: "",
          client: "IDZ Internationales Design Zentrum Berlin e.V. ",
          services: [],
          servicesDe: [
            "Projektleitung für die Preisverleihung",
            "Gestaltung des Bühnenbilds und der Grafiken vor Ort",
          ],
          servicesEng: [
            "Head of project for the award ceremony",
            "Stage design and graphics for the ceremony",
          ],
          copyright: [
            "© IDZ Internationales Design Zentrum Berlin e.V. / Sandra Kühnapfel",
            "© IDZ Internationales Design Zentrum Berlin e.V. / Sandra Kühnapfel",
          ],
        },
        {
          id: "M2",
          category: "management",
          name: "",
          nameDe: "Deutscher Marken- und Designkongress 2011",
          nameEng: "German Brand and Design Congress 2011",
          subtitle: "",
          subtitleDe: "Establishing High-Value Brands",
          subtitleEng: "Establishing High-Value Brands",
          description: "",
          descriptionDe:
            "Auf dem DEUTSCHE MARKEN- UND DESIGNKONGRESS diskutieren hochrangige Experten verschiedener Gestaltungsbereiche über Brandmanagementprozesse. Unter dem Titel Establishing High-Value Brands beschäftigte sich der Kongress in 2011 mit der Implementierung von Marken, wobei die Markenkommunikation nach innen und außen im Mittelpunkt stand.",
          descriptionEng:
            "At the GERMAN BRAND AND DESIGN CONGRESS experts from different design areas discuss brand management processes. Under the title Establishing High-Value Brands in 2011 the congress dealt with the implementation of brands focussing on the inward and outward communication of brands.",
          text: "",
          textDe: `Am ersten Kongresstag fanden Vorträge in der Alten Brüderkirche statt.
            Die Referenten waren u.a. Lareena Hilton/Deutsche Bank AG, Prof. Uli Mayer-Johanssen/MetaDesign AG und Margarete Wies/Mercedes-Benz Cars Development Daimler AG.

            Am zweiten Kongresstag konnten die Teilnehmer im Rahmen eines Besuchsprogramms designorientierte Unternehmen in der Region besichtigen.
            Partner des Rahmenprogramms waren u.a. dOCUMENTA (13), SMA Solar Technology AG und THONET GmbH.

            Der Kongress wurde aus Mitteln des Europäischen Fonds für regionale Entwicklung gefördert und durch das Bundesministerium für Wirtschaft und Technologie sowie das Hessische Ministerium für Wirtschaft, Verkehr und Landesentwicklung unterstützt.`,
          textEng: `On the first congress day lectures took place at Alte Brüderkirche.
          Lecturers were amongst others Lareena Hilton/Deutsche Bank AG, Prof. Uli Mayer-Johanssen/MetaDesign AG and Margarete Wies/Mercedes-Benz Cars Development Daimler AG.

          On the second day, the congress participants were able to visit design oriented companies of the region.
          Partners of the visit programme were amongst others dOCUMENTA (13), SMA Solar Technology AG and THONET GmbH.

          The congress was promoted by the European Regional Development Fund (ERDF) and was supported by the Federal Ministry for Economy and Technology as well as the Hesse Ministry for Economics, Transport and Regional Development.`,
          img: require("@/assets/img/dmdk_11_06.jpg"),
          img1: require("@/assets/img/dmdk_11_03.jpg"),
          img2: require("@/assets/img/dmdk_11_04.jpg"),
          img3: require("@/assets/img/dmdk_11_08.jpg"),
          img4: require("@/assets/img/dmdk_11_02.jpg"),
          img5: require("@/assets/img/dmdk_11_07.jpg"),
          img6: require("@/assets/img/dmdk_Thonet_02.jpg"),
          img7: require("@/assets/img/dmdk_Thonet_05.jpg"),
          img8: require("@/assets/img/dmdk_Thonet_07.jpg"),
          img9: require("@/assets/img/dmdk_Thonet_06.jpg"),
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main ",
          services: [],
          servicesDe: ["Projektleitung"],
          servicesEng: ["Head of project"],
          copyright: [
            "© Rat für Formgebung/German Design Council / Sandra Kühnapfel",
            "",
          ],
        },
        {
          id: "M3",
          category: "management",
          name: "",
          nameDe: "Deutsches Design Museum",
          nameEng: "German Design Museum",
          subtitle: "",
          subtitleDe: "Roundtable-Veranstaltung in Berlin",
          subtitleEng: "Round-table discussion in Berlin",
          description: "",
          descriptionDe:
            "Über die Relevanz und Aufgabe eines DEUTSCHEN DESIGN MUSEUMS diskutierten renommierte Designer, Künstler und Pressevertreter im Rahmen einer Roundtable-Veranstaltung in Berlin. Der folgende öffentlichen Diskurs eröffnete der deutschen Designszene die Möglichkeit, sich an der Diskussion zu beteiligen. ",
          descriptionEng:
            "Renowned designers, artists and press representatives discussed the relevance and intention of a GERMAN DESIGN MUSEUM in the course of a round-table event in Berlin. The following public discourse offered the German design scene the possibility to be involved in the discussion. ",
          text: "",
          textDe:
            "Zum Thema diskutierten am 11. Juli 2011 im Direktorenhaus Berlin u.a. Christian Boros, Holger Liebs, Andreas Murkudis, Prof. Dr. Bazon Brock, Prof. Tobias Rehberger und Konstantin Grcic. ",
          textEng:
            "Discussants on 11th of July 2011 at Direktorenhaus Berlin were amongst others Christian Boros, Holger Liebs, Andreas Murkudis, Prof. Dr. Bazon Brock, Prof. Tobias Rehberger und Konstantin Grcic. ",
          img: require("@/assets/img/ddm_03.jpg"),
          img1: require("@/assets/img/ddm_04.jpg"),
          img2: require("@/assets/img/ddm_06.jpg"),
          img3: require("@/assets/img/ddm_01.jpg"),
          img4: require("@/assets/img/ddm_05.jpg"),
          img5: require("@/assets/img/ddm_02.jpg"),
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main ",
          services: [],
          servicesDe: [
            "Inhaltliche Vorbereitung der Diskussion",
            "Aufbereitung der Ergebnisse für den weiteren Diskurs",
            "Projektmanagement",
          ],
          servicesEng: [
            "Content preparation for the discussion",
            "Editing of the results for the further public discourse",
            "Project management",
          ],
          copyright: [
            "© Rat für Formgebung/German Design Council / Sandra Kühnapfel",
            "© Rat für Formgebung/German Design Council / Sandra Kühnapfel",
          ],
        },
        {
          id: "M4",
          category: "management",
          name: "",
          nameDe: "Brand New Germany",
          nameEng: "Brand New Germany",
          subtitle: "",
          subtitleDe:
            "Perspektiven für die deutsche Kreativwirtschaft, Konferenz und Vortragsreihe",
          subtitleEng:
            "Perspectives for the German creative Industry in Asia, Conference and series of lectures ",
          description: "",
          descriptionDe:
            "Die BRAND NEW GERMANY KONFERENZ UND VORTRAGSREIHE bot Designagenturen, Designern und Unternehmen der deutschen Kreativwirtschaft die Möglichkeit, sich über Chancen und Risiken des asiatischen Markts, dem sie sich häufig nicht länger entziehen können, zu informieren. Bereits in Asien vertretene Unternehmen und Dienstleister berichteten über ihre Erfahrungen.",
          descriptionEng:
            "The BRAND NEW GERMANY CONFERENCE AND SERIES OF LECTURES offered design agencies, designers and companies from the German creative industry the opportunity to catch up on the chances and risks of the Asian market, from which they can often no longer evade. Companies and service providers already represented in Asia reported on their experiences. ",
          text: "",
          textDe: `KONFERENZ
          am 1. Juni 2011 am Flughafen Tempelhof in Berlin und

          VORTRAGSREIHE
          am 15. September 2011 bei designaffairs GmbH in München,
          am 19. September 2011 bei Factor Design AG in Hamburg und
          am 27. September 2011 beim Rat für Formgebung/German Design Council in Frankfurt. \n\

          Referenten waren unter anderem Stefanie Diers/MetaDesign AG, Michael Lanz/designaffairs GmbH, Detlef Mika/interlübke Gebr. Lübke GmbH & Co. KG, Robert Sachon/Robert Bosch Hausgeräte GmbH und Olaf Stein/Factor Design AG.`,
          textEng: `CONFERENCE
            on 1st of June 2011 at Tempelhof airport in Berlin and

            SERIES OF LECTURES
            on 15th of September 2011 at designaffairs GmbH in Munich,
            on 19th of September 2011 at Factor Design AG in Hamburg and
            on 27th of September 2011 at the German Design Council in Frankfurt.

            Speakers were amongst others Stefanie Diers/MetaDesign AG, Michael Lanz/designaffairs GmbH, Detlef Mika/interlübke Gebr. Lübke GmbH & Co. KG, Robert Sachon/Robert Bosch Hausgeräte GmbH and Olaf Stein/Factor Design AG.`,
          img: require("@/assets/img/bng_01.jpg"),
          img1: require("@/assets/img/bng_mue_01_2.jpg"),
          img2: require("@/assets/img/bng_mue_02.jpg"),
          img3: require("@/assets/img/bng_mue_03.jpg"),
          img4: "",
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main ",
          services: [],
          servicesDe: ["Projektmanagement"],
          servicesEng: ["Project management"],
          copyright: [
            "© Rat für Formgebung/German Design Council",
            "© Rat für Formgebung/German Design Council",
          ],
        },
        {
          id: "M5",
          category: "management",
          name: "",
          nameDe: "Material Vision Konferenz",
          nameEng: "Material Vision Conference",
          subtitle: "",
          subtitleDe: "Designing the Weightless World",
          subtitleEng: "Designing the Weightless World",
          description: "",
          descriptionDe:
            "Auf der MATERIAL VISION KONFERENZ mit dem Titel Designing the Weightless World erhielten Produktentwickler, Designer und Architekten parallel zur Fachmesse Material Vision 2011 einen exklusiven Ausblick in die Materialtrends von morgen.",
          descriptionEng:
            "Parallel to the trade fair Material Vision 2011, product developers, designers and architects got an exclusive outlook on the material trends of tomorrow at the MATERIAL VISION CONFERENCE under the title Designing the Weightless World. ",
          text: "",
          textDe: `Die Konferenz am 25. Mai 2011 bei der Messe Frankfurt widmete sich der Fragestellung, welche Veränderungen in der Entwicklung von Produkten angesichts des Trends zur Digitalisierung und Minimalisierung im Produktdesign zu erwarten sind.

          Die Referenten waren u.a. Prof. Achim Menges/Institut für Computational Design Universität Stuttgart, Caroline Seifert/Deutsche Telekom AG und Dr. Sascha Peters/Haute Innovation.

          Die Konferenz wurde aus Mitteln des Europäischen Fonds für regionale Entwicklung gefördert und durch das Bundesministerium für Wirtschaft und Technologie sowie das Hessische Ministerium für Wirtschaft, Verkehr und Landesentwicklung unterstützt.`,
          textEng: `The conference on 25th of May 2011 at Frankfurt fair (Messe Frankfurt) was dedicated to the question what changes are to be expected for the development and design of products regarding the trend of digitising and minimising.

          The speakers were amongst others Prof. Achim Menges/Institute for Computational Design University Stuttgart, Caroline Seifert/Deutsche Telekom AG and Dr. Sascha Peters/Haute Innovation.

          The conference was promoted by the European Regional Development Fund (ERDF) and was supported by the Federal Ministry for Economy and Technology as well as the Hesse Ministry for Economics, Transport and Regional Development. `,
          img: require("@/assets/img/mv_11_02.jpg"),
          img1: require("@/assets/img/mv_11_03.jpg"),
          img2: require("@/assets/img/mv_11_04.jpg"),
          img3: require("@/assets/img/mv_11_05.jpg"),
          img4: require("@/assets/img/mv_11_06.jpg"),
          img5: "",
          img6: "",
          img7: "",
          img8: "",
          img9: "",
          client:
            "Rat für Formgebung/German Design Council, Frankfurt am Main, Messe Frankfurt GmbH ",
          services: [],
          servicesDe: ["Projektleitung"],
          servicesEng: ["Head of project"],
          copyright: [
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
          ],
        },
        {
          id: "M6",
          category: "management",
          name: "",
          nameDe: "YDMI–Young Designers Meet the Industry",
          nameEng: "YDMI–Young Designers Meet the Industry",
          subtitle: "",
          subtitleDe: "Recruiting- und Akquiseplattform",
          subtitleEng: "Recruiting- and acquisition platform",
          description: "",
          descriptionDe:
            "YDMI – YOUNG DESIGNERS MEET THE INDUSTRY ist die Recruiting- und Akquiseplattform des Rat für Formgebung für die Designszene, auf der ausgewählte Young Professionals aus den Bereichen Kommunikations-, Produkt- sowie Industriedesign auf Unternehmen mit ausgewiesener Design-Kompetenz treffen. ",
          descriptionEng:
            "YDMI—YOUNG DESIGNERS MEET THE INDUSTRY is the recruiting and acquisition platform for the design scene organised by the German Design Council, on which selected Young Professionals from the fields of communication design, product design and industrial design meet up with companies with outstanding design expertise.",
          text: "",
          textDe: `YDMI 2007
          im Postbahnhof am Gleisdreieck in Berlin

          YDMI 2008
          in der Villa Elisabeth in Berlin
          YDMI 2009
          im Städelmuseum parallel zur Tendence 2009 in Frankfurt

          Die YDMI Days beinhalten neben den YDMI Workshops mit Referenten aus der Praxis die YDMI Portfolioshow, bei der sich die teilnehmenden Young Professionals dem interessierten Publikum präsentieren können sowie eine kuratierte Ausstellung mit Arbeiten der Nachwuchsdesigner. Darüberhinaus bietet das YDMI Dinner den Young Professionals und den Unternehmensvertretern die Möglichkeit, sich auszutauschen und Kontakte zu knüpfen. Im Rahmen des Dinners findet zudem die Wahl zum Young Professional des Jahres statt. YDMI wurde im Jahr 2007 initiiert und findet seitdem im jährlichen Turnus statt. `,
          textEng: `YDMI 2007
          at Postbahnhof am Gleisdreieck in Berlin
          YDMI 2008
          at Villa Elisabeth in Berlin
          YDMI 2009
          at Städelmuseum parallel to the trade fair Tendence 2009 in Frankfurt

          The YDMI Days include workshops with experts from experience, a portfolio show, within which the participating Young Professionals have the opportunity to present themselves to the interested audience as well as an exhibition showcasing works from the young designer. In addition the YDMI Dinner offers the Young Professionals and the company representatives the possibility to exchange ideas and to establish contact. Furthermore the Young Professional of the year is elected during the dinner. YDMI was initiated in 2007 and has since then been taking place on a yearly basis. `,
          img: require("@/assets/img/YDMI_08_09_2.jpg"),
          img1: require("@/assets/img/YDMI_08_11.jpg"),
          img2: require("@/assets/img/YDMI_07_01.jpg"),
          img3: require("@/assets/img/YDMI_07_04.jpg"),
          img4: require("@/assets/img/YDMI_08_03.jpg"),
          img5: require("@/assets/img/YDMI_08_15.jpg"),
          img6: require("@/assets/img/YDMI_08_06.jpg"),
          img7: require("@/assets/img/YDMI_09_10.jpg"),
          img8: require("@/assets/img/YDMI_09_05.jpg"),
          img9: require("@/assets/img/YDMI_09_11.jpg"),
          client: "Rat für Formgebung/German Design Council, Frankfurt am Main",
          services: [],
          servicesDe: ["Projektmanagement"],
          servicesEng: ["Project management"],
          copyright: [
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
            "© Rat für Formgebung/German Design Council / Lutz Sternstein",
          ],
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
      this.buttonsClicked = true;
      if (
        this.detailsWanted === false &&
        this.me.detailsWanted === false &&
        this.contactInfoWanted === false
      ) {
        this.filterLanguage(this.selectedLanguage);
      }
      if (this.me.detailsWanted === true) {
        return;
      }
      if (this.contactInfoWanted === true) {
        return;
      }
    },

    // console.log(this.selectedLanguage);

    filterLanguage(language) {
      console.log(this.selectedLanguage);

      if (language === "de") {
        for (let i = 0; i < this.filteredProjects.length; i++) {
          this.selectedCategory = this.filteredProjects[i].category;
          this.filteredProjects[i].name = this.filteredProjects[i].nameDe;
          this.filteredProjects[i].description =
            this.filteredProjects[i].descriptionDe;
          this.filteredProjects[i].text = this.filteredProjects[i].textDe;
        }
      } else if (language === "eng") {
        for (let i = 0; i < this.filteredProjects.length; i++) {
          this.selectedCategory = this.filteredProjects[i].category;
          this.filteredProjects[i].name = this.filteredProjects[i].nameEng;
          this.filteredProjects[i].description =
            this.filteredProjects[i].descriptionEng;
          this.filteredProjects[i].text = this.filteredProjects[i].textEng;
        }
      }
    },

    filterProjects(cat) {
      this.selectedProject = undefined;
      this.detailsWanted = false;
      this.buttonsClicked = true;
      this.me.detailsWanted = false;
      this.contactInfoWanted = false;
      if (cat !== "about" || cat !== "contact") {
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
      }
      this.selectedCategory = this.filteredProjects[0].category;
      this.filterLanguage(this.selectedLanguage);
    },

    setSelectedProject(project) {
      this.detailsWanted = true;
      console.log(this.detailsWanted);
      this.selectedProject = project;
      this.filterLanguage(this.selectedLanguage);
      this.selectedCategory = this.selectedProject.category;
      console.log(this.selectedProject.name);
    },

    showDetailsAbout() {
      this.selectedCategory = "about";
      this.selectedProject = undefined;
      this.filteredProjects = undefined;
      this.detailsWanted = false;
      this.contactInfoWanted = false;
      this.me.detailsWanted = true;
    },

    showContactInfo() {
      this.selectedCategory = "";
      this.selectedProject = undefined;
      this.filteredProjects = undefined;
      this.me.detailsWanted = false;
      this.detailsWanted = false;
      this.contactInfoWanted = true;
    },
  },
};
</script>
