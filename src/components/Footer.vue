<template>
  <div class="footer">
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
div.footer {
  display: flex;
  justify-content: center;
  background: #fafafa;
  margin: auto 0 0 0;
  height: 8em;
}

div.content {
  display: flex;
  width: 90em;
  flex-direction: row;
}

div.content p {
  margin: 0;
}
</style>
