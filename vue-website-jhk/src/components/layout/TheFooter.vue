<template>
  <div id="content">
    <table style="border-bottom: 0px; padding-top: 0rem">
      <tr>
        <td>
          <base-button
            v-if="selectedProject !== undefined"
            @click="$emit('go-back', this.selectedProject.category)"
            mode="de-eng"
          >
            {{ footer1 }}
          </base-button>
        </td>
        <td>
          <base-button
            @click="$emit('show-contact', 'contact')"
            mode="de-eng"
            style="float: right"
            >{{ footer2 }}
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
