<template>
  <div id="content">
    <h2 style="margin-top: 2rem">{{ me.headline.toUpperCase() }}</h2>
    <img :src="me.portrait" style="width: 220px; margin-top: 2rem" />
  </div>
</template>
<script>
export default {
  props: ["me"],
};
</script>
