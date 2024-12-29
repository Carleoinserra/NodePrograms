/*Ecco i passaggi per connetterti a MongoDB utilizzando MongoDB Compass:

1. Apri MongoDB Compass
Avvia MongoDB Compass sul tuo computer.
2. Inserisci l'URI di connessione
Se conosci l'URI di connessione del tuo database, incollalo nel campo "URI di connessione" (esempio: mongodb://localhost:27017 per una connessione locale).
In alternativa, puoi compilare manualmente i campi:
Hostname: l'indirizzo del server (esempio: localhost o un URL remoto).
Porta: il numero di porta (di default: 27017).*/

/*
Ecco come creare un nuovo database su MongoDB Compass:

1. Apri MongoDB Compass e connettiti
Avvia MongoDB Compass.
Inserisci l'URI di connessione per collegarti al tuo server MongoDB (esempio: mongodb://localhost:27017 per una connessione locale).
Fai clic su Connect.
2. Vai alla schermata principale
Una volta connesso, vedrai un elenco dei database esistenti sul server.
3. Crea un nuovo database
Clicca sul pulsante "Create Database", che si trova in alto a destra nella schermata principale.
4. Inserisci i dettagli del database
Database Name: Inserisci il nome del nuovo database.
Collection Name: MongoDB richiede almeno una collezione all'interno di un database, quindi inserisci il nome della prima collezione.
5. Conferma la creazione
Fai clic su Create Database per completare l'operazione.
6. Inizia a utilizzare il database
Dopo aver creato il database, sarà visibile nell'elenco dei database sulla schermata principale.
Seleziona il database appena creato per iniziare ad aggiungere documenti, collezioni o eseguire query.

Per creare una nuova collezione su MongoDB Compass, segui questi passaggi:

1. Accedi al Database
Apri MongoDB Compass e connettiti al tuo server MongoDB.
Nella schermata principale, seleziona il database in cui desideri creare una nuova collezione. Se non hai ancora creato un database, creane uno come descritto nella risposta precedente.
2. Crea la Collezione
Una volta selezionato il database, vedrai un'area chiamata Collections (Collezioni).
In alto a destra, clicca sul pulsante Create Collection.
3. Imposta il Nome della Collezione
Collection Name: Inserisci il nome della nuova collezione.
Crea Indici (opzionale): Puoi scegliere di creare indici per la collezione, ma questo passaggio è opzionale. Gli indici possono migliorare le prestazioni delle query su determinati campi.
Crea il Capitolo (opzionale): MongoDB ti permette anche di creare una collezione con un cap (limite di documenti) o altre opzioni avanzate, ma di solito puoi lasciare queste impostazioni predefinite.
4. Conferma la Creazione
Dopo aver inserito il nome della collezione e le eventuali configurazioni, clicca su Create per creare la collezione.
5. Aggiungi Documenti alla Collezione
Una volta creata, la nuova collezione apparirà sotto il nome del database.
Puoi iniziare ad aggiungere documenti facendo clic sulla collezione appena creata e poi cliccando su Insert Document. A questo punto, potrai inserire i dati in formato JSON.

/*
Per aggiungere un nuovo documento in MongoDB Compass, segui questi passaggi:

1. Seleziona la Collezione
Apri MongoDB Compass e connettiti al tuo database.
Seleziona il database in cui vuoi aggiungere il documento.
All'interno del database, seleziona la collezione in cui vuoi inserire il documento.
2. Aggiungi un Nuovo Documento
Una volta che sei dentro la collezione, clicca su Insert Document in alto a destra (vicino al titolo della collezione).
3. Inserisci i Dati del Documento
Si aprirà un editor JSON in cui puoi inserire i dati del nuovo documento.
Scrivi i dati del documento nel formato JSON. Ad esempio:
json
Copia codice
{
  "nome": "Giovanni",
  "età": 30,
  "email": "giovanni@email.com"
}
Puoi aggiungere variabili, oggetti e array come desideri. MongoDB Compass ti aiuterà anche a validare il formato JSON.
4. Salva il Documento
Dopo aver inserito i dati, clicca su Insert per aggiungere il documento alla collezione.
5. Visualizza il Documento Aggiunto
Una volta inserito il documento, lo vedrai immediatamente nell'elenco dei documenti della collezione.
Puoi esplorarlo, modificarlo, o eliminarlo in qualsiasi momento.

In MongoDB, ogni documento ha un campo speciale chiamato _id che funge da identificatore univoco del documento all'interno della sua collezione. Questo campo è fondamentale per l'architettura di MongoDB e viene automaticamente creato se non specificato. Ecco come funziona:

1. Generazione Automatica dell'ID
Se non specifichi un valore per il campo _id quando crei un documento, MongoDB genera automaticamente un ObjectId univoco come valore per il campo _id.
L'ObjectId è un valore binario di 12 byte che viene rappresentato come una stringa di 24 caratteri esadecimali (per esempio: 507f1f77bcf86cd799439011).




*/



