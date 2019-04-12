//esto es un formato q se repite en todos
var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//aqui se empiezan a configurar las rutas

app.get('/', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'pagina principal'

    }
    response.render('home', contexto);
});


app.post('/login', function(request, response){

    console.log(request.body);
    response.send('hola');
});

//aqui se le dice el puerto y las rutas
app.listen(3000);