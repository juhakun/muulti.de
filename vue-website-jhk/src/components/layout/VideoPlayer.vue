<template>
  <div>
    <video
      controls
      autoplay
      style="box-shadow: 10px 10px 15px silver; border-radius: 3px; width: 85%"
    >
      <source
        type="video/webm"
        :src="require('@/assets/video/Catch-the-Balloons.webm')"
      />
      >
    </video>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  props: {
    mp4: String,
  },
};
</script>
