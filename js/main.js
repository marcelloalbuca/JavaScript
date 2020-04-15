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

var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getDay());
console.log(d.getHours());

function soma (n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade)
{   
    var validar;
    if (idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}
var idade = 19;
console.log(validaIdade(idade));

function clicando(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado!!</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado!");
}

function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado!";
    //document.getElementById("mousemove").innerHTML = "Obrigado!";
    //alert("trocar");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse!";
}

function load(){
    alert("Bem - Vindo!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
