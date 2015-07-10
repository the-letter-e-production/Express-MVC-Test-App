var ExpressMVC = require('express_mvc');
var emvc = new ExpressMVC({
    access_logging: true
});
var router = new emvc.Router;
    router.addRoute('Home', 'GET', '/', function(req, res){
        console.log('testing the route');
        res.send('It worked!');
    });
    router.addRoute('About', 'GET', '/about', function(req, res){
        res.send('About worked!');
    });

var app = emvc.App;

app.use(function(req, res, next){
    if( req.headers.auth == '1234' ){
        next();
    }else{
        res.send('Failed to authenticate!');
    }
});

app.listen(router)

