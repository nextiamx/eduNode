define(["tree/http/JService"], function(JService) {
  
  return function(eTree) {

    eTree.$seed(function(tree, next){
      JService("App", "Startup", null, function(r) {
        tree.APPActions = r.actions;
        next();
      })
    });

    eTree.$grow(function(tree) {
      var menuNode = new Element("div.menu").inject(tree.$domNode);
      eTree.$addBranch(menuNode, function(branch) {

      });
    });
  }
})