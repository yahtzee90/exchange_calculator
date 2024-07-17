{
  const inputValue = document.querySelector("#inputValue");
  const inputCurrency = document.querySelector("#inputCurrency");
  const outputValue = document.querySelector("#outputValue");
  const outputCurrency = document.querySelector("#outputCurrency");

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

  {
    // set initial values

    document.addEventListener("DOMContentLoaded", () => {
      inputValue.value = (0).toFixed(2);
      inputCurrency.value = "PLN";
      outputValue.value = (0).toFixed(2);
      outputCurrency.value = "USD";
    });
  }

  {
    // select values when field clicked

    function clickSelect() {
      this.select();
    }

    inputValue.addEventListener("click", clickSelect);
    outputValue.addEventListener("click", clickSelect);
  }

  {
    // calculate
    
    inputValue.addEventListener("input", () => {
      outputValue.value = (
        inputValue.value *
        currencyRate[inputCurrency.value][outputCurrency.value]
      ).toFixed(2);
    });

    outputValue.addEventListener("input", () => {
      inputValue.value = (
        outputValue.value *
        currencyRate[outputCurrency.value][inputCurrency.value]
      ).toFixed(2);
    });
  }
}
