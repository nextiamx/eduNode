var mongojs = require("mongojs");

var data = {
  /*
  'Imprenta' : require("../data/Imprenta"),
  
  'User'     : require("../data/User"),
  'Group'    : require("../data/Group"),
  'Theme'    : require("../data/Theme"),
  'Topic'    : require("../data/Theme"),
*/

}

var SchemaReset =function(req, res) {
  var db = mongojs('guti');
  for(var x in data) {
    var collection = db.collection(x);
    collection.remove({});
    for(var i=0; i < data[x].length; i++) {
      console.log(data[x][i]);
      collection.save(data[x][i], function() {
        console.log("8");
      });
    }
  }
  res.send("SchemaReset");
}

module.exports = SchemaReset;

