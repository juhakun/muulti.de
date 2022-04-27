<template>
  <table>
    <td>
      <div class="table">
        <img :src="projectImgSrc" />
      </div>
    </td>
    <td>
      <div class="table">
        <h2>{{ projectName }}</h2>
        <p>{{ projectDes }}</p>
      </div>
    </td>
  </table>
</template>

<script>
export default {
  props: ["projectName", "projectDes", "projectImgSrc"],
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
}

table {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-bottom: 1px dashed;
  border-color: gray;
  vertical-align: top;
}

.table {
  max-width: 90%;
  min-width: 300px;
  margin-left: rem;
  margin-right: 1rem;
  float: left;
}
</style>
