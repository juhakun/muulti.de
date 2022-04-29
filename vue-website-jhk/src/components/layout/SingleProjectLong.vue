<template>
  <div id="content">
    <header>
      <h2>{{ selectedProject.name }}</h2>
      <p>Untertitel</p>
      <img :src="selectedProject.img" />
    </header>
  </div>
</template>

<script>
export default {
  props: ["selectedProject"],
};
</script>
