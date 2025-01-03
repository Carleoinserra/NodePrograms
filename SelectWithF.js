/* In questa lezione vedrai come utilizzare il metodo find per ricercare uno o più documenti da una collezione
Nel primo esempio ti mostrerò come selezionare tutti i documenti di una collezione
tramite il metodo find() semplice, senza l'aggiunta di filtri
Il metodo finda chiamato sulla collezione ritorna un oggetto particolare chiamato cursore
Il cursore è un oggetto che può essere iterato attraverso vari metodi
per consentire l’accesso ai dati presenti nel documento
In questo esempio vedrai come iterare il cursore con un ciclo while tramite il metodo hasNext
la sintassi è while cursor.HasNext()
cursor.next
In pratica sto dicendo fino a quando il cursore contiene elementi
accedi all'elemento e passa al successivo
In questo esempio andrò a stampare tutti i documenti
Nel secondo esempio voglio mostrarti come iterare il cursore con un cilo for
E' un praticolare ciclo for grazie al quale andrò a iterare ogni documento presente nel cursore con for let d1 of cursor
e andrò a stampare solo il modello delle auto presenti







*/

  const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/autosalone";

async function run() {
  let client;

  try {
    client = await MongoClient.connect(url);

    // Accesso al database
    const db = client.db("autosalone");
    let nome = "Apple"
    let cursor = db.collection('auto').find()
   /* const cursor = db.collection('mycollection').find({

        name: nome
    });*/

    while (await cursor.hasNext()) {
        console.log(await cursor.next());
      }
      const cursor1 = db.collection('auto').find();

    
      for await(let d1 of cursor1){
console.log(d1.modello)
      }

     
    
    
     

  } catch (err) {
    console.error("Errore nella connessione al database:", err);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

run();