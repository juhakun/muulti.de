<template>
  <div>
    <section>
      <img :src="me.portrait" style="width: 220px; margin-top: 2.3rem" />

      <section v-if="selectedLanguage === 'de'">
        <p
          style="
            padding-bottom: 1.75rem;
            margin-right: 6rem;
            border-bottom: 1.5px dotted;
            border-color: gray;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          "
        >
          Geboren in Konstanz, studierte Julia Häusler-Kun zunächst Architektur
          an der Technischen Hochschule Karlsruhe und schloss ihr anschließendes
          Design-Studium mit dem Schwerpunkt Produktdesign an der Fachhochschule
          Postdam mit dem Diplom ab.
          <br />
          <br />Mit Begeisterung widmet sie sich dem Aufspüren und Entwickeln
          von neuartigen Produkten und Lösungen, die unseren Alltag nachhaltig
          verändern und verbessern.
          <br />
          Die digitale Transformation unserer Produktwelt und die daraus
          resultierenden, neuen Möglichkeiten in der Konzeption und Entwicklung
          von Produkten und Anwendungen, fasziniert die Diplom-Produktdesignerin
          in diesem Zusammenhang besonders.
          <br />
          <br />
          Nach mehrjähriger Berufserfahrung als Produktdesignerin, Projekt- und
          Produktmanagerin hat sich Julia Häusler-Kun aus diesem Grund gezielt
          in der Entwicklung von digitalen Produkten und Software weitergebildet
          und die Zertifizierung zur Java-Entwicklerin "Oracle Certified
          Associate (OCA) Java SE 8 Programmer" abgeschlossen.

          <br />
          <br />
          Ihre disziplinübergreifende Ausbildung und Berufserfahrung ermöglichen
          die Entwicklung außergewöhnlicher, ganzheitlicher Konzepte. Julia
          Häusler-Kun lebt und arbeitet in Berlin.
        </p>
        <table
          style="margin-top: -1rem; padding-left: 0.5rem; padding-right: 0.5rem"
        >
          <td style="vertical-align: top">
            <h2>SOFTWARE</h2>
            <h2>Backend</h2>
            <ul style="padding-left: 15px">
              <li>Java</li>
              <li>MySQL</li>
              <li>Spring</li>
              <li>Hibernate</li>
            </ul>
            <h2>Frontend</h2>
            <ul style="padding-left: 15px">
              <li>JavaScript</li>
              <li>Vue.JS</li>
              <li>HTML, CSS</li>
              <li>Spring MVC</li>
              <li>Swing</li>
            </ul>
          </td>

          <br />
          <td style="width: 200px"></td>
          <td style="vertical-align: top">
            <h2>DESIGN</h2>
            <h2>Exhibition</h2>
            <ul style="padding-left: 15px">
              <li>Konzeption und Gestaltung</li>
              <li>Messestände und Präsentationssysteme</li>
              <li>Detailplanung</li>
            </ul>

            <h2>Graphics</h2>
            <ul style="padding-left: 15px">
              <li>Logo und Corporate Identity</li>
              <li>Ausstellungsgrafiken</li>
              <li>Layout und Satz</li>
            </ul>

            <h2>Management</h2>
            <ul style="padding-left: 15px">
              <li>Beratung zu Design und Kommunikation</li>
              <li>Trendscouting und-recherche</li>
              <li>Events, Workshops und Konferenzen</li>
            </ul>
            <br />
          </td>
        </table>
      </section>
      <section v-else-if="selectedLanguage === 'eng'">
        <p
          style="
            padding-bottom: 1.75rem;
            margin-right: 6rem;
            border-bottom: 1.5px dotted;
            border-color: gray;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          "
        >
          Born in Constance, Julia Häusler-Kun initially studied architecture at
          the Technical University of Karlsruhe and completed her subsequent
          Design studies with a focus on product design at the University of
          Applied Sciences Postdam with the diploma.
          <br />
          <br />She is passionate about finding and developing innovative
          products and solutions that sustainably change and improve our
          everyday life.
          <br />
          The digital transformation of our product world and the resulting new
          possibilities in conception and development of products and
          applications, fascinates the graduate product designer especially in
          this context.
          <br />
          <br />
          After several years of professional experience as a product designer,
          project and product manager, Julia Häusler-Kun therefore has completed
          further training in the development of digital products and software
          and has become a certified Java Developer "Oracle Certified Associate
          (OCA) Java SE 8 Programmer".

          <br />
          <br />
          Her interdisciplinary training and professional experience enable the
          development of extraordinary, holistic concepts. Julia Häusler-Kun
          lives and works in Berlin.
        </p>

        <table
          style="margin-top: -1rem; padding-left: 0.5rem; padding-right: 0.5rem"
        >
          <td style="vertical-align: top">
            <h2>SOFTWARE</h2>
            <h2>Backend</h2>
            <ul style="padding-left: 15px">
              <li>Java</li>
              <li>MySQL</li>
              <li>Spring</li>
              <li>Hibernate</li>
            </ul>
            <h2>Frontend</h2>
            <ul style="padding-left: 15px">
              <li>JavaScript</li>
              <li>Vue.JS</li>
              <li>HTML, CSS</li>
              <li>Spring MVC</li>
              <li>Swing</li>
            </ul>
          </td>

          <br />
          <td style="width: 200px"></td>
          <td style="vertical-align: top">
            <h2>DESIGN</h2>
            <h2>Exhibition</h2>
            <ul style="padding-left: 15px">
              <li>Concept and design</li>
              <li>Fair stands and presentation systems</li>
              <li>Detailed planning</li>
            </ul>

            <h2>Graphics</h2>
            <ul style="padding-left: 15px">
              <li>Logo and Corporate Identity</li>
              <li>Display graphics</li>
              <li>Layout and composition</li>
            </ul>

            <h2>Management</h2>
            <ul style="padding-left: 15px">
              <li>Consulting in design and communication</li>
              <li>Trendscouting and research</li>
              <li>Events, workshops and conference</li>
            </ul>
            <br />
          </td>
        </table>
      </section>

      <!--<h2 style="margin-top: 2rem" v-if="selectedLanguage === 'de'">
        AUFTRAGGEBER
      </h2>
      <h2 style="margin-top: 2rem" v-else-if="selectedLanguage === 'eng'">
        CLIENTS
      </h2>

      <li>Deutsches Design Museum</li>

       www.deutschesdesignmuseum.de<br /><br /> 
      <li>Die Neue Sammlung–The International Design Museum</li>
      www.die-neue-sammlung.de <br /><br /> 
      <li>Goethe Institut Taipeh</li>
      www.goethe.de/taipei <br /><br /> 
      <li>Hessen Design e.V.</li>
      www.hessendesign.de <br /><br /> 
      <li>Hotel Weisshaar</li>
      www.hotel-weisshaar.de <br /><br />
      <li>IDZ Internationales Design Zentrum Berlin e.V.</li>
      www.idz.de <br /><br /> 
      <li>Koelnmesse GmbH</li>
      www.imm-cologne.de <br /><br /> 
      <li>Messe Berlin GmbH</li>
      <br />www.messe-berlin.de <br /><br /> 
      <li>Messe Frankfurt GmbH</li>
      www.messefrankfurt.com <br /><br /> 
      <li>Rat für Formgebung/German Design Council</li>
      www.german-design-council.de 
      <br /><br /> 
      <li>republic movida GmbH</li>
      www.republik-movida.de 
      <br /><br /> 
      <li>Serco GmbH & Co.</li>
      www.serco.de <br /><br /> 
      <li>walks and talks GmbH</li>
      www.bundespressestrand.de 
      <br />

      <h2 v-if="selectedLanguage === 'de'">MESSEN</h2>
      <h2 v-else-if="selectedLanguage === 'eng'">TRADE FAIRS</h2>
      <li>Ambiente, Frankfurt</li>
      www.ambiente.messefrankfurt.com<br /><br /> 
      <li>City of Design, Shenzhen/China</li>
      www.shenzhendesign.org <br /><br /> 
      <li>DMY, Berlin</li>
      www.dmy-berlin.com <br /><br /> 
      <li>Fuori Salone zur Möbelmesse Salone del Mobile, Mailand/Italien</li>
      www.fuorisalone.it <br /><br /> 
      <li>ICFF International Contemporary Furniture Fair, New York/USA</li>
      www.icff.com<br /><br /> 
      <li>IFA Internationale Funkausstellung, Berlin</li>
      www.ifa-berlin.de <br /><br /> 
      <li>imm cologne, Köln</li>
      www.imm-cologne.de <br /><br />
      <li>InnoTrans, Berlin</li>
      www.innotrans.de <br /><br /> 
      <li>Taiwan Design Expo, Taipeh/Taiwan</li>
      designexpo.boco.com.tw <br /><br /> 
      <li>Tendence, Frankfurt</li>
      <br /> 
      tendence.messefrankfurt.com -->
    </section>
  </div>
</template>

<script>
export default {
  props: ["selectedLanguage", "me"],
};
</script>

<style scoped>
table {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
</style>
