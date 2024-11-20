/*
Per svolgere questo Avremo bisogno di conoscere alcuni concetti spiegati in precedenza
1 Importazione di un modulo il modulo prompt-sync che ricordo che dobbiamo installare nella
nostra cartella di lavoro
2 applicare una forumla molto semplice per calcolare i litri di benzina
importo diviso costoBenzinaallitro
3 Uilizzare il metodo toFixed per evitare di avere un numero di ritorno con troppe cifre decimali
per fare questo esercizio abbiamo bisogno del modulo prompt
quindi la prima cosa da fare è assegnare ad una variabile prompt il modulo inizializzato prompt-sync
Come secondo passaggio andiamo a definire una costante con il prezzo della benzina al litro
Dunque andiamo ad assegnare ad una varaibile importo il risultato del prompt
ora non ci rimane che calcolare i litri di benzina immessa dividendo l'importo per il prezzo della benzina
Infine stampiamo il risultato
Per stampare la variabile litri utilizziamo il toFixed per ottenere la cifra con i soli due primi numeri decimali
lo facciamo per evitare di avere un numero inutilmente lungo



*/

let prompt = require("prompt-sync")()

const prezzoBenz = 1.74

let importo = prompt("Quanto denaro vuoi inserire : ")

let litri = importo/prezzoBenz

console.log("Sto erogando "  + litri.toFixed(2) +  " litri")