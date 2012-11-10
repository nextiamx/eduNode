var express           = require("express");
var Operator          = require("./app/middleware/Operate");
var ServerDispatcher  = require("./app/middleware/ServerDispatcher");
var PORT              = 3000;

//Start App
var app     = express();

//Set application configuration
app.set('cfg', require("./app/config"));
app.set('env', app.get('cfg').env);
app.use(express.static(__dirname + '/public'));

app.configure('development', function() {
  //only if dev
  app.get('/SchemaReset/', require("./app/controller/SchemaReset"));
});

/*OPERATIONS*/
  app.get (/^\/--([A-Z][a-z]+)?([A-Z][a-z]+):([\w_]+)?$/, Operator.byJugglerSyntax);
  app.post(/^\/--([A-Z][a-z]+)?([A-Z][a-z]+):([\w_]+)?$/, Operator.byJugglerSyntax);

/*REST API*/
  app.get   (/\/api\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
  /*
  app.post  (/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
  app.put   (/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
  app.delete(/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
  */

/*SERVERS*/
  app.get(/^\/\$(\w+:)?(\w+)/, ServerDispatcher.dispatch);

/*BASIC ACTIONS*/
  app.get("/", function(req, res) {
    res.send(req.query);
  });

/*WAKEUP*/
app.listen(PORT);