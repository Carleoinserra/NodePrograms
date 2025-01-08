/*
In questa lezione vedrai come ottenere tutti i dati della collezione auto
passarli al template pug e stamparli in formato tabella
La prima cosa da fare sono le importazioni
Oltre alle importazioni di mongodb e di express
e il settaggio di pug come motore di template
ti ricordo che devi settare la cartella views come appunto repository dei tuoi template

Per questo esercizio ti conviene costruire un oggetto javascript di nome auto
che abbia come prorpeità le chiavi della collezione auto di mongodb
lo faccio tramite costruttore richiedendo appunto modello marca e prezzo
andandole a costruire nella funzione speciale
Creo quindi una rotta che restituisca il templare table.pug

Ora vado a creare una funzione asincrona che tramite il metodo find ottenga
un cursore con tutti i record della collezione auto
Quindi dichiaro una lista vuota dove andrò ad aggiungere durante l'iterazione del cursore
degli oggetti di tipo auto instanziati con i dati della collezione
Una volta riempita la lista la faccio ritornare con return nel corpo del metodo

ritornando alla rotta dell'applicazione express
otengo i dati della collezione invocando il metodo getLista
questo è possibile proprio grazie al fatto che la funzione ritorna un valore
quindi l'assegno ad una variabile lista
Siccome getLista è un funzione asincrona anche la funzione anonima sarà asincrona
e l'invocazione della funzione va fatta con la parola chiave await

a questo punto possiamo implementare il response della funzione passando come primo argomento 
il templare table.pug e come secondo argomento la lista


Nel template table voglio redenderizzare la lista come tabella
per fare questo importo lo style e lo script di materialize
all'interno del div container
creo una table con dentro un tr per le intestazioni
con 3 intestazioni tr (modello, marca e prezzo)

con each vado a iterare la lista che ho passato al template
e per ogni elemento creo una riga tr
con all'interno 3 celle una per ogni proprietà dell'oggetto auto
e assegno alla cella il testo di c1.modello c1.marca e c1.marca






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

class auto{

    constructor(modello, marca, prezzo) {
        this.modello = modello
        this.marca = marca
        this.prezzo = prezzo
    }


}

app.get('/', async function (req, res) {

    let lista = await getAuto()
    console.log(lista)
    

res.render('table', {lista: lista})
    

  })

async function getAuto(){
    let client;

    try {
      client = await MongoClient.connect(url);
  
      // Accesso al database
      const db = client.db("autosalone");
  
      
      const cursor = await db.collection("auto").find();
      let lista = []
      for await (let car of cursor) {

        let a1 = new auto(car.modello, car.marca, car.prezzo)
        lista.push(a1)
    }

    return lista

     // return await cursor


  
    } catch (err) {
      console.error("Errore nella connessione al database:", err);
    } 
    }



app.listen(3000)




