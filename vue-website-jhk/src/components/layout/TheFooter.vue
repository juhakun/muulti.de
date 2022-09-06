<template>
  <div style="padding-top: 0rem">
    <table style="border-bottom: 0px">
      <tr>
        <td>
          <base-button
            v-if="selectedProject !== undefined"
            @click="$emit('go-back', this.selectedProject.category)"
            mode="de-eng"
          >
            <a href="#">{{ footer1 }}</a>
          </base-button>
        </td>
        <td>
          <base-button
            @click="$emit('show-contact', 'contact')"
            mode="de-eng"
            style="float: right"
            ><a href="#">{{ footer2 }}</a>
          </base-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["selectedLanguage", "footer1", "footer2", "selectedProject"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
