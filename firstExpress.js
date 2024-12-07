/*
Abbiamo visto come creare una applicazione web bansandoti unicamente sul modulo http e il modulo fs per inviare file al client
Molto spesso tuttavia creare applicazioni web in questa maniera potrebbe portare a scrivere codici particolarmente lunghi
Per questo (e non solo) l'ambiente di node ti fornisce un framework leggero e efficace di nome express
Tu saprai sicuramente cosa è un framework perchè hai già conosciuto React
Un framework è una struttura software predefinita che fornisce strumenti,
 librerie, e regole per sviluppare applicazioni in modo più efficiente, organizzato e standardizzato.
  È una sorta di "scheletro" su cui costruire il tuo progetto, facilitando il lavoro degli sviluppatori 
  fornendo soluzioni pronte per attività comuni.
Ci sono dei vantaggi per cui dovresti utilizzare express:
le librerie che fornisce, il routing semplificato ,  il sistema di templating, e non ultimo
perchè ti permette di risparmiare molto tempo e di ridurre il codice
Dicevo che che uno dei punti di forza di express è il sistema di templating, come cioè i dati vengono trasmessi
dal backend ai file html e viceversa
Per ottenere questo sistema di passaggio dei dati express utilizza un pattern di programmazione molto comune chiamato
MVC
Mvc divide le responsabilità dell'applicazione in 
Model (la logica dell'applicazione quindi tutti i dati in node)
View (i file html collegati alla logica)
Controller (il sistema di gestione di indirizzamento delle url)
Per quanto riguarda il motore di templating in questo corso utilizzerò pug
QUindi i file html che scriverò utilizzeranno pug per ottenere le varibili node
Per quanto riguarda il controller come puoi vedere express semplifica molto il sistema di gestione
delle rotte, in quanto possiamo chiamare sulla app express di volta in volta il metodo get o post e passargli
come argomento la url collegata
Per quanto riguarla la view è necessario in express creare una cartella di nome "views" tutto minuscolo con la s finale
dove andremo a inserire i nostri file pug
Per far partire l'app è inoltre necessario indicare la porta in cui l'applicazione si metterà in ascolto
per fare questa cosa è necessario utilizzare il metodo listen sulla app e passare come parametro il numero della porta




*/


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
