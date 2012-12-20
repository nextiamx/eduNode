define(['juggler/lib/http'], function($http) {
  var $views = {};

  var reti = {};
      reti.array  = Function.from('children');
      reti.object = Function.from('props');
      reti.string = function(astr){
          if(/^for\((.+)\)$/.test(astr)) return "for";
          if(/^if\((.+)\)$/.test(astr)) return "if";
          return "tag";
        };
      };

  var compileNode = function(aReference, arrNode, parentNode){
    var children, info = {};
    Array.each(arrNode, function(elArray){
      var type = typeOf(elArray);
      var fn   = reti[type];
      info[fn(elArray)] = elArray;
    });
    var single = true;
    var cond   = true;
    if(info.if) {
      // aletero cond
    };
    if(info.for) {
      single = false;
    };
    if(cond){
      if(single) {
        var node = new Element(info.tag, info.props);
        if(parentNode) node.inject(parentNode);
        if(info.children && info.children.length > 0) compileNodes(info.children, node);
        return node;
      } else {
        //Multiple
      }
    }
    return false;
  }

  var compileNodes = function(arrNodes, parentNode){
    console.log(arrNodes);
    Array.each(arrNodes, function(arrNode) {
      compileNode(arrNode, parentNode);
    });
  }

  var View =  new Class({
    initialize:function(anArray){
      this.$array=anArray;
    },
    compile:function(aReference){
      return compileNode(aReference, this.$array);
    }
  })
  return View;
});


