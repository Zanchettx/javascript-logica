const entrada = require("prompt-sync")({sigint:true});

// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira. 


console.log("Casa de cambio");

var dolar, real, cond;

var cotacaoVariavel;
var cotacaoPadrao = 5.15;
dolar = entrada("Indique quantos dolares voce possui: ");

cond = entrada("Voce deseja usar a cotação padrao de R$5,15? sim ou nao -- ");

    if(cond == "sim"){
        real = dolar * cotacaoPadrao;
        console.log("Aqui esta o montante de reais: " , real);
    }else {
        cotacaoVariavel = parseFloat(entrada("Indique a cotação que voce deseja simular R$ "));
        real = dolar * cotacaoVariavel;
        console.log("Aqui esta o montante de reais: " , real);
    }

