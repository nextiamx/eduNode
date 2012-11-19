var mongojs = require("mongojs");

var data = {
 /*
  'Imprenta' : require("../data/Imprenta"),
  'User'       : require("../data/User"),         /*   email, password
  'Group'      : require("../data/Group"),          usuarios, nombre, descripcion... etc
  // Ser o no Academicos » Escuela » LugarFisico (catedratico, moderador)  --> curricula --> carrera
---> Eventos  (se realizan discusiones) --^ 
 (Mensajes)
  'Discussion' : requoer("../data/Discussion"),    
  'Comment'    :   << Attachado (Video, PDF, link a web, archivo)
  'Subjects'   :  (Arbol) 
  'SubjectsRelations' Magia
  'Activities' : Pendiente !
  'Project'    : pendiente !
*/

 // 'Universities' : require("../data/universities"),
  'Communities'  : require("../data/communities"),
 // 'Courses'      : require("../data/courses"),
  //'Projects'     : require("../data/projects"),
  'Subjects'     : require("../data/subjects") 
 
 // -> Carreras -> Curriculums (cursos)
/*
  'Users'        : require("../data/users"),
  
  
  'Discussions'  : require("../data/discussions"),
  'Comments'     : require("../data/comments"),
  'Activities'   : require("../data/activities"),
  'Events'       : require("../data/events"),*/
  

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

