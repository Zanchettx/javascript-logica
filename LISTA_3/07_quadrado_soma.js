const entrada = require("prompt-sync")({sigint:true});


//Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos. 

var a,b,c;

a = parseFloat(entrada("Digite o valor A: "));
b = parseFloat(entrada("Digite o valor B: "));
c = parseFloat(entrada("Digite o valor C: "));

var soma = (a+b+c);

console.log("O quadrado da soma dos valores é: " , Math.pow(soma,2));

