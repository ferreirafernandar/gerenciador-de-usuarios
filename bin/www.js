var app = require('../app');

app.set('porta', process.env.PORT || 8080);

var server = app.listen(app.set('porta'), function(){
    console.log('Servidor:' + server.address().port);
})