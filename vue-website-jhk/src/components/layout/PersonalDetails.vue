<template>
  <div id="content">
    <section>
      <img :src="me.portrait" style="width: 220px; margin-top: 3rem" />
      <h2 style="margin-top: 2rem">{{ me.headline.toUpperCase() }}</h2>
      <p
        style="
          padding-bottom: 1.75rem;
          margin-right: 6rem;
          border-bottom: 1px dashed;
          border-color: gray;
        "
      >
        bietet vielfältige Dienstleistungen in den Bereichen Programmierung,
        Design und Kommunikation. Die Verbindung unterschiedlicher Disziplinen
        ist zentraler Bestandteil ihrer Arbeit und ermöglicht die Entwicklung
        außergewöhnlicher, ganzheitlicher Konzepte. Seit 2004 ist sie für
        zahlreiche namhafte Kunden tätig. <br />Geboren in Konstanz, studierte
        sie zunächst Architektur an der Technischen Hochschule Karlsruhe und
        schloss ihr anschließendes Design-Studium mit dem Schwerpunkt
        Produktdesign an der Fachhochschule Postdam mit dem Diplom ab.
        <br />Ergänzend zu ihrer Ausbildung im Designbereich absolvierte sie
        eine einjährige Weiterbildung zur zertifizierten Softwareentwicklerin,
        die sie im Sommer 2022 abschloss. <br />Julia Häusler lebt und arbeitet
        in Berlin.
      </p>
      <!-- <table style="padding-top: 0rem">
      <tr>
        <td>
          <h2>SOFTWARE</h2>
          <p>
            // Frontend-Programmierung in Java <br />// Kuratierung und Inszenierung
            <br />// Styling, Material- und Farbauswahl <br />// Messestände und
            Präsentationssysteme <br />// Detailplanung
          </p>
          <br />
          <h2>EXHIBITION / INTERIOR</h2>
          <p>
            // Konzeption und Gestaltung <br />// Kuratierung und Inszenierung
            <br />// Styling, Material- und Farbauswahl <br />// Messestände und
            Präsentationssysteme <br />// Detailplanung
          </p>
        </td>
        <td>
          <h2>GRAPHICS</h2>
          <p>
            // Logo und Corporate Identity <br />// Geschäftsunterlagen und
            Werbemittel <br />// Ausstellungsgrafiken <br />// Layout und Satz
            <br />// Image-Filme und Animationen<br />
          </p>
          <br />
          <h2>DESIGN MANAGEMENT</h2>
          <p>
            // Beratung zu Design und Kommunikation <br />// Trendscouting und
            -recherche <br />// Events, Workshops und Konferenzen <br />//
            Kommunikationskonzepte <br />// Texterstellung in deutsch und
            englisch
          </p>
        </td>
      </tr>
    </table> -->

      <h2 style="margin-top: 2rem" v-if="selectedLanguage === 'de'">
        AUFTRAGGEBER
      </h2>
      <h2 style="margin-top: 2rem" v-else-if="selectedLanguage === 'eng'">
        CLIENTS
      </h2>
      <p>
        // Deutsches Design Museum <br />
        <!-- www.deutschesdesignmuseum.de<br /><br /> -->
        // Die Neue Sammlung–The International Design Museum<br />
        <!-- www.die-neue-sammlung.de <br /><br /> -->
        // Goethe Institut Taipeh<br />
        <!-- www.goethe.de/taipei <br /><br /> -->
        // Hessen Design e.V.<br />
        <!-- www.hessendesign.de <br /><br /> -->
        // Hotel Weisshaar<br />
        <!-- www.hotel-weisshaar.de <br /><br /> -->
        // IDZ Internationales Design Zentrum Berlin e.V. <br />
        <!-- www.idz.de <br /><br /> -->
        // Koelnmesse GmbH<br />
        <!-- www.imm-cologne.de <br /><br /> -->
        // Messe Berlin GmbH
        <!-- <br />www.messe-berlin.de <br /><br /> -->
        // Messe Frankfurt GmbH<br />
        <!-- www.messefrankfurt.com <br /><br /> -->
        // Rat für Formgebung/German Design Council <br />
        <!-- www.german-design-council.de -->
        <!-- <br /><br /> -->
        // republic movida GmbH <br />
        <!-- www.republik-movida.de -->
        <!-- <br /><br /> -->
        // Serco GmbH & Co. <br />
        <!-- www.serco.de <br /><br /> -->
        // walks and talks GmbH <br /><br />
        <!-- www.bundespressestrand.de -->
      </p>

      <h2 v-if="selectedLanguage === 'de'">MESSEN</h2>
      <h2 v-else-if="selectedLanguage === 'eng'">TRADE FAIRS</h2>
      <p>
        // Ambiente, Frankfurt <br />
        <!-- www.ambiente.messefrankfurt.com<br /><br /> -->
        // City of Design, Shenzhen/China<br />
        <!-- www.shenzhendesign.org <br /><br /> -->
        // DMY, Berlin<br />
        <!-- www.dmy-berlin.com <br /><br /> -->
        // Fuori Salone zurInternationalen Möbelmesse Salone del Mobile,
        Mailand/Italien<br />
        <!-- www.fuorisalone.it <br /><br /> -->
        // ICFF International Contemporary Furniture Fair, New York/USA
        <br />
        <!-- www.icff.com<br /><br /> -->
        // IFA Internationale Funkausstellung, Berlin<br />
        <!-- www.ifa-berlin.de <br /><br /> -->
        // imm cologne, Köln<br />
        <!-- www.imm-cologne.de <br /><br /> -->
        // InnoTrans, Berlin<br />
        <!-- www.innotrans.de <br /><br /> -->
        // Taiwan Design Expo, Taipeh/Taiwan<br />
        <!-- designexpo.boco.com.tw <br /><br /> -->
        // Tendence, Frankfurt
        <!-- <br /> -->
        <!-- tendence.messefrankfurt.com -->
      </p>
    </section>
    <table></table>
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
