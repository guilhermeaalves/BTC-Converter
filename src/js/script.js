async function getBitcoinPrice() {

    const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,BRL,EUR,CAD";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const inputPrice = document.querySelector("#inputBtcPrice");
        const outputPrice = document.querySelector("#outputPrice");
        const outputCurrency = document.querySelector("#outputCurrency");

        function convertBtcToCurrency() {
            const btcValue = parseFloat(inputPrice.value) || 0;
            const currency = outputCurrency.value;

            if (data.BTC[currency]) {
                outputPrice.value = (btcValue * data.BTC[currency]).toFixed(2);
            } else {
                outputPrice.value = "0";
            }
        }

        function convertCurrencyToBtc() {
            const outputValue = parseFloat(outputPrice.value) || 0;
            const currency = outputCurrency.value;
            const currencyValue = data.BTC[currency];

            if (currencyValue) {
                inputPrice.value = (outputValue / currencyValue).toFixed(8);
            }
        }

        inputPrice.addEventListener("input", convertBtcToCurrency);

        outputPrice.addEventListener("input", convertCurrencyToBtc);

        outputCurrency.addEventListener("change", convertBtcToCurrency);


        // console.log("Preço do Bitcoin:");
        // console.log(`USD: $${data.bitcoin.usd}`);
        // console.log(`BRL: R$${data.bitcoin.brl}`);
        // console.log(`EUR: €${data.bitcoin.eur}`);

        // if (selectCoin.value === "1") {
        //     inputPrice.innerText = `$ ${data.BTC.USD}`;
        // } else if (selectCoin.value === "2") {
        //     inputPrice.innerText = `R$ ${data.BTC.BRL.toFixed(2).replace(',')}`;
        // } else if (selectCoin.value === "3") {
        //     inputPrice.innerText = `€ ${data.BTC.EUR}`;
        // } else {
        //     inputPrice.innerText = `$ ${data.BTC.CAD}`;
        // }


    } catch (error) {
        console.error("Erro ao buscar cotação:", error);
    }

}

getBitcoinPrice();