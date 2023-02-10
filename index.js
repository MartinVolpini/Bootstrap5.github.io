const express = require ("express");
const cors    = require("cors");
const colors  = require("colors");


const app = express();
app.set('port',  4100)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen( app.get('port'), () => { console.log(`EXPRESS puerto ${app.get('port')}`.yellow) } );