const entrada = require('prompt-sync')({sigint:true});

// Efetuaro calculo e a apresentação  do valor de uma prestação em atraso, utilizando a formula PRESTAÇÃO = VALOR + (VALOR*TAXA/100) * TEMPO

var valorParcela,taxa,tempo,valorTotal,prestação = 0;

console.log("Calculador de prestação !!");

valorTotal = parseFloat(entrada("Qual o valor total do produto: "));
valorParcela = parseFloat(entrada("Qual o valor da parcela: "));
taxa = parseFloat(entrada("Qual a taxa aplicada a essas parcelas por mes: "));
tempo = parseFloat(entrada("Quantos meses voce dividiu: "));


for(var i = 0; i <= tempo; i++){
 
    taxa /= 100;

    prestação = valorParcela + (valorParcela * taxa)
 


}




