<template>
  <div>
    <header-de-eng></header-de-eng>
    <header-logo></header-logo>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
a:link,
a:visited {
  color: gray;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

div {
  padding: 0.5rem;
  margin: auto;
  max-width: 1200px;
  min-width: 480px;
}

#nr3 {
  position: relative;
  top: 55px;
  left: 0px;
  border-bottom: 1px dotted gray;
  width: 800px;
  height: 38px;
}
#nr4 {
  position: relative;
  top: 90px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 20px;
  width: 680px;
  min-height: 120%;
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
  font-size: 10pt;
  font-family: "Arial";
}
#Element2 {
  font-size: 8pt;
  float: right;
  word-spacing: 0;
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
  font-size: 10pt;
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
