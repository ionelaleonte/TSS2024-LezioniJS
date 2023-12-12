let nome = "Dario";
let cognome = "Mennillo";


// concatenare4 stringhe
let benvenuto = "benvenuto" + nome + " " + cognome; 

let num1 = 2;
let num2 = 7;

let valoreDellaSomma = num1 + num2;

let somma = "la somma vale: " + valoreDellaSomma;
let prodotto = "il prodotto vale: " + num1 * num2;
let differenza = "la differenza vale: " + (num1 - num2);

console.log(somma);
console.log(prodotto);
console.log(differenza);

let num3 = "9";
let num4 = "7";

//applico il CAST del dato
//let valoreDellaSomma2 = Number(num3) + Number(num4);
let valoreDellaSomma2 = parseInt(num3) + parseInt(num4);


let valoreDelProdotto2 = num3 * num4;
let valoreDelQuoziente2 = num3 / num4;


console.log("la somma vale: " + valoreDellaSomma2);
console.log("IL PORODTTO VALE: " + valoreDelProdotto2);
