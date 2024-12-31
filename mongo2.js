/* In questa lezione vedrai come operare su una collezione di mongodb
In particolare vedrai come aggiungere uno o più documenti tramite i metodi insert e insertMany
come ricercare un documento attreaverso il metodo find
come aggiornare un documento mediante il metodo update
come cancellare un documento tramite il metodo find
Dopo aver importato il mongoClient
imposto l'url di connessione puntando al database che avevo creato precedentemente di nome autosalone
creo la funzione asincrona run e aggiungo il costrutto try catch
Il primo metodo che vedrai utilizzato per inserire un documento è il metodo insertOne che va aggiungere
un documento su una collezione speicifica
faccio l'accesso al database
creo il documento, un oggetto json con tre proprietà: modello, marca e prezzo
inserisco il documento chiamando sulla connessione la collezione auto
e il metodo insertOne e passando come argomento l'oggetto
assegno l'operazione a una variabile result e gli faccio stampare
l'id del documento inserito




*/


const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/autosalone";

async function run() {
  let client;

  try {
    client = await MongoClient.connect(url);

    // Accesso al database
    const db = client.db("autosalone");

    var myobj = { modello: "Captur", marca: "Renault", prezzo: 19000 };
    const result = await db.collection("auto").insertOne(myobj);
    console.log("1 document inserted", result.insertedId);

  } catch (err) {
    console.error("Errore nella connessione al database:", err);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

run();
