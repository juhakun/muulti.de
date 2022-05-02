<template>
  <div id="content">
    <p>
      {{ me.headline }}<br />
      {{ me.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["me"],
};
</script>
