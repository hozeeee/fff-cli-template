<template>
  <div class="example_slide" :style="{backgroundColor: bgColor}">
    <span style="font-size:24px; color:green;">{{ text }}</span>
    <p v-for="item of Array(20)" :key="item">example</p>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    bgColor: String,
  },
};
</script>
<style lang="less" scoped>
.example_slide {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
</style>