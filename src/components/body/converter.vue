<template>
  <div class="converter">
    <div class="hr">
      <hr />
    </div>
    <div class="input">
      <div class="current_currency">
        <label>
          <p class=""></p>
          text
          <input type="text" />
        </label>
      </div>
      <div class="convert_sign">
        <input type="submit" />
      </div>
      <div class="converted_currency">
        <label>
          text
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="submit">
      <p>Test 2</p>
    </div>
    <div class="hr">
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "converter"
};
</script>

<style scoped>
.converter {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.input {
  display: flex;
  flex-direction: row;
}
.input div,
label {
  display: flex;
  flex-direction: row;
}
.input div:nth-child(1) {
  margin-left: auto;
}
.input div:nth-child(2) {
  margin: 0 3em 0 3em;
}
.input div:nth-child(3) {
  margin-right: auto;
}
hr {
  height: 1px;
  border: none;
  color: #0080ff;
  background-color: #0080ff;
  width: 100%;
}
.hr {
  display: flex;
}
.input {
}
.submit {
}
</style>
