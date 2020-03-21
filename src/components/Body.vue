<template>
  <div class="body">
    <div class="content">
      <div class="converter">
        <h1>Hello world</h1>
      </div>
      <div class="side_menu">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body"
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
  min-height: 47em;
  flex-direction: row;
}
div.content h1 {
  margin: 0;
}
</style>
