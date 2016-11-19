var page = require('page');

var main = document.getElementById('ofertas');

page('/', function(ctx, next){
    main.innerHTML = 'Home';
})


page('/signup', function(ctx, next){
    //main.innerHTML = 'Signup';
})

page();	