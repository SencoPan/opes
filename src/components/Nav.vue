<template>
  <div class="nav">
    <div class="content">
      <div class="logo">
        <p>Opes</p>
      </div>
      <div class="navigation">
        <div class="item">
          <p>Info</p>
        </div>
        <div class="item">
          <p>Menu</p>
        </div>
        <div class="item">
          <p>DropBox</p>
        </div>
        <div class="item">
          <p>Login Panel</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
/*Change background color to #545fff*/
div.nav {
  display: flex;
  justify-content: center;
  height: 5em;
  background: rgb(85, 134, 255);
  background: linear-gradient(
    0deg,
    rgba(85, 134, 255, 1) 0%,
    rgba(84, 95, 255, 1) 100%
  );
  color: white;
}
div.content {
  display: flex;
  width: 90em;
  flex-direction: row;
}
div.logo {
  display: flex;
}

div.logo p,
div.navigation div {
  display: flex;
  margin: auto 0 auto 0;
}

div.logo p {
  font-size: 3em;
  height: 3em;
  font-family: "IBM Extra-Light", sans-serif;
}

div.navigation {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

div.navigation div.item {
  margin-left: 1em;
}

@font-face {
  font-family: "IBM Extra-Light";
  src: url("../assets/fonts/IBMPlexSerif-Light.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>
