mongojs = require 'mongojs'
#from config!
db = mongojs 'guti'

operations = {}
operations.Get = (params, callBack)->
  kind = params.rKind
  query = _id : mongojs.ObjectId(params.rId)
  db.collection().findOne query , (err, it)->
    callBack it

operations.Query = (params, callBack)->
  db.collection(params.rKind).find (err, it) ->
    callBack it 


operations.Edit = (params, callBack)->
  kind = params.rKind
  query = _id:mongojs.ObjectId(params.rId)
  db.collection(kind).findOne query , (err, it) ->
    if(it) 
      it.nombre = "S"
      db.collection(kind).update {_id:it._id} , it, (err, res) ->
        callBack res
    else 
      callBack it



operations.Delete = (params, callBack) -> 
  kind = params.rKind
  query = _id:mongojs.ObjectId(params.rId)
  db.collection(kind).findOne query, (err, it) ->
    if(it)
      db.collection(kind).remove  {_id : it._id} , (err, res) ->
        callBack res
    else 
      callBack it



CRUD = {}

CRUD.operation = (anOperation) ->
  operations[anOperation]

module.exports = CRUD