/* 
L'architettura di node si dice modulare perchè ha alla base l'utilizzo dei moduli.
Un modulo è un'unità di codice riutilizzabile.
In un modulo posssiamo descrivere variabili o funzioni
Questo ci consente di seprare il codice in file separati da riutilizzare dove ne abbiamo bisogno
I moduli possono essere nativi come os, http, path, fs.
Quando i moduli sono nativi non hanno bisogno di essere installati
oppure possono essere di terze parti: e in questo caso vanno installati
sono esempi di questo tipo i moduli del prompt-sync, exrpress e mongo che vedremo
Infine, un modulo può essere anche personalizzato, xioè possiamo scrivere noi delle funzioni o variabili 
e esportarle per poterle utilizzare in un altro file
In questo secondo programma proveremo  creare noi stessi un modulo e a esportarlo
per poi utilizzare lo stesso all'inerno di un altro programma

Per fare questa operazione la sintassi è: module.exrports

*/

function HelloWorld(){
    console.log("hello world");
}



// esportiamo il modulo per utilizzarlo in altri programma

module.exports = {HelloWorld};
