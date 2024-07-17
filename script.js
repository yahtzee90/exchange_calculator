{
  const inputValue = document.querySelector("#inputValue");
  const outputValue = document.querySelector("#outputValue");

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
      outputValue.value = (0).toFixed(2);
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

    const inputCurrency = document.querySelector("#inputCurrency");
    const outputCurrency = document.querySelector("#outputCurrency");

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

  {
    // reset button

    document.querySelector("#reset").addEventListener("click", () => {
      outputValue.value = (0).toFixed(2);
      inputValue.value = (0).toFixed(2);
      inputValue.select();
    });
  }
}
