<template>
  <header>
    <h2>{{ selectedProject.name }}</h2>
    <p>Untertitel</p>
    <img :src="projectImgSrc" />
  </header>
</template>

<script>
export default {
  props: ["selectedProject"],
};
</script>
