

const botaoDeConversao = document.querySelector(".convert-button");    //Botão para converter

const imagem1 = document.querySelector("#currency-img1");    //imagem da moeda  1
const imagem2 = document.querySelector(".currency-img2");    //imagem da moeda  2

const textoMoedasAConverter = document.querySelector(".currency-value-to-convert") // Valor em real
const textoMoedasConvertidas = document.querySelector(".currency-value") // Outras moedas

const textoSegundaMoeda = document.querySelector(".currency-moeda")//alterar o texto do tipo da moeda no resultado
const textoPrimeiraMoeda = document.querySelector(".currency-moeda1")//alterar o texto do tipo da moeda 

const primeiraMoeda = document.querySelector(".currency-select-to")//Pegar a moeda a ser convertida
const segundaMoeda = document.querySelector(".currency-select"); //Moeda que foi selecionada






async function convertValue() {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    let realHoje = 1
    let dolarHoje = data.USDBRL.high
    let euroHoje = data.EURBRL.high
    let libraHoje = data.GBPBRL.high
    let bitcoinHoje = data.BTCBRL.high

    const intValor = document.getElementById("valor-digitado").value; //valor digitado pelo usuario

    if (primeiraMoeda.value == "real") {
        textoMoedasAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(intValor)

        if (segundaMoeda.value == "dolar") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(intValor / dolarHoje)
        }//Formatação da moeda em Euro

        else if (segundaMoeda.value == "euro") {

            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-ES", {
                style: "currency",
                currency: "EUR"
            }).format(intValor)

            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-ES", {
                style: "currency",
                currency: "EUR"
            }).format(intValor / euroHoje)

        }//Formatação da moeda em Libra 
        else if (segundaMoeda.value == "libra") {

            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-LE", {
                style: "currency",
                currency: "GBP"
            }).format(intValor / libraHoje)

        } //Formatação da moeda em Bitcoin
        else if (segundaMoeda.value == "bitcoin") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(intValor / bitcoinHoje)
        } else {
            alert("Erro: Moeda de destino não suportada!");
        }




    } //Conversão com o dolar
    else if (primeiraMoeda.value == "dolar") {

        textoMoedasAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(intValor)

        if (segundaMoeda.value == "real") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(intValor * (dolarHoje / realHoje)) //Formatação da moeda real brasileiro

        } else //Formatação da moeda em Euro
            if (segundaMoeda.value == "euro") {
                textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-ES", {
                    style: "currency",
                    currency: "EUR"
                }).format(intValor * (dolarHoje / euroHoje))

            } else //Formatação da moeda em Libra
                if (segundaMoeda.value == "libra") {
                    textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-LE", {
                        style: "currency",
                        currency: "GBP"
                    }).format(intValor * (dolarHoje / libraHoje))
                } else //Formatação da moeda em Bitcoin
                    if (segundaMoeda.value == "bitcoin") {
                        textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "BTC"
                        }).format(intValor * (dolarHoje / bitcoinHoje))
                    } else {
                        alert("Erro: Moeda de destino não suportada!");
                    }
    } //Conversão com o Euro
    else if (primeiraMoeda.value == "euro") {

        textoMoedasAConverter.innerHTML = new Intl.NumberFormat("en-ES", {
            style: "currency",
            currency: "EUR"
        }).format(intValor)

        if (segundaMoeda.value == "real") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(intValor * (euroHoje / realHoje)) //Formatação da moeda real brasileiro

        } else if (segundaMoeda.value == "dolar") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(intValor * (euroHoje / dolarHoje))

        }//Formatação da moeda em Libra
        else if (segundaMoeda.value == "libra") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-LE", {
                style: "currency",
                currency: "GBP"
            }).format(intValor * (euroHoje / libraHoje))
        } else //Formatação da moeda em Bitcoin
            if (segundaMoeda.value == "bitcoin") {
                textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC"
                }).format(intValor * (euroHoje / bitcoinHoje))
            } else {
                alert("Erro: Moeda de destino não suportada");
            }
    } //Conversão com o Libra
    else if (primeiraMoeda.value == "libra") {

        textoMoedasAConverter.innerHTML = new Intl.NumberFormat("en-LE", {
            style: "currency",
            currency: "GBP"
        }).format(intValor)

        if (segundaMoeda.value == "real") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(intValor * (libraHoje / realHoje)) //Formatação da moeda real brasileiro

        } if (segundaMoeda.value == "dolar") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(intValor * (libraHoje / dolarHoje))

        } else //Formatação da moeda em Libra
            if (segundaMoeda.value == "euro") {
                textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-ES", {
                    style: "currency",
                    currency: "EUR"
                }).format(intValor * (libraHoje / euroHoje))
            } else //Formatação da moeda em Bitcoin
                if (segundaMoeda.value == "bitcoin") {
                    textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "BTC"
                    }).format(intValor * (libraHoje / bitcoinHoje))
                } else {
                    alert("Erro: Moeda de destino não suportada000");
                }
    } //Conversão com o Bitcoin
    else if (primeiraMoeda.value == "bitcoin") {

        textoMoedasAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(intValor)

        if (segundaMoeda.value == "real") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(intValor * (bitcoinHoje / realHoje)) //Formatação da moeda real brasileiro

        } else if (segundaMoeda.value == "dolar") {
            textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(intValor * (bitcoinHoje / dolarHoje))

        } else //Formatação da moeda em Libra
            if (segundaMoeda.value == "euro") {
                textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-ES", {
                    style: "currency",
                    currency: "EUR"
                }).format(intValor * (bitcoinHoje / euroHoje))
            } else //Formatação da moeda em Bitcoin
                if (segundaMoeda.value == "libra") {
                    textoMoedasConvertidas.innerHTML = new Intl.NumberFormat("en-LE", {
                        style: "currency",
                        currency: "GBP"
                    }).format(intValor * (bitcoinHoje / libraHoje))

                } else {
                    alert("Erro: Moeda de destino não suportada");
                }
    } else {
        alert("Erro: Moeda de destino não suportada");
    }

    //Formatação da moeda real brasileiro


}
botaoDeConversao.addEventListener("click", convertValue);



function atualizarIMG1() {

    if (primeiraMoeda.value == "euro") {
        textoPrimeiraMoeda.innerHTML = ("Euro")
        imagem1.src = "./assets/euro.png"
        textoMoedasAConverter.innerHTML = ("€ 0.0")
    }
    if (primeiraMoeda.value == "dolar") {
        textoPrimeiraMoeda.innerHTML = ("dolar")
        imagem1.src = "./assets/dolar.png"
        textoMoedasAConverter.innerHTML = ("US$ 0.0")


    }
    if (primeiraMoeda.value == "libra") {
        textoPrimeiraMoeda.innerHTML = ("Libra")
        imagem1.src = "./assets/libra.png"
        textoMoedasAConverter.innerHTML = ("£ 0.0")


    } else if (primeiraMoeda.value == "bitcoin") {
        textoPrimeiraMoeda.innerHTML = ("Bitcoin")
        imagem1.src = "./assets/bitcoin.png"
        textoMoedasAConverter.innerHTML = ("BTC 0.0")
    } else if (primeiraMoeda.value == "real") {
        textoPrimeiraMoeda.innerHTML = ("Real")
        imagem1.src = "./assets/real.png"
        textoMoedasAConverter.innerHTML = ("R$ 00,00")
    }


}


function atualizarIMG2() {
    
    if (segundaMoeda.value == "euro") {
        textoSegundaMoeda.innerHTML = ("Euro")
        imagem2.src = "./assets/euro.png"
        textoMoedasConvertidas.innerHTML = ("€ 0.0")
    }
    if (segundaMoeda.value == "dolar") {
        textoSegundaMoeda.innerHTML = ("dolar")
        imagem2.src = "./assets/dolar.png"
        textoMoedasConvertidas.innerHTML = ("US$ 0.0")


    }
    if (segundaMoeda.value == "libra") {
        textoSegundaMoeda.innerHTML = ("Libra")
        imagem2.src = "./assets/libra.png"
        textoMoedasConvertidas.innerHTML = ("£ 0.0")


    } else if (segundaMoeda.value == "bitcoin") {
        textoSegundaMoeda.innerHTML = ("Bitcoin")
        imagem2.src = "./assets/bitcoin.png"
        textoMoedasConvertidas.innerHTML = ("BTC 0.0")
    } else if (segundaMoeda.value == "real") {
        textoSegundaMoeda.innerHTML = ("Real")
        imagem2.src = "./assets/real.png"
        textoMoedasConvertidas.innerHTML = ("R$ 00,00")
    }


}

primeiraMoeda.addEventListener("change", atualizarIMG1) //toda vez que eu trocar de moeda atualiza as imagens

segundaMoeda.addEventListener("change", atualizarIMG2) //toda vez que eu trocar de moeda atualiza as imagens

window.addEventListener("load", function () {
    alert("Os valores das moedas são com base no dia 05/02/2024 às 19:15! Grato pelo entendimento, em breve APIs serão adicionadas ao projeto para a cotação em tempo real!");
});