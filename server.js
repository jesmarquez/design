var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index', { title: 'Jobby'} );
})

app.get('/signup', function(req, res){
	res.render('index', { title: 'Jobby - Signup' } );
})

app.get('/signin', function(req, res){
	res.render('index', { title: 'Jobby - Signin '});
})

app.listen(3000, function(err){

	if(err) return console.log('Hubo error!'), process.exit(1);

	console.log('Escuchando en el puerto 3000!');
})