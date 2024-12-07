/*
Nel secondo programma con express voglio passare nella response un file html
Per fare questo devo settare, dall'applicazione il percorso della cartella delle views
dove cioè express va a pescare i template (cioè i file html)
Mi creo una cartella views dove andrò a mettere i file pug per renderizzare i dati della mia applicazione
Vado inoltre a settare, sempre dall'applicazione quello che sarà il motore di templating per traferire i
dati dalla logica dell'applicazione al template,
cioè pug (che va installato nella cartella di lavoro)

*/

const express = require('express');
const app = express();
app.set('views', './views')
app.set('view engine', 'pug')
// Middleware per gestire i dati del form
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.render('index');
  });
/*
abbiamo creato una rotta al metodo get a /second
abbiamo creato e popolato una lista di stringhe
con il metodo render abbiamo prima dichiarato che passeremo il file second.pug
gli abbiamo passato una variabile stringa, una variabile numerica e la lista di stringhe
*/
  app.get('/second', function (req, res) {

    lista = []
    lista.push("blu")
    lista.push("giallo")
    lista.push("verde")
    res.render('second', { nome: 'Carlo', anni: 39, lista : lista});
  });
  app.get('/form', function (req, res) {
    res.render('form');
  });

  app.post("/submit", function (req, res) {
  let nome = req.body.nome

  console.log("Hai scritto " + nome)

})



  app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});