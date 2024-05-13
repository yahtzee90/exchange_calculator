let inputValue = document.querySelector("#inputValue");
let inputCurrency = document.querySelector("#inputCurrency");
let outputValue = document.querySelector("#outputValue");
let outputCurrency = document.querySelector("#outputCurrency");

inputValue.value = (0).toFixed(2);
outputValue.value = (0).toFixed(2);

const currencyRate = {
  PLN: {
    PLN: 1.0,
    USD: 0.25,
    EUR: 0.23,
    GBP: 0.2,
  },
  USD: {
    PLN: 3.93,
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.79,
  },
  EUR: {
    PLN: 4.3,
    USD: 1.09,
    EUR: 1.0,
    GBP: 0.86,
  },
  GBP: {
    PLN: 5.02,
    USD: 1.27,
    EUR: 1.17,
    GBP: 1.0,
  },
};

function calculateOutput() {
  outputValue.value = (
    inputValue.value * currencyRate[inputCurrency.value][outputCurrency.value]
  ).toFixed(2);
}

function calculateInput() {
  inputValue.value = (
    outputValue.value * currencyRate[outputCurrency.value][inputCurrency.value]
  ).toFixed(2);
}

inputValue.addEventListener("click", function () {
  this.select();
});

outputValue.addEventListener("click", function () {
  this.select();
});

inputValue.addEventListener("input", calculateOutput);
outputValue.addEventListener("input", calculateInput);

outputValue.addEventListener("input", () => {
  inputValue.value = (
    outputValue.value * currencyRate[outputCurrency.value][inputCurrency.value]
  ).toFixed(2);
});

inputCurrency.addEventListener("change", () => {
  outputValue.value = (
    inputValue.value * currencyRate[inputCurrency.value][outputCurrency.value]
  ).toFixed(2);
});

outputCurrency.addEventListener("change", () => {
  outputValue.value = (
    inputValue.value * currencyRate[inputCurrency.value][outputCurrency.value]
  ).toFixed(2);
});
