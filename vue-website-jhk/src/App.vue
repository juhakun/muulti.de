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
  width: 850px;
  padding-top: 3rem;
  margin-top: 1rem;
  white-space: nowrap;
  border-bottom: 1px dashed;
  border-color: gray;
  float: left;
}

#content {
  padding-left: 3rem;
  padding-right: 0rem;
  margin-top: 1rem;
  max-width: 850px;
  min-width: 700px;
  float: left;
}

#detailedText {
  margin-right: 9rem;
  padding-top: 0.5rem;
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
  padding-top: 2rem;
  margin-right: 8rem;
  border-bottom: 1px dashed;
  border-color: gray;
  vertical-align: top;
}
</style>
