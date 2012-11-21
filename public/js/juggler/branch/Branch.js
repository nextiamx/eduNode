define([], function() {
  
  /*Next Curry*/
  var $next = function(ambito, acciones, onFinish) {
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

  /*Nothing interesting*/
  var letsFly = function(brch, fn) {
    fn && fn(brch)
  };

  /*Branch Class*/
  var $Branch = function() {
    $Branch.$init.call(this);
  };

  $Branch.$init = function() {
    this.$__cfg     = null;
    this.$__seeds   = [];
    this.$__est = {};
    this.$childs = [];
  }

  /*BRANCH Functions*/
  $Branch.prototype.$use  = function(fn) {
    this.$__seeds.push(fn);
  };
  $Branch.prototype.$run  = function(fn) {
    this.$cfg && this.$__cfg(this);
    var next = $next(this, this.$__seeds, letsFly.pass([this, fn]) );
    next();
  };
  $Branch.prototype.$configure  = function(fn) {
    this.$__cfg = fn;
  };
  $Branch.prototype.$s  = function(k, v) {
    this.$__est[k] = v;
  };
  $Branch.prototype.$g = function(k) {
    return this.$__est[k];
  };

  /*Config----*/
  $Branch.config = function(cfg) {
    console.log(cfg);
    return function() {
      return new $Branch();
    }
  }

  /*CREATING BRANCHES*/

  $Branch.domClass = "Juggler-Branch";
  $Branch.storeKey = "Juggler:Branch";

  $Branch.__create = function(type ,treeName, domNode, fn){
    var b = new type();
    b.$name = treeName;
    domNode.addClass($Branch.domClass);
    domNode.store($Branch.storeKey, b);
    b.$domNode = domNode;
    fn(b);
    return b;
  };
  
  $Branch.create = function() {
    return $Branch.__create($Branch, type, treeName, domNode, fn);
  }

  /*Output Module*/
  return $Branch;
})