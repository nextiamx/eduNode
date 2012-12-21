mongojs = require "mongojs"

collections = 
  #'Imprenta' : require("../data/Imprenta"),
  #'User'       : require("../data/User"),         /*   email, password
  #'Group'      : require("../data/Group"),          usuarios, nombre, descripcion... etc
  #// Ser o no Academicos » Escuela » LugarFisico (catedratico, moderador)  --> curricula --> carrera
  #---> Eventos  (se realizan discusiones) --^ 
  #(Mensajes)
  #'Discussion' : requoer("../data/Discussion"),    
  #'Comment'    :   << Attachado (Video, PDF, link a web, archivo)
  #'Subjects'   :  (Arbol) 
  #'SubjectsRelations' Magia
  #'Activities' : Pendiente !
  #'Project'    : pendiente !
  #
  #
  #// 'Universities' : require("../data/universities"),

  # 
  #// -> Carreras -> Curriculums (cursos)
  #/*
  #'Users'        : require("../data/users"),
  #  
  ##'Comments'     : require("../data/comments"),
  'Communities'  : require ("../data/communities") 
  'Courses'      : require ("../data/courses")
  'Projects'     : require ("../data/projects")
  'Subjects'     : require ("../data/subjects") 
  #'Discussions'  : require("../data/discussions"),
  #'Activities'   : require("../data/activities"),
  #'Events'       : require("../data/events")


SchemaReset = (req, res) ->
  db = mongojs 'guti'
  for name, coll of collections 
    collection = db.collection name
    collection.remove {}
    for registro in coll
      console.log registro
      collection.save registro, () ->
        console.log "9" 
  res.send "SchemaReset"


module.exports = SchemaReset 

