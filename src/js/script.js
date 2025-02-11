async function getBitcoinPrice() {
    
    const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL,EUR,CAD";

    try {
        const response = await fetch(url);
        const data = await response.json();


        const inputPrice = document.querySelector('#inputBtcPrice');
        const currency = document.querySelector('#currency');
        const outputPrice = document.querySelector('#outputPrice');
        const outputCurrency = document.querySelector('#outputCurrency');

        inputPrice.addEventListener('input', () => {
            const btcValue = parseFloat(inputPrice.value) || 0;

            if (outputCurrency.value === 'USD') {

                outputPrice.value = (btcValue * data.BTC.USD).toFixed(2);

            } else if (outputCurrency.value === 'BRL') {

                outputPrice.value = (btcValue * data.BTC.BRL).toFixed(2);

            } else if (outputCurrency.value === 'EUR') {

                outputPrice.value = (btcValue * data.BTC.EUR).toFixed(2);

            } else if (outputCurrency.value === 'CAD') {
                
                outputPrice.value = (btcValue * data.BTC.CAD).toFixed(2);
            
            } else {
                outputPrice.value = "0";
            }
        });



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