/*
Per eliminare un documento dalla collezione avrai bisogno di un filtro o query
che specifichi quale documento vuoi che venga cancellato
in questo caso usiamo la proprietà modello per cancellarlo
Dopo ave definito il filtro, chiamo sulla collezione il metodo deleteOne e gli passo
come argomento il nome del modello del documento che voglio che sia cancellato
anche in questo caso assegno l'operazione a una variabile result
il result di una operazione di deleteOne ha la proprietà deleteCount che ritorna il numero dei documenti cancellati



*/


let {MongoClient} = require('mongodb')
let url = "mongodb://localhost:27017//autosalone"


async function run(){

    let client

    try {
        client = await MongoClient.connect(url)

        let db = client.db("autosalone")

        const filter = { modello: "Panda" }

        let result =  await  db.collection('auto').deleteOne(filter)


        


        console.log(  result.deletedCount+ " documento eliminato")





    }

    catch(err) {

        console.log("Errore nella connessione al database ", err)
    }
}

run()