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
  padding-top: 0.5rem;
  margin-top: 0rem;
  margin: auto;
  max-width: 1000px;
  float: center;
}

#header {
  width: 1200px;
  margin-top: -2rem;
  margin-left: -0.5rem;
  position: fixed;
  background: white;
  border-bottom: 0px dotted;
  border-color: gray;
  float: center;
}

#right {
  text-align: right;
}

#nav {
  width: 200px;
  padding-left: 2rem;

  white-space: nowrap;
  border-bottom: 0px dashed;
  border-color: black;
  float: left;
  position: fixed;
}

#content {
  margin-top: 11rem;
  padding-left: 12rem;
  max-width: 850px;
  min-width: 700px;
  float: left;
  position: static;
}

#detailedText {
  margin-right: 5.5rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1.5px dotted;
  border-color: gray;
}

#start {
  margin-top: 2rem;
}
body {
  background: white;
}

h1 {
  font-family: "Arial";
  font-size: 24pt;
}

h2 {
  font-size: 11pt;
  font-family: "Arial";
}

p {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  /* text-align: justify; */
}

pre {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  overflow-wrap: break-word;
  overflow: hidden;
}

table {
  min-width: 760px;
  max-width: 850px;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-right: 8rem;
  border-bottom: 1.5px dotted;
  border-color: gray;
  vertical-align: top;
}

td {
  vertical-align: top;
}

li {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  list-style-type: "* ";

  list-style-position: inside;
}
</style>
