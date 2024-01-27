const convertButton = document.querySelector(".convert-button")
const currencyConvertedSelectOption = document.querySelector(".currency-converted-select")
const currencyToConvertSelect = document.querySelector(".currency-to-convert-select")

function convertValuesBR(){
    
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const valueToConvert = document.querySelector(".currency-value-to-convert")

    const valueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.93

    const euroToday = 5.37

    const poundToday = 6.29

    const bitcoinToday = 196677.74

    if (currencyConvertedSelectOption.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    
    if (currencyConvertedSelectOption.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyConvertedSelectOption.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency",
            currency: "GBP"
         }).format(inputCurrencyValue / poundToday)
    }

    if (currencyConvertedSelectOption.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2 
        }).format(inputCurrencyValue / bitcoinToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValuesBR)


function currencyConvertedSelect(){
    const currencyConvertedName = document.getElementById("currency-converted-name")

    const convertedCurrencyImage = document.querySelector(".converted-currency-img")

    if (currencyConvertedSelectOption.value == "dolar") {
        currencyConvertedName.innerHTML = "Dólar Americano"
        convertedCurrencyImage.src = "./assets/dolar.png"

    }

    if (currencyConvertedSelectOption.value == "euro") {
        currencyConvertedName.innerHTML = "Euro"
        convertedCurrencyImage.src = "./assets/euro.png"
    }

    if (currencyConvertedSelectOption.value == "libra") {
        currencyConvertedName.innerHTML = "Libra Britânica"
        convertedCurrencyImage.src = "./assets/libra.png"
    }

    if (currencyConvertedSelectOption.value == "bitcoin") {
        currencyConvertedName.innerHTML = "Bitcoin"
        convertedCurrencyImage.src = "./assets/bitcoin.png"
    }

    if (currencyConvertedSelectOption.value == "real") {
        currencyConvertedName.innerHTML = "Real Brasileiro"
        convertedCurrencyImage.src = "./assets/real.png"
    }

    convertValuesBR()

}

currencyConvertedSelectOption.addEventListener("change", currencyConvertedSelect)






































































































