/*
In questa lezione vedrai i metodi di node per aggiornare o cancellare un documento di mongo
Con il metodo updateOne andrai a cambiare (aggiornare) una o più proprietà di un determinato elemento
a partire da una chiave e dal suo valore
Anche updateOne possiede il suo omologo UpdateMany, seguendo la stessa logica che hai visto
per insert e insertOne
Per utilizzare il metodo updateOne devo prima creare una query con la chiave e il valore del documento di 
cui voglio cambiare una determinata proprietà
Successivamente creo una variabile update con proprietà e il valore che voglio cambiare di quella proprietà
Lo faccio utilizzando l'operatore $set messo a disposizione da mongodb per settare certi valori
quindi, chiamo sul db e sulla specifica collezione il metodo updateOne a cui passo come argomenti
la query e la variabile update precedentemente creata
assegno il risultato dell'operazione ad una variabile
e stampo il numero di documenti cambiati dal metodo update
Il risultato sarà la stampa del numero dei documenti cambiati



*/

const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017/autosalone"

async function run() {
  let client;

  try {
    client = await MongoClient.connect(url)
    // Accesso al database
    const db = client.db("autosalone")

    const query = { modello: "Panda" }
const update = { $set: { prezzo: 17000 }}


let result =await db.collection('auto').updateOne(query,  update)
console.log( result.modifiedCount + " documento cambiato")

    
   

   
    
     

  } catch (err) {
    console.error("Errore nella connessione al database:", err)
  } 
  }


run();