/*
Con node js è possibile costruire delle vere e proprie applicazioni web.
Queste app molto spesso utilizzano per la comunicazione tra client (il browser) e il server 
un protocollo chiamato http.
HTTP è un protocollo basato su richieste e risposte. Questo significa che:

Il client (ad esempio, un browser web o un'applicazione frontend) invia una richiesta HTTP al server.
Il server riceve la richiesta, elabora l'operazione richiesta e invia una risposta HTTP, che spesso include dati o 
contenuti da visualizzare.
Quindi in questo tipo di comunicazione sono molto importanti due tipi di oggetti che in lingua ingelse
chiamiamo la request e la response
Richiesta HTTP
Quando un utente interagisce con un'applicazione web (cliccando su un link, inviando un modulo, 
o accedendo a un'API), il client invia una richiesta HTTP contenente:

Metodo HTTP: Specifica l'azione desiderata (ad esempio, GET, POST, PUT, DELETE).
URL: Indica l'indirizzo della risorsa richiesta.
Intestazioni (Headers): Contengono informazioni aggiuntive come il tipo di contenuto o le credenziali.
Dati (Payload): Facoltativo, ma necessario per operazioni come l'invio di un modulo (POST).

Il modulo http di node ci consente di gestire il routing di una applicazione web attraverso la creazione di un web server
Il routing è un sistema di gestione con cui andiamo a indirizzare le richieste al nostro server verso le risposte
che vogliamo far ottenere
Per questo primo programma utilizzeremo anche un altro modulo chiamato fs
Questo modulo ci fornisce un set di comandi per interagire con il file system del computer.
 Consente di leggere, scrivere, modificare, eliminare file 
e directory, e altre operazioni simili. 
È uno dei moduli core di Node.js, quindi non richiede installazione aggiuntiva.
Perchè ci servirà fs?
Perchè nelle risposte che invieremo al client dalle nostre applicazioni vogliamo passare file html 
(questa è pratica comune, e vogliamo adottarla anche per le nostre applicazioni)
1 Innanzitutto andiamo a importare i moduli che ci serviranno: fs e http
2 L'oggetto http ha una funzione chiamata createServer che serve a creare appunto un server per la nostra applicazione
3 Questa funzione è una funzione cosiddetta di callback accetta cioè come parametro un'altra funzione
4 La funzione di call back (che può restare anonima) prende due prametri la request cioè la richiesta che viene
inviata dal browser e la response, la risposta (l'output) che il server invierà al browser, tipicamente una pagina html
5 la funzione create server ha a sua volta una sotto funzione chiamata listen che prende come parametro il numero
della porta dove l'applicazione sarà in ascolto
6 All'interno della funzione andiamo quindi a strutturare il routing dell'applicazione:
Andiamo cioè a definire le rotte e i metodi delle richieste e le relative risposte
7 Gli oggetti req hanno delle proprietà url e method che possiamo controllare attraverso dei blocchi 
condizionali nei quali facciamo partire le risposte
8 La response a sua volta può essere definita attraverso il metodo end a cui possiamo passare un file html
9 Il file html lo passiamo chiamando sull'oggetto fs  il metodo readFileSync e passando il nome del file come parametro
e chiamando poi il metodo toString()
Facciamo la stessa operazione sia per una chiamata a "/" cioè all'indirizzo dell'applicazione senza nomi
nella cui risposta invieremo un file di nome file.html
sia all'indirizzo contact a cui andremo ad assegnare un file di nome contact.html





*/
   
const fs = require('fs');
    
    
    
        
var http = require('http');
http.createServer(function (req, res) {
  
    if (req.url == "/" && req.method == "GET"){
    let home = fs.readFileSync('file.html').toString();
    
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end(home);}
  else if (req.url == "/contatti") {
    let c1 = fs.readFileSync('contact.html').toString();
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.end(c1);


  }
}).listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});