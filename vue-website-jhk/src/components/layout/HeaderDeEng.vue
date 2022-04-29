<template>
  <header>
    <div id="right">
      <base-button
        @click="$emit('filter-language', 'de')"
        v-if="selectedLanguage === 'de'"
        mode="de-eng-active"
        >deutsch /
      </base-button>
      <base-button @click="$emit('filter-language', 'de')" v-else mode="de-eng"
        >deutsch /
      </base-button>
      <base-button
        @click="$emit('filter-language', 'eng')"
        v-if="selectedLanguage === 'eng'"
        mode="de-eng-active"
        >english
      </base-button>
      <base-button @click="$emit('filter-language', 'eng')" v-else mode="de-eng"
        >english
      </base-button>
    </div>
  </header>
</template>

<script>
export default {
  props: ["selectedLanguage"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
