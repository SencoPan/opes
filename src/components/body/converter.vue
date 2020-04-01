<template>
  <div class="converter">
    <!--    <div class="hr">
      <hr />
    </div>-->
    <div class="input">
      <div class="current_currency part">
        <div class="current_currency_display">
          <label>
            <input
              @blur="checkValueAfter('curr')"
              list="currency"
              v-model="curr"
            />
          </label>
          <datalist id="currency">
            <option v-for="currency in availableCurrency" v-bind:key="currency">
              {{ currency }}
            </option>
          </datalist>
        </div>
        <label>
          <input
            type="text"
            class="currency_amount"
            v-on:keydown="getRid($event)"
            v-model="currInput"
          />
        </label>
      </div>
      <div class="convert_sign part">
        <input type="submit" class="exchange-action" />
        <i class="fa fa-exchange-alt"></i>
      </div>
      <div class="converted_currency part">
        <div class="current_currency_display">
          <input @blur="checkValueAfter()" list="con_currency" v-model="conv" />
          <datalist id="con_currency">
            <option v-for="currency in availableCurrency" v-bind:key="currency">
              {{ currency }}
            </option>
          </datalist>
        </div>
        <label>
          <input
            type="text"
            class="currency_amount"
            v-on:keydown="getRid($event)"
            v-model="convInput"
          />
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
  data() {
    return {
      curr: "RUB",
      conv: "USD",
      currInput: 0,
      convInput: 0,
      availableCurrency: ["UAN", "KOF", "RUB", "USD"]
    };
  },
  methods: {
    getRid: async function(event) {
      let charCode = event.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        (charCode < 96 || charCode > 105) &&
        charCode !== 188 &&
        charCode !== 110
      ) {
        event.preventDefault();
        this.currInput === "" ? (this.currInput = 0) : false;
        this.convInput === "" ? (this.convInput = 0) : false;
      }
    },
    checkValueAfter: async function(input) {
      if (input === "curr") {
        !(this.availableCurrency.indexOf(this.curr) !== -1)
          ? (this.curr = "")
          : this.curr;
      } else {
        !(this.availableCurrency.indexOf(this.conv) !== -1)
          ? (this.conv = "")
          : this.conv;
      }
    }
  },
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
input[list] {
  font: normal 1.3em sans-serif;
  width: 2.5em;
  text-align: center;
  border: none;
  text-transform: uppercase;
  border-bottom: #9d9d9d 0.1em solid;
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
  margin: 180% 0 auto 0;
}
.current_currency,
.converted_currency {
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
