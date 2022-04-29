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
  padding: 0.2rem 1.5rem;
  font-family: arial;
  font-size: 12pt;
  color: gray;
  background-color: white;
  border: 1px solid #3a0061;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
}

button:hover,
button:active,
button:focus {
  color: black;
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
  color: black;
  text-decoration: none;
  font-weight: bold;
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
