/*Default Operator*/
var mongojs = require("mongojs");
var db = mongojs('guti');

var operations = {};
operations.Get = function(params, callBack) {
  db.collection(params.rKind).findOne({_id:mongojs.ObjectId(params.rId)}, function(err, it) {
    callBack(it);
  });
};
operations.Query = function(params, callBack) {
  db.collection(params.rKind).find(function(err, it) {
    callBack(it);
  });
};
operations.Edit = function(params, callBack) {
  db.collection(params.rKind).findOne({_id:mongojs.ObjectId(params.rId)},function(err, it) {
    if(it) {
      it.nombre = "S";
      db.collection(params.rKind).update({_id:it._id}, it, function(err, res) {
        callBack(res);
      });
    } else {
      callBack(it);
    }
  });
};
operations.Delete = function(params, callBack) {
  db.collection(params.rKind).findOne({_id:mongojs.ObjectId(params.rId)}, function(err, it) {
    if(it) {
      db.collection(params.rKind).remove({_id:it._id}, function(err, res) {
        callBack(res);
      });
    } else {
      callBack(it);
    }
  });
};

var CRUD = {};
CRUD.operation = function(anOperation) {
  return operations[anOperation]
};

module.exports = CRUD;