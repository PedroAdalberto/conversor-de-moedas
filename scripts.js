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

    const convertValues = document.querySelector("input").value

    const valueTodayDolar = 5.4
    const valueTodayEuro = 6.6
    const valueTodayLibra = 7.4
    const valueTodayBitcoin = 126272
    const valueTodayReal = 1

    const converted = document.querySelector(".valorConvertido")
    const converter = document.querySelector(".valorConverter")


    if (selectTwo == valueDolar) {

        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertValues / valueTodayDolar)

    }

    if (selectTwo == valueEuro) {

        converted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertValues / valueTodayEuro)
    }

    if (selectTwo == valueLibra) {

        converted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertValues / valueTodayLibra)

    }

    if (selectTwo == valueReal) {

        converted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertValues / valueTodayReal)
    }

    if (selectTwo == valueBitcoin) {

        converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(convertValues / valueTodayBitcoin)

    }



    if (selectOne == valueDolar) {

        converter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertValues)

    }

    if (selectOne == valueEuro) {

        converter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertValues)
    }

    if (selectOne == valueLibra) {

        converter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertValues)

    }

    if (selectOne == valueReal) {

        converter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertValues)
    }

        if (selectOne == valueBitcoin) {

            converter.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }).format(convertValues)
    }

}

    function selectChangeOne() {
        
        const flag = document.querySelector(".brasil")
        const money = document.querySelector(".real")


        if (selectOne.value == "Dolar") {

            flag.src = "./assets/usa.png"
            money.innerHTML = "Dólar Americano"
        }

        if (selectOne.value == "Euro") {

            flag.src = "./assets/euro.png"
            money.innerHTML = "Euro"
        }

         if (selectOne.value == "Real") {

            flag.src = "./assets/brasil.png"
            money.innerHTML = "Real brasileiro"
        }

         if (selectOne.value == "Libra") {

            flag.src = "./assets/libra.png"
            money.innerHTML = "Libra"
        }

         if (selectOne.value == "Bitcoin") {

            flag.src = "./assets/bitcoin.png"
            money.innerHTML = "Bitcoin"
        }


        Converter()
    }


    function selectChangeTwo() {

        const flag = document.querySelector(".usa")
        const money = document.querySelector(".dolar")

        if (selectTwo.value == "Real") {

            flag.src = "./assets/brasil.png"
            money.innerHTML = "Real brasileiro"
        }

        if (selectTwo.value == "Dolar") {

            flag.src = "./assets/usa.png"
            money.innerHTML = "Dólar Americano"
        }

        if (selectTwo.value == "Euro") {

            flag.src = "./assets/euro.png"
            money.innerHTML = "Euro"
        }

         if (selectTwo.value == "Libra") {

            flag.src = "./assets/libra.png"
            money.innerHTML = "Libra"
        }

         if (selectTwo.value == "Bitcoin") {

            flag.src = "./assets/bitcoin.png"
            money.innerHTML = "Bitcoin"
        }


        Converter()
    }

    

    selectOne.addEventListener("change", selectChangeOne)
    selectTwo.addEventListener("change", selectChangeTwo)
    convertButton.addEventListener("click", Converter)
