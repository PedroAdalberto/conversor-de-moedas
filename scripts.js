const convertButton = document.querySelector("button")
const selectTwo = document.querySelector(".select-two")
const selectOne = document.querySelector(".select-one")


function Converter() {

    const valueBitcoin = document.querySelector(".valor-bitcoin").value
    const valueLibra = document.querySelector(".valor-libra").value
    const valueDolar = document.querySelector(".valor-dolar").value
    const valueEuro = document.querySelector(".valor-euro").value
    const valueReal = document.querySelector(".valor-real").value

    const selectOne = document.querySelector(".select-one").value
    const selectTwo = document.querySelector(".select-two").value

    const valorString = document.querySelector("input").value

    let stringLimpa = valorString.replace(/\./g, '');
    stringLimpa = stringLimpa.replace(',', '.');
    const convertValues = parseFloat(stringLimpa);

    const valueTodayDolar = 5.4
    const valueTodayEuro = 6.6
    const valueTodayLibra = 7.4
    const valueTodayBitcoin = 126272
    const valueTodayReal = 1

    let converted = document.querySelector(".valorConvertido")
    let converter = document.querySelector(".valorConverter")


    if (selectTwo == valueDolar) {

        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((convertValues * selectOne) / valueTodayDolar || 0)
    }

    if (selectTwo == valueEuro) {

        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((convertValues * selectOne) / valueTodayEuro || 0)
    }

    if (selectTwo == valueLibra) {

        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((convertValues * selectOne) / valueTodayLibra || 0)

    }

    if (selectTwo == valueReal) {

        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((convertValues * selectOne) / valueTodayReal || 0)
    }

    if (selectTwo == valueBitcoin) {

        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format((convertValues * selectOne) / valueTodayBitcoin || 0)

    }



    if (selectOne == valueDolar) {

        converter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertValues || 0)
    }

    if (selectOne == valueEuro) {

        converter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertValues || 0)
    }

    if (selectOne == valueLibra) {

        converter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertValues || 0)

    }

    if (selectOne == valueReal) {

        converter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertValues || 0)
    }

        if (selectOne == valueBitcoin) {

            converter.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }).format(convertValues || 0)
    }

}

    function selectChangeOne() {
        
        const flag = document.querySelector(".brasil")
        const money = document.querySelector(".real")


        if (selectOne.value == "5.4") {

            flag.src = "./assets/usa.png"
            money.innerHTML = "Dólar Americano"
        }

        if (selectOne.value == "6.6") {

            flag.src = "./assets/euro.png"
            money.innerHTML = "Euro"
        }

         if (selectOne.value == "1") {

            flag.src = "./assets/brasil.png"
            money.innerHTML = "Real brasileiro"
        }

         if (selectOne.value == "7.4") {

            flag.src = "./assets/libra.png"
            money.innerHTML = "Libra"
        }

         if (selectOne.value == "126272") {

            flag.src = "./assets/bitcoin.png"
            money.innerHTML = "Bitcoin"
        }


        Converter()
    }


    function selectChangeTwo() {

        const flag = document.querySelector(".usa")
        const money = document.querySelector(".dolar")

        if (selectTwo.value == "1") {

            flag.src = "./assets/brasil.png"
            money.innerHTML = "Real brasileiro"
        }

        if (selectTwo.value == "5.4") {

            flag.src = "./assets/usa.png"
            money.innerHTML = "Dólar Americano"
        }

        if (selectTwo.value == "6.6") {

            flag.src = "./assets/euro.png"
            money.innerHTML = "Euro"
        }

         if (selectTwo.value == "7.4") {

            flag.src = "./assets/libra.png"
            money.innerHTML = "Libra"
        }

         if (selectTwo.value == "126272") {

            flag.src = "./assets/bitcoin.png"
            money.innerHTML = "Bitcoin"
        }


        Converter()
    }

    

    selectOne.addEventListener("change", selectChangeOne)
    selectTwo.addEventListener("change", selectChangeTwo)
    convertButton.addEventListener("click", Converter)
