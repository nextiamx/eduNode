define([], function() {
  
  var NEXTED = function(ambito, acciones, onFinish) {
    var cuenta   = -1;
    var Acciones = acciones;
    var nxt = function() {
      cuenta++;
      if(Acciones[cuenta]) {
        Acciones[cuenta].pass([ambito, nxt])();
      } else {
        if(onFinish) onFinish();
      }
    } 
    return nxt;
  }; 

  var letsFly = function(ctrl, node, fn) {
    fn && fn(ctrl, node)
  };

  var Base = new Class({
    Implements : [Options, Events],
    $use       : [], 
    $est       : {},
    initialize: function() {},
    use       : function(aFn) {
      this.$use.push(aFn);
    },
    configure : function(fn) {
      this.$cfg = fn;
    },
    run      : function(aNode, aFn) {
      aNode || (aNode = $(document.body));
      this.$cfg && this.$cfg(this);
      var next = NEXTED(this, this.$use, letsFly.pass([this, aNode, aFn]) );
      next();
    },
    est      : function(name, fn) {
      this.$est[name] = fn;
    },
    obt      : function(name) {
      return this.$est[name];
    }
  });

  return Base;
})