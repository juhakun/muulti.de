<template>
  <div>
    <the-projects></the-projects>
  </div>
</template>

<script>
import TheProjects from "./components/TheProjects.vue";
export default {
  components: { TheProjects },
  data() {
    return {
      selectedLanguage: "de",
    };
  },
  methods: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>

<style>
a:link,
a:visited {
  color: gray;
  text-decoration: none;
}

div {
  padding: 0rem;
  padding-top: 0.75rem;
  margin: auto;
  max-width: 1000px;
  min-width: 760px;
}

#right {
  text-align: right;
}

#nav {
  padding-top: 3rem;
  margin: 1rem;
  white-space: nowrap;
  border-bottom: 1px dashed;
  border-color: gray;
  float: left;
}

#content {
  padding-left: 5rem;
  padding-right: rem;
  max-width: 90%;
  min-width: 700px;
  float: left;
}

#detailedText {
  margin-right: 7rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed;
  border-color: gray;
}

body {
  background-color: white;
}
h1 {
  font-family: "Arial";
  font-size: 24pt;
}
#Element1 {
  font-size: 14pt;
}
h2 {
  font-size: 12pt;
  font-family: "Arial";
}

p {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  /* text-align: justify; */
}

#InfoBox {
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 155px;
  background-color: #fdfeff;
  border: 1px solid gray;
}
#BoxInnen {
  padding: 5px;
}
#BoxInhalte {
  font-family: "Arial";
  font-size: 8pt;
}
</style>
