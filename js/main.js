var nome = "Marcello Albuquerque";
var idade = 32;
var frase = "O Japão é o melhor time do mundo";
/*
alert(nome + " tem " + idade + " anos");
*/
console.log(nome);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
console.log(lista);
lista.pop();

console.log(lista);
console.log(lista[1]);

console.log(lista.length);

console.log(lista.reverse());

console.log(lista.toString());

console.log(lista.join(" - "));

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome)

//var idade = 18; 
//var idade = prompt("Qual sua idade");
if(idade >= 18)
{
    console.log("Maior de idade");
}
else
{
    console.log("Menor de idade");
}

var count = 0;
while (count <= 2)
{
    console.log(count);
    count++;
};

var count;

for (count = 0; count <= 5; count++)
{
    console.log(count);
}








