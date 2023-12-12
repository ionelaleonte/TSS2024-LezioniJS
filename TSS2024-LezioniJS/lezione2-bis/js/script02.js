let primoNum = Number( window.prompt("Inserisci il primo numero") );
let secondoNum = Number( window.prompt("inserisci il secondo numero"));

let somma = primoNum + secondoNum;
let prodotto = primoNum * secondoNum; 
let quoziente = primoNum / secondoNum;
let differenza = primoNum - secondoNum;

console.log("il valore della somma e': " + somma ); 
console.log("il prodotto e': " +  prodotto);

//voglio stampare qsti risultati nella pagina
//1.recupero l elemento nel quale stampare
let elRisultati = document.getElementById("risultati");

let risultati = "Somma: " + somma + "<br>";

//inietto la stringa dei risultati nell'elemento
elRisultati.innerHTML = risultati;

