/*
In questa lezione ti mostrerò come far interagire una applicazione node direttamente con 
l'istanza di mongodb che gira sulla nostra macchina
In particolare vedrai come creare un nuovo database e un nuovo documento
Per prima cosa avrai bisogno di installare la libreria di mongodb tramite npm nella cartella di lavoro
il comando è npm install npm install mongodb@6.12  con questo comando stai installando la versione più recente
Questo comando esegue le seguenti azioni:

Scarica il pacchetto mongodb e le dipendenze di cui ha bisogno.
Salva il pacchetto nella directory node_modules.
Registra le informazioni sulla dipendenza nel file package.json.

Una volta installato correttamente il driver di mongodb nella cartella di lavoro lo importo tramite il metodo require
importo da mongodb solo il modulo che ci serve cioè mongoClient 
per fare questo mettiamo mongoClient tra parentesi graffe
in questo caso sto dicendo che dalla libreria mongodb voglio estrarre solo MongoClient
A questo punto vado già a creare l'url di connessione all'instanza di mongodb
per fare questo è necessario inserire il nome mongodb seguito da due punti slash slah
l'indirizzo dell'istanza: localhost:27017 
il nome del database
quando inserisci il nome di una database se il database esiste ti connetti a quel database,
se non esiste lo crei
Una volta importato il mongo client e impostato l'url corretto
vado a creare una fuzione che si connetta a mongo db e crei una collezione nel db specificato
per fare è consigliato che faccia una funzione asincrona, e siccome la connessione a un db
è sempre una operazione delicata c'è bisogno che tutte le operazioni di interazioni del db vadano nel
costrutto try catch
La prima operazione da fare è effettuare la connessione a mongodb
come detto precedentemente se il database esiste ti connetterai a quel database
se non esiste mongo lo creerà per te
tutte le operazioni di interazione con il database le metteremo in un costrutto try catch
la seconda operazione che facciamo è la creazione della collezione
lo faccio chiamando sull'istanza della connessione db il metodo creeateCollection
a cui passo come argomento il nome della collezione che ho scelto
questa operazione ritorna un oggetto con la collezione
se tutto è andato a buon fine gli faccio stampare il nome della collezione appena creato chiamando
sull'oggetto collezione la proprietà collectionName
Infine invoco la funzione fuori dal corpo della funzione





*/

const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017/mydb"

async function run() {
    let client;
  
    try {
      client = await MongoClient.connect(url);
      console.log("Database creato!");
  
      // Accesso al database
      const db = client.db("mydb");
  
      // Creazione di una collezione
      const result = await db.createCollection("mycollection2");
      console.log("Collezione creata!", result.collectionName);
    } catch (err) {
      console.error("Errore nella connessione al database:", err);
    }}

    run()