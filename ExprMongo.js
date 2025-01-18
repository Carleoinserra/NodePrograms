/*
Salve, se arrivato all'ultima parte di questo perscorso in Node, express e mongodb
In questa ultima lezione vedrai come creare una applicazione simil e-commerce che utilizzi
tutte e tre queste tecnologie
Per il template utilizzarò sempre pug
L'applicazione rappresenta la gestione e la vendita di personal computer
quindi sarà suddivisa in due parti 
la parte lato gestore è rappresentata da un form dove è possibile aggiungere un nuovo pc alla tabella
la parte utente è rappresentata da uno store sviluppato come una tabella che visualizza
tutti i prodotti e nella quale è possibile selezionare uno o più prodotti e acquistarli
il programma restiuirà dopo l'acquisto un recap con i prodotti acquistati e la somma totale da pagare
chiaramente l'applicazione si appoggerà ad una collezione mongodb in cui ogni documento
è formato da un pc con propreità 
nome, marca, descrizione, un url che rappresenta l'immagine del pc e il prezzo
e definirà rotte http definite tramite express

Innanzitutto avrai bisogno di fare le giuste importazioni e settaggi
Avrai bisogno di MongoClient
di scrivere l'url corretta di connessione al db mongodb
di importare express e di inizializzarlo
Poi di settare la cartella delle views con il giusto percorso
Infine siccome la parte gestore prevede l'utilizzo di un form
dovrai usare il middleware express url encoded per ottenere i dati del form
direttamente nel corpo del body della request

Per prima cosa andrò a creare la parte gestore
Per fare questo definisco una rotta che ritorni un form tramite file pug
Lo faccio chiamando sul response il metodo render, e passandogli un file di nome formPc
questo utilizzerà materialize per la formattazione
e definisce un form con action a submit e metodo post
all'interno del form inserisco tanti input quante sono le proprietà del documento nella collezione
tabellaPc: nome, marca, descrizione, url, prezzo
Per controllare che tutto funzioni
vado a inserire un nuovo pc nel form e vado a visualizzarlo nella collezione mongodb

A questo punto creo anche un oggetto javascript che ricalchi 
il tipo di documento di tabellapc
Nel costruttore vado a definire le proprietà e le instanzio con i dati presi da parametro

Quindi mi creo una funzione select in cui andrò a recuperare tutti i documenti presenti
nella collezione TabellaPc
lo faccio, dopo ave fatto l'accesso al db
chiamando dul db il metodo find() da cui ottengo il cursore
nell'iterazione del cursore andrò quindi a popolare la lista
istanziando di volta in volta un oggetto di tipo pc e aggiungendolo alla lista
Dopo aver fatto questa operazione faccio ritornare al metodo la lista popolata con gli oggetti

Sono pronto quindi a creare la parte utente, che sarà uno store contenente
tutti i pc presenti nella collezione TabellaPc che possono essere selezionati e acquistati


Creo quindi una rotta, alla radice, cioè senza nomi dopo lo slash
la funzione sarà asincrona perchè invocheremo la funzione asincrona select
per ottenere la lista popolata da passare al template
per fare questo chiamo sulla response il metodo render e gli passo come primo argomento
il template pug store e come secondo la lista
che restituisca lo store, questo altro non sarà che una tabella con tutti i pc 
presenti nella collezione tabellaPc
tuttavia nella tabella sarà presente una colonna con un campo di input numerico per selezionare
uno o più pezzi di quel pc
Quindi la tabella è in realtà un form con una sua rotta e un suo pulsante per l'invio dei dati

Ti mostro quindi come creare il template store
anche in questo caso utilizzaremo materialize per il rendering
creiamo all'interno del div container nel body un form
assegniamo al form un metodo e un action
questo form contiene una table che andiamo a costruire
con una riga tr che abbia tante colonne quante sono le proprietà
più una con titolo seleziona che ci servirà per inserire il campo di input
quindi vado a definire le varie righe
con la direttiva each di pug gli dico che per ogni elemento all'interno della lista
deve farmi una riga tr
e ogni riga contiene
una cella con il nome, una con la marca, una con la descrizioe e una con il prezzo
le ultime due celle contengono
la prima il tag img di cui vado a settare l'src con c1.url
la seconda il tag input in cui vado a settare il type il nome e imposto il valore di default a zero
Infine, inserisco un pulsante di type submit per inviare i dati

Ora non mi rimane che creare una rotta nell'applicazione per gestire il form
e restiutuire una pagina di recap con i dati dei prodotti acquistati dall'utente
quindi descrivo la rotta con il metod post e la funzione anonima
Innanzitutto vado a recuperare dal body l'array con i numeri dei prodotti acquistati
Quindi mi creo due liste vuote
una mi servirà a riempire il numero pdei prodotti acquistati di un dato prodotto
un'altra mi servirà a inserire i prodotti veri e propri
Inoltre mi creo una variabile somma uguale a zero
Ora scriverò un algoritmo che recuperi i dati dei prodotti acquistati
lo faccio sfruttando una cosa:
l'array con i numeri dei prodotti acquistati e la lista di prodotti hanno lo stesso indice
Quindi itero la lista e dico che per ogni elemento della lista
se la lista dei prodotti acquistati nella stessa posizione è diverso da da zero
allora lo aggiungo alla lista dei prodotti acquistati
e alla lista dei numeri dei prodotti acquistati
vado a incrementare la variabile somma del prezzo del prodotto per il numero dei prodotti acqusitati

A questo punto non mi rimane che settare il response con render e passargli come primo argomento
il template recap e come secondo argomento la lista di prodotti acquistati, la lista
dei numeri di prodotti acquistati e infine la somma

Dunque vado a impostare anche il recap che sarà una tabella con tutti i dati di acquisto
e la somma da pagare stampata sotto

Creiamo una tabella che abbia una riga con le colonne dell'intestazione
una per il nome, una per la marca, una per la descrizione, una per il prexzo, una per l'immagine
e una per i pezzo acquistati
Ora, siccome dobbiamo iterare due liste una con i prodotti e un'altra con i pezzi
con una direttiva di pug creiamo un each che iteri il prodotto c1 e un indice i sempre dentro lista
ti ricordo che entrambe le liste hanno lo stesso indice
quindi in ogni riga
stampiamo le propeità della lista dei prodotti
più il numero dei pezzi chiamando la listaPezzi[i] quindi con l'indice che abbiamo fatto iterare
Infine stampiamo la somma 

















*/



// creiamo un oggetto MongoClient richimamndolo dal modulo
const { MongoClient } = require('mongodb');
//impostaimo l'url di connessione al db sul server di mongo
const url = "mongodb://localhost:27017/mydb";
const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')
// Middleware per gestire i dati del form
app.use(express.urlencoded({ extended: true }));

class pc {

  constructor(nome, marca, descrizione, url, prezzo){

    this.nome = nome
    this.marca = marca
    this.descrizione = descrizione
    this.url = url
    this.prezzo = prezzo
  }
}


async function select() {
    let client;
    lista = []
    try {
      client = await MongoClient.connect(url);
  
      // Accesso al database
      const db = client.db("mydb");
  
      const cursor = db.collection('TabellaPc').find();
  
     for await (let pc1 of cursor){
      let p1 = new pc(pc1.nome, pc1.marca, pc1.descrizione, pc1.url, pc1.prezzo)
      lista.push(p1)
     }
      
      return lista
  
    } catch (err) {
      console.error("Errore nella connessione al database:", err);
    } finally {
      if (client) {
        await client.close();
      }
    }
   
  }
  
  

app.get('/', async function (req, res) {
  
  let lista = await select()

    


  
    res.render('stampa', { lista: lista});
  });

  app.get('/form', function (req, res) {
    res.render('formPc');
  });

  app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

app.post("/buy", function(req, res){
  let num = req.body.num
  listaAcquisti = []
  listaPezzi = []
  somma = 0
  for (let i = 0; i < lista.length; i++) {
    if (num[i] != 0) {
    //console.log("Hai acquistato" + lista[i].nome)
    //console.log("In " + num[i] + "pezzi")
    listaAcquisti.push(lista[i])
    listaPezzi.push(num[i])
    somma += lista[i].prezzo * num[i]
  }}
  res.render('recap', { lista: listaAcquisti, listaN: listaPezzi, somma: somma }); 
  })

app.post("/submit", function (req, res) {
    
  let nome = req.body.nome
  let marca = req.body.marca
  let descr = req.body.descrizione
  let urlImg = req.body.url
  let prezzo = parseInt(req.body.prezzo)
  async function insert() {
    let client;
  
    try {
      client = await MongoClient.connect(url);
  
      // Accesso al database
      const db = client.db("mydb");
  
      var pc = { nome: nome, marca: marca, descrizione: descr, url: urlImg, prezzo: prezzo };
      const result = await db.collection("TabellaPc").insertOne(pc);
      console.log("1 document inserted", result.insertedId);
  
    } catch (err) {
      console.error("Errore nella connessione al database:", err);
    } finally {
      if (client) {
        await client.close();
      }
    }
  }
  
   insert();

  
  
  res.send("Pc aggiunto con successo")

})

