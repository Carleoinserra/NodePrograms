/*
In questa lezione vedrai come creare una applicazione express che fornisce un form
per aggiungere un documento alla collezione auto
Per fare questa operazione avrai bisogno delle importazioni
di
1 mongoclient
2 express
3 del settagggio di pug come template e della cartella views
4 del middleware per ottenere i dati dal form direttamente nel body della request

A questo punto creo con express la prima rotta chiamando su app il metodo get
che restituisce la pagina con il form chimamando sulla response il metodo render e passando il nome
del file pug con il form 
Vado anche a mettere in ascolto l'applicazione sulla porta 3000

Per creare il form utilizzerò come detto pug
importando lo stile e lo script di materialize

Creo un titolo h1 (inserisci la tua auto)
Creo un form con un action a /submit e il metodo post
Inoltre creo tre campi di input con dei paragrafi sopra per impostare delle etichette
creo infine un button di tipo submit 

A questo punto creo la funzione che gestisce la rotta /submit definita nel form
vado quindi a chiamare il metodo post sull'app e definisco la funzione anonima req e la res
all'interno della funzione vado a recuperare il modello, la marca e il prezzo 
chiamando sulla request la proprietà body e il nome dell'input che ho definito nel pug

Ora l'obiettivo è però creare con i dati del form un nuovo documento da inserire
nella collezione auto del db autosalone
Per questo motivo mi creo la funzione asincrona  insert che abbia come parametri
proprio il modello, la marca e il prezzo
All'interno della funzione vado a creare un oggetto tipo json con i dati ottenuti come parametro
passo l'oggetto al metodo insertOne chiamato sulla collezione del db
stampo l'id del documento inserito

Una volta creata la funzione la vado a invocare nella rotta submit passando come parametri
i dati ottenuti dal form

Il risultato è l'inserimento nella collezione auto di un nuovo documento 
creato a partire dai dati ottenuti dal form


*/











// creiamo un oggetto MongoClient richimamndolo dal modulo
const { MongoClient } = require('mongodb');
//impostaimo l'url di connessione al db sul server di mongo
const url = "mongodb://localhost:27017/autosalone";
const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')
// Middleware per gestire i dati del form
app.use(express.urlencoded({ extended: true }));

app.get('/form', function (req, res) {
    res.render('formAuto');
  })

app.post('/submit', function(req, res) {

    let modello = req.body.modello
    let marca = req.body.marca
    let prezzo = req.body.prezzo

    insert(modello, marca, prezzo)

    res.send("Auto aggiunta con successo")

})

async function insert(modello, marca, prezzo) {
    let client;

    try {
      client = await MongoClient.connect(url);
  
      // Accesso al database
      const db = client.db("autosalone");
  
      var myobj = { modello: modello, marca: marca, prezzo: prezzo };
      const result = await db.collection("auto").insertOne(myobj);
      console.log("1 document inserted", result.insertedId);
  
    } catch (err) {
      console.error("Errore nella connessione al database:", err);
    } 
    }



app.listen(3000)