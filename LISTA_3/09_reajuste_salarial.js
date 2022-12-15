const entrada = require("prompt-sync")({sigint:true});

//Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS). 

var salarioMensal, reajuste, novoSalario;

salarioMensal = parseFloat(entrada("Quanto voce ganha atualmente: "));
reajuste = parseInt(entrada("Indique o percentual de reajuste: "));

reajuste /= 100;

novoSalario = (salarioMensal + (salarioMensal * reajuste));

console.log("Seu novo salario vai ficar: " , novoSalario);


