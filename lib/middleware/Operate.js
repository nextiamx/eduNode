/*Operator*/
var mongojs = require("mongojs");
var $sets   = {};

var Operate = function(params, req, res) {	
	var operator = Operate.get(params.operator)            
  if(operator) {
    var operation = operator.operation(params.operation);
    if(operation) {
      operation(params, function(response) {
        res.send(response);
      });
    }
  } else {
    res.send("NoOp");
  }
};
Operate.set = function(anAlias, anOperate) {
	$sets[anAlias] = anOperate;
};
Operate.get = function(anAlias) {
	return $sets[anAlias];
};

/*REST*/
Operate.byRESTSyntax = function(req, res) {
  var m = {
    "message"   : "NO_REST_SYNTAX",
    "collection": req.params[0],
    "id"        : req.params[1]
  };
  res.send(m);
};

/*JUGGLER*/
var jugglerParams = function(req) {
  var rName  = req.params[2];
  var resources = rName.split("_");
  var params = {
    'operator'  : req.params[0] ? req.params[0] : "_default_",
    'operation' : req.params[1],
    'rName'     : rName,
    'rKind'     : resources[0],
    'rId'       : resources[1] ? resources[1] : null,
    'query'     : req.query,
    'body'      : req.body
  };
  console.log(params);
  return params;
};
Operate.byJugglerSyntax = function(req, res) {
  var params = jugglerParams(req);
  if(
      ( 
        (req.method == "GET") && 
        (['Query','Get'].indexOf(params.operation) > -1) 
      ) || ( 
        (req.method == "POST") && 
        (['Update','Delete','Create'].indexOf(params.operation) > -1)
      )
  ){} else {
    params.operation = false;
  }
  Operate(params, req, res); 
};

module.exports = Operate;