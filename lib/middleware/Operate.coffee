mongojs = require "mongojs"
$sets   = {}

Operate = (params, req, res) -> 
  operator = Operate.get(params.operator)           
  if operator 
    operation = operator.operation(params.operation)
    if operation
      operation params, (response)-> res.send response
    else 
      res.send "NooooOp"
  else 
    res.send "NoOp"

Operate.set = (anAlias, anOperate)-> $sets[anAlias] = anOperate

Operate.get = (anAlias) -> $sets[anAlias]

#REST 
Operate.byRESTSyntax = (req, res) ->
  m = 
    "message"   : "NO_REST_SYNTAX"
    "collection": req.params[0]
    "id"        : req.params[1]
  res.send m


#JUGGLER
jugglerParams = (req) ->
  rName     = req.params[2]
  resources = rName.split("_")
  operator  = "_default_" 
  operator  = req.params[0] if req.params[0]?
  rid       = null
  rid       = resources[1] if resources[1]?
  params    = 
    'operator'  : operator
    'operation' : req.params[1]
    'rName'     : rName
    'rKind'     : resources[0]
    'rId'       : rid
    'query'     : req.query
    'body'      : req.body
  console.log(params)
  params

#Juggler Syntax Processor
Operate.byJugglerSyntax = (req, res) ->
  params = jugglerParams req
  allowed = 
    GET : ['Query', 'Get']
    POST: ['Edit', 'Delete', 'Create']

  #if allowed[req.method].indexOf(params.operation) is -1
  #  params.operation = off
  
  Operate params, req, res


module.exports = Operate