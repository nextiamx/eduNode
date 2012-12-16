mongojs = require 'mongojs'
#from config!
db = mongojs 'guti'

getOnce = (params, callBack) ->
  kind = params.rKind
  query = 
    _id : mongojs.ObjectId(params.rId)
  db.collection(kind).findOne query , (err, it)-> callBack it

operations = {}

operations.Get = (params, callBack)->
  getOnce(params, callBack)

operations.Query = (params, callBack)->
  db.collection(params.rKind).find (err, it) -> callBack it 

operations.Edit = (params, callBack)->
  getOnce params, (it) ->
    if(it)
      db.collection(params.rKind).save it, (err) -> 
        if ! err
          getOnce params, (it) -> callBack(it)
        else
          callBack err
    else 
      callBack "err"

operations.Delete = (params, callBack) -> 
  kind = params.rKind
  query = _id:mongojs.ObjectId(params.rId)
  db.collection(kind).findOne query, (err, it) ->
    if(it)
      db.collection(kind).remove  {_id : it._id} , (err, res) -> callBack res
    else 
      callBack it

CRUD = {}

CRUD.operation = (anOperation) -> operations[anOperation]

module.exports = CRUD