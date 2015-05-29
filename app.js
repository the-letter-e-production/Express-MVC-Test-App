var ExpressMVC = require('express_mvc');
var emvc = new ExpressMVC({});
var router = new emvc.Router;
    router.addRoute('Home', 'GET', '/', function(req, res){
        console.log('testing the route');
        res.send('It worked!');
    });
    emvc.Listen(router);
var router_two = new emvc.Router;
    router_two.addRoute('Home', 'GET', '/', function(req, res){
        console.log('testing the other route');
        res.send('It worked twice!');
    });
    emvc.Listen(router_two, 3001);
