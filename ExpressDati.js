/*
Nel mio secondo esempio di renderizzazione dei dati con pug tramite express, andrò
a trasferire dei dati dal backend node al template fatto con pug
Anche in queso caso avrò bisogno di importare i moduli di express e pug
e di settare la cartella "views" come cartella predefinita per i file pug
e di settare pug come motore di templating per l'applicazione
ora andrò quindi a definire una rotta che chiamerò second passando come secondo parametro la funzione
anonima che ha come argomenti la request e la response

nel primo esempio andrò a passare al template pug chiamato second una variabile chiamata nome che ha 
come valore una stringa
dopo aver creato la rotta devo mettere l'applicazione in ascolto su una porta specifica
lo faccio chiamando sull'oggetto app il metodo listen
Nel pug dopo aver creato uno schema html semplice tramite indentazione
vado a creare un elmento h1, figlio di body 





*/

const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/second', function (req, res) {

    lista = []
    lista.push("blu")
    lista.push("giallo")
    lista.push("verde")
    res.render('second', { nome: 'Carlo', anni: 39, lista : lista});
  });

  app.listen(3000
);