define(["juggler/http/JService"], function(JService) {
  
  return function(eTree) {

    eTree.$use(function(tree, next){
      JService("App", "Startup", null, function(r) {
        tree.APPActions = r.actions;
        console.log(r);
        next();
      })
    });

    eTree.$run(function(tree) {
      var menuNode = new Element("div.menu").inject(tree.$domNode);
      console.log(eTree);
      eTree.$addBranch(menuNode, function(branch) {
        
      });
    });
  }
})