/*
Nella scorsa lezione hai visto come:
passare delle variabili semplici dall'applicazione al template pug tramite
il metodo render
passare un array e renderizzarlo nel pug con un foreach
In questa lezione vedi come passare dati da un form creato con pug 
all'applicazione gestendo l'action del form html 
Per ottenere i dati dal form all'applicazione devi utilizzare un middleware che ti consente
di ricevere i dati scritti dall'utente nel form nel corpo della richiesta
Un middleware in un'applicazione web, come in Express, è una funzione che si interpone
 tra la ricezione di una richiesta da parte del server e l'invio di una risposta al client.

Il middleware ha accesso a:

Oggetto richiesta (req): i dati inviati dal client.
Oggetto risposta (res): il canale per inviare i dati al client.
Quando invii un form HTML (ad esempio con method="POST"), 
i dati vengono codificati nel formato x-www-form-urlencoded e inviati al server nel corpo della richiesta.
express.urlencoded analizza questi dati e li trasforma in un oggetto 
JavaScript che puoi accedere tramite req.body

Per scrivere questa applicazione mi servirà una rotta che ritorni un form html
questo form sarà scritto in pug 
utilizzerò il framework materialize per rendere più gradevole la vista del form
tu se vuoi puoi utilizzare bootstrap o customizzare direttamente con un file css
Per prima cosa una volta creato lo scheletro di una pagina html vado a inserire
il file css di materialize
anche il file script di materialize
ti ricordo che in pug, tutte le propeità degli elementi html vanno scritti tra parentesi tonde
Dopo aver settato l'action del form lo vado a gestire nell'applicazione
creo una rotta di tipo post coincidente con la rotta definita nel form
vado a recuperare il nome direttamente dal body della req
con req.body.nome
nome se ricordi è il name dell'input del form
stampo il valore ottenuto in console










*/

const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')
// Middleware per gestire i dati del form
app.use(express.urlencoded({ extended: true }));








app.get('/form', function (req, res) {
    res.render('form1.html');
  });

  app.post("/submit", function (req, res) {
  let nome = req.body.nome

  console.log("Hai scritto " + nome)

})

app.listen(3000)