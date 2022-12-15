const entrada = require("prompt-sync")({sigint:true});

// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana. 

var dolar, real, cond;

var cotacaoVariavel;
var cotacaoPadrao = 5.15;
real  = entrada("Indique quantos dolares voce possui: ");

cond = entrada("Voce deseja usar a cotação padrao de R$5,15? sim ou nao -- ");

    if(cond == "sim"){
        dolar  = real / cotacaoPadrao;
        console.log("Aqui esta o montante de dolar: " , dolar.toFixed(2));
    }else {
        cotacaoVariavel = parseFloat(entrada("Indique a cotação que voce deseja simular R$ "));
        dolar = real / cotacaoVariavel;
        console.log("Aqui esta o montante de dolar: " , dolar.toFixed(2));
    }

