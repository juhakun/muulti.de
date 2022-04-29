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
        <h2>{{ projectName.toUpperCase() }}</h2>
        <p>{{ projectDes }}</p>
      </td>
    </tr>
    <tr>
      <td>
        <p class="copyright">{{ projectCopyright }}</p>
      </td>
      <td>
        <base-button
          @click="$emit('details-wanted', true)"
          style="float: right"
          mode="de-eng"
          >mehr</base-button
        >
      </td>
    </tr>
  </table>
</template>

<script>
// import SingleProjectLong from "./SingleProjectLong.vue";
export default {
  //   components: { SingleProjectLong },
  props: ["projectName", "projectDes", "projectImgSrc", "projectCopyright"],
  data() {
    return {};
  },
  provide() {
    return {
      openProjectDetails: this.openProjectDetails,
      detailsWanted: this.detailsWanted,
    };
  },
  methods: {
    // setOpenProjectDetails() {
    //   this.detailsWanted = true;
    //   console.log(this.detailsWanted);
    // },
    // statusOpenProjectDetails() {
    //   this.$emit("details-wanted", this.detailsWanted);
    // },
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
}

table {
  padding-bottom: 0.5rem;
  padding-top: 2rem;
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

.copyright {
  font-size: 7pt;
  color: #7f7f7f;
}
</style>
