express           = require "express" 
Operator          = require "./app/middleware/Operate"
ServerDispatcher  = require "./app/middleware/ServerDispatcher"
PORT              = 3000

#Start App
app     = express();

#Set application configuration
app.set 'cfg', require("./app/config")
app.set 'env', app.get('cfg').env
app.use express.static(__dirname + '/public')
app.use express.bodyParser()

app.configure 'development', () -> 
  #only if dev
  app.get('/SchemaReset/', require("./app/controller/SchemaReset"))


#Operations
app.get  /^\/--([A-Z][a-z]+)?([A-Z][a-z]+):([\w_]+)?$/, Operator.byJugglerSyntax
app.post /^\/--([A-Z][a-z]+)?([A-Z][a-z]+):([\w_]+)?$/, Operator.byJugglerSyntax 


#Rest Api
#app.get   (/\/api\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
#app.post  (/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
#app.put   (/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);
#app.delete(/\/rest\/(\w+)\/(\w+)?$/, Operator.byRESTSyntax);


#SERVERS
app.get  /^\/\$(\w+:)?(\w+)/ , ServerDispatcher
app.post /^\/\$(\w+:)?(\w+)/ , ServerDispatcher

app.post /post/ , (req, res) ->
  res.send(req.body)


#Actions
app.get "/", ->
  res.send(req.query)


#WakeUp
app.listen PORT
