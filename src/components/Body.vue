<template>
  <div class="body">
    <div class="content">
      <Converter />
      <div class="side_menu"></div>
    </div>
  </div>
</template>

<script>
import Converter from "./body/converter";
export default {
  name: "Body",
  components: { Converter }
};
</script>

<style scoped>
div.body {
  display: flex;
  justify-content: center;
}
div.content {
  margin: 1em 0 1em 0;
  display: flex;
  width: 90em;
  min-height: 45.9em;
  flex-direction: row;
}
div.content h1 {
  margin: 0;
}
</style>
