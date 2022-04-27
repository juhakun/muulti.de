<template>
  <div>
    <header-de-eng></header-de-eng>
    <header-logo></header-logo>
    <base-navigation></base-navigation>
    <overview-projects></overview-projects>
  </div>
</template>

<script>
import OverviewProjects from "./components/layout/OverviewProjects.vue";
export default {
  components: { OverviewProjects },
};
</script>

<style>
a:link,
a:visited {
  color: gray;
  text-decoration: none;
}

button {
  padding: 0.2rem 1.5rem;
  font-family: arial;
  font-size: 12pt;
  color: gray;
  background-color: white;
  border: 1px solid #3a0061;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
}

button:hover,
button:active,
button:focus {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

div {
  padding: 0.5rem;
  margin: auto;
  max-width: 1000px;
  min-width: 600px;
}

#right {
  text-align: right;
}

#nav {
  padding-top: 2rem;
  margin: 1rem;
  white-space: nowrap;
  border-bottom: 1px dashed;
  border-color: gray;
  float: left;
}

#nr5 {
  border-top: 1px dotted gray;
  position: relative;
  top: 90px;
  left: 0px;
  padding-top: 10px;
  width: 800px;
  height: 50px;
}
#nr6 {
  border-bottom: 1px dotted gray;
  width: 680px;
  height: 1px;
  margin-top: 2px;
}
#nr7 {
  position: relative;
  top: 90px;
  border-bottom: 1px dotted gray;
  padding-top: 0;
  width: 800px;
  height: 30px;
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
#Element3 {
  float: left;
  word-spacing: 0;
}
#Element5 {
  font-size: 10pt;
  float: left;
  word-spacing: 0;
}
#Element6 {
  font-size: 9pt;
  font-style: italic;
  float: left;
  word-spacing: 0;
}
#Element8 {
  font-size: 8pt;
  float: left;
  word-spacing: 0;
}
p {
  font-family: "Arial";
  font-size: 11pt;
  text-align: left;
  /* text-align: justify; */
}
#Element4 {
  font-style: italic;
}
#Element7 {
  font-size: 7pt;
  color: #7f7f7f;
}
#Element9 {
  font-size: 6pt;
  color: #7f7f7f;
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
