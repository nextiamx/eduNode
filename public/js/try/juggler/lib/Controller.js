define([], function() {

  var nexted = function(scope, list, finish) {
    var list    = list;
    var counter = -1;
    var nxt = function() {
      counter++;
      if(list[counter]) {
        list[counter].pass([scope,nxt])();
      } else {
        if(finish) {
          finish();
        }
      }
    }
    return nxt;
  }

  var Controller = new Class({
      $uses : [],
      $cases: [],
      $sets : {},
      initialize : function() {

      },
      use : function(fn) {
        this.$uses.push(fn);
      },
      startup:function() {
        nexted(this, this.$uses)();
      },
      when: function(condition, callback) {
        this.$cases.push([condition, callback]);
      },
      launch : function(condition) {
        Array.each(this.$cases, function(kase) {
          var cond  = kase[0];
          var fn    = kase[1];
          var match = cond.exec(condition);
          if(match){
            fn(this, match);
            return 0;
          };
        }.bind(this));
      },
      st: function(key, val) {
        this.$sets[key] = val;
      },
      gt: function(key) {
        return this.$sets[key] || false;
      },
      nodePoint : function(aNode) { 
        if(!aNode) {
          return this.$nodePoint;
        }
        this.$nodePoint = aNode;
        return this.$nodePoint;
      }
  });

  return Controller;
})