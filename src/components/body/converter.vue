<template>
  <div class="converter">
    <!--    <div class="hr">
      <hr />
    </div>-->
    <div class="input">
      <div class="current_currency part">
        <div class="current_currency_display">
          <p>RUB</p>
        </div>
        <label>
          <input type="text" class="currency_amount" />
        </label>
      </div>
      <div class="convert_sign part">
        <input type="submit" class="exchange-action" />
        <i class="fa fa-exchange-alt"></i>
      </div>
      <div class="converted_currency part">
        <div class="current_currency_display">
          <p>USD</p>
        </div>
        <label>
          <input type="text" class="currency_amount" />
        </label>
      </div>
    </div>
    <div class="submit">
      <p>Manual convert</p>
    </div>
    <!--    <div class="hr">
      <hr />
    </div>-->
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
}
.input div.part:nth-child(1) {
  margin-left: auto;
}
.input div.part:nth-child(2) {
  margin: 0 3em 0 3em;
}
.input div.part:nth-child(3) {
  margin-right: auto;
}
/*hr {
  height: 1px;
  border: none;
  color: #0080ff;
  background-color: #0080ff;
  width: 100%;
}
.hr {
  display: flex;
}*/
.exchange-action {
  display: none;
}
.exchange-action + svg {
  display: flex;
  font-size: 3em;
  margin: auto 0 auto 0;
}
.current_currency, .converted_currency {
  flex-direction: column;
}
.current_currency_display {
  display: flex;
  margin: 1em auto 1em auto;
  font-size: 1.2em;
}
.current_currency_display p {
  margin: auto 0 auto 0;
}
.currency_amount {
  max-width: 3.5em;
  font-size: 3.5em;
  padding: 0.1em;
}
.input {
}
.submit {
}
</style>
