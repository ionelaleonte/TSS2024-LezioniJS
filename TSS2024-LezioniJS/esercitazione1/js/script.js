let nome = ( window.prompt("Inserisci il tuo nome") );
let cognome = (window.prompt("inserisci il tuo cognome") );
let eta = Number(window.prompt("inserisci il tuo anno di nascita"));
 
let annoAttuale = "2023"; 

console.log("tu hai:" + (annoAttuale - eta));

let benvenutoUtente = document.getElementById("benvenuto");

let benvenuto ="ciao "+ nome + " " + cognome + " tu hai " + eta;
benvenutoUtente.innerHTML = benvenuto;