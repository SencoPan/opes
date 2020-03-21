<template>
  <div class="Main">
    <Nav></Nav>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from "../components/Body";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default {
  name: "Page",
  components: { Body, Nav, Footer }
};
</script>

<style scoped></style>
