const optionToConvert = document.querySelector('.to-convert')
const convertedOptions = document.querySelector('.converted-options')
const button = document.querySelector('.convert-button')

const convertValues = async () => {

    const userValue = document.querySelector('.input-to-convert').value

    const valueToConvert = document.querySelector('.value-to-convert')
    const valueConverted = document.querySelector('.value-converted')
    const selectCurrencyToConvert = optionToConvert.value
    const selectedCurrencyConverted = convertedOptions.value

    const dataBR = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())

        const dolarBr = dataBR.USDBRL.high
        const euroBr = dataBR.EURBRL.high
        const libraBr = dataBR.GBPBRL.high


    const dataUs = await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,EUR-USD,GBP-USD").then(response => response.json())   

        const RealUs = dataUs.BRLUSD.high
        const euroUs = dataUs.EURUSD.high
        const libraUs = dataUs.GBPUSD.high
        

    const dataEu = await fetch("https://economia.awesomeapi.com.br/last/BRL-EUR,USD-EUR,GBP-EUR").then(response => response.json())   

        const RealEu = dataEu.BRLEUR.high
        const dolarEu = dataEu.USDEUR.high
        const libraEu = dataEu.GBPEUR.high

    const dataLi = await fetch("https://economia.awesomeapi.com.br/last/BRL-GBP,USD-GBP,EUR-GBP").then(response => response.json())

        const realLi = dataLi.BRLGBP.high
        const dolarLi = dataLi.USDGBP.high
        const euroLi = dataLi.EURGBP.high 

    if (selectCurrencyToConvert === 'real' && selectedCurrencyConverted === 'dolar') {

        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue / dolarBr)

    }


    if (selectCurrencyToConvert === 'real' && selectedCurrencyConverted === 'euro') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue / euroBr)
    }

    if (selectCurrencyToConvert === 'real' && selectedCurrencyConverted === 'libra') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue / libraBr)
    }

    if (selectCurrencyToConvert === 'real' && selectedCurrencyConverted === 'real') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue)
    }


    if (selectCurrencyToConvert === 'dolar' && selectedCurrencyConverted === 'real') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue / RealUs)
    }

    if (selectCurrencyToConvert === 'dolar' && selectedCurrencyConverted === 'euro') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue / euroUs)
    }

    if (selectCurrencyToConvert === 'dolar' && selectedCurrencyConverted === 'libra') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue / libraUs)
    }

    if (selectCurrencyToConvert === 'dolar' && selectedCurrencyConverted === 'dolar') {
        valueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue)
    }

    if (selectCurrencyToConvert === 'euro' && selectedCurrencyConverted === 'real') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue / RealEu)
    }

    if (selectCurrencyToConvert === 'euro' && selectedCurrencyConverted === 'dolar') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue / dolarEu)
    }

    if (selectCurrencyToConvert === 'euro' && selectedCurrencyConverted === 'libra') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue / libraEu)
    }

    if (selectCurrencyToConvert === 'euro' && selectedCurrencyConverted === 'euro') {
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue)
    }

    if (selectCurrencyToConvert === 'libra' && selectedCurrencyConverted === 'dolar') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(userValue / dolarLi)
    }


    if (selectCurrencyToConvert === 'libra' && selectedCurrencyConverted === 'real') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(userValue / realLi)
    }

    if (selectCurrencyToConvert === 'libra' && selectedCurrencyConverted === 'euro') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-PT', {
            style: 'currency',
            currency: 'EUR'
        }).format(userValue / euroLi)
    }

    if (selectCurrencyToConvert === 'libra' && selectedCurrencyConverted === 'libra') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2 // Define o número mínimo de casas decimais para a libra esterlina
        }).format(userValue)
    }

}

const changeIconsToConvert = () => {
    const nameToConvert = document.querySelector('.name-to-convert')
    const imageToConvert = document.querySelector('.image-to-convert')

    if (optionToConvert.value === 'real') {
        nameToConvert.innerHTML = 'Real brasileiro'
        imageToConvert.src = './assets/real.png'
    }

    if (optionToConvert.value === 'dolar') {
        nameToConvert.innerHTML = 'Dólar Americano'
        imageToConvert.src = './assets/dolar.png'
    }

    if (optionToConvert.value === 'euro') {
        nameToConvert.innerHTML = 'Euro'
        imageToConvert.src = './assets/euro.png'
    }

    if (optionToConvert.value === 'libra') {
        nameToConvert.innerHTML = 'Libra Esterlina'
        imageToConvert.src = './assets/libra.svg'
    }

    convertValues()
}

const changeIconsConverted = () => {
    const nameConverted = document.querySelector('.name-converted')
    const imageConverted = document.querySelector('.image-Converted')

    if (convertedOptions.value === 'real') {
        nameConverted.innerHTML = 'Real brasileiro'
        imageConverted.src = './assets/real.png'
    }

    if (convertedOptions.value === 'dolar') {
        nameConverted.innerHTML = 'Dólar Americano'
        imageConverted.src = './assets/dolar.png'
    }

    if (convertedOptions.value === 'euro') {
        nameConverted.innerHTML = 'Euro'
        imageConverted.src = './assets/euro.png'
    }

    if (convertedOptions.value === 'libra') {
        nameConverted.innerHTML = 'Libra Esterlina'
        imageConverted.src = './assets/libra.svg'
    }

    convertValues()

}

optionToConvert.addEventListener('change', changeIconsToConvert)
convertedOptions.addEventListener('change', changeIconsConverted)
button.addEventListener('click', convertValues) 