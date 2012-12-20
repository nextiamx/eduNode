define(["./branch/Branch", "./branch/Tree"], function(Branch, Tree) {
  
  //Nampespace
  var Juggler = {};

  Juggler.tree = function(treeName, node, fn) {

    if(!Juggler.$Trees[treeName]) {
      Juggler.$Trees[treeName] = Tree.create(treeName, node, fn);
    } 

    return Juggler.$Trees[treeName];
  };
  Juggler.$Trees = {};

 

  return Juggler;


});

