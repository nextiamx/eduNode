define([], function() {
  /*Next Curry*/
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
  /*Nothing interesting*/
  var letsFly = function(brch, fn) {
    fn && fn(brch)
  };
  /*Branch Class*/
  var BRANCH = function() {
    this.$configure = function(fn) {
      this.$__cfg = fn;
    };
    this.$__seeds = [];
    this.$seed = function(fn) {
      this.$__seeds.push(fn);
    };
    this.$grow = function(fn) {
      this.$cfg && this.$__cfg(this);
      var next = NEXTED(this, this.$__seeds, letsFly.pass([this, fn]) );
      next();
    };
    // S&G
    this.$__est = {};
    this.$s = function(k, v) {
      this.$__est[k] = v;
    }
    this.$g = function(k) {
       return this.$__est[k];
    };

    this.$childs = [];
  }


  BRANCH.config = function(cfg) {
    console.log(cfg);
    return function() {
      return new BRANCH();
    }
  }

  
  BRANCH._create = function(type ,treeName, domNode, fn){
    var _b = new type();
    _b.$name = treeName;
    domNode.addClass("TREE-BRANCH");
    domNode.store("BRANCH", _b);
    _b.$domNode = domNode;
    fn(_b);
    return _b;
  };
  

  BRANCH.create = function() {
    return BRANCH._create(BRANCH, type, treeName, domNode, fn);
  }

  return BRANCH;
})