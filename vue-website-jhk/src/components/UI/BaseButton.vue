<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
button {
  padding-left: 0.5rem;
  padding-bottom: 0.2rem;
  font-family: arial;
  font-size: 12pt;
  color: gray;
  background-color: white;
  border: 1px solid #3a0061;
  border: 0px;
  cursor: pointer;
  font-weight: regular;
}

button:hover,
button:active,
button:focus {
  color: gray;
  text-decoration: none;
  font-weight: bold;
}

.de-eng {
  padding: 0.75rem 0.15rem 0rem;
  font-size: 10pt;
}

.de-eng-active {
  padding: 0.75rem 0.15rem 0rem;
  font-size: 10pt;

  text-decoration: none;
  font-weight: bold;
}

.more {
  padding: 0.75rem 0.15rem 0rem;
  font-size: 10pt;
}

.active {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
