define(["./branch/Branch", "./branch/Tree"], function(Branch, Tree) {
  
  //Nampespace
  var TreeJS = function(treeName, node, fn) {
    if(!TreeJS.$Trees[treeName]) {
      TreeJS.createTree(treeName, node, fn);
    } 
    return TreeJS.$Trees[treeName];
  };
  TreeJS.$Trees = {};

  TreeJS.createTree = function(treeName, domNode, fn) {
    var _b = Branch._create(Tree, treeName, domNode, fn);
    domNode.addClass("TREE-TREE");
    TreeJS.$Trees[treeName] = _b;
    return _b;
  };

  return TreeJS;


});

