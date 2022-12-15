const entrada = require("prompt-sync")({sigint:true});

//Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo. 

console.log("QUadrado da diferença ");

var a,b;

a = parseFloat(entrada("Indique o valor do primeiro valor: "));
b = parseFloat(entrada("Indique o segundo valor: "));

console.log(Math.pow((a-b),2));




