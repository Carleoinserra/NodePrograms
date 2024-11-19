/* 
Obiettivo: Utilizzare un prompt da terminale nelle nostre applicazione
Questo è il primo esempio di programma in cui andremo a installare un modulo esterno
Dobbiamo immaginare un modulo come una funzione o un oggetto che può essere riutilizzato in un programma che ne fa richiesta
Node.js fornisce delle librerie native, ma per alcune funzionalità (come i prompt) dobbiamo importare librerie esterne.
motivo per cui dobbiamo installare il modulo prompt-sync
installiamo il modulo prompt-sync direttamente da terminale
npm install prompt-sync

// creiamo una variabile prompt importando il modulo prompt-sync e inizializzandolo
// quelle parentesi che vedete dopo l'importazione del modulo vogliono dire che stiamo inzializzando una funzione
/*
In JavaScript (e Node.js), la necessità di inizializzare un modulo dipende da come 
è strutturato e dal comportamento che fornisce.
Di solito è necessario guardare la documentazione della libreria per capire come importare l'oggetto o la funzione e se queste
richiedono l'inizializzazione

// dunque importiamo un prompt-sync e lo assegniamo a prompt
Il prompt sarà del tutto simile ad un programma javascript destinato alla console del browser
l'unica differenza sarà che in questo caso il prompt va utilizzato nel terminale
Dunque assegniamo alla variabile nome il prompt
e andiamo a stampre il nostro nome concatenato ad una stringa

*/
let prompt = require("prompt-sync")()

let nome = prompt("Inserisci il tuo nome: ")

console.log("Benvenuto al corso nodejs " + nome)