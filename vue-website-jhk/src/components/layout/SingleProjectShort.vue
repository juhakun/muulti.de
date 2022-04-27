<template>
  <table>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="table">
          <img :src="projectImgSrc" />
        </div>
      </td>
      <td style="vertical-align: top">
        <h2>{{ projectName }}</h2>
        <p>{{ projectDes }}</p>
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <base-button style="float: right" mode="de-eng"
          ><single-project-long></single-project-long>mehr</base-button
        >
      </td>
    </tr>
  </table>
</template>

<script>
import SingleProjectLong from "./SingleProjectLong.vue";
export default {
  components: { SingleProjectLong },
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
  padding-bottom: 0.5rem;
  padding-top: 2.5rem;
  border-bottom: 1px dashed;
  border-color: gray;
  vertical-align: top;
}

.table {
  max-width: 100%;
  min-width: 300px;
  margin-left: rem;
  margin-right: 1rem;
  float: left;
}
</style>
