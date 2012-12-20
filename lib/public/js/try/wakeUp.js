(function(w) {
  var mootools_core = 'mootools-core-1.4.5-full-nocompat-yc';
  var mootools_more = 'mootools-more-1.4.0.1';
  var raphael       = 'raphael';
  var dependencies  = ['edunode/Main', 'juggler/lib/view'];

  var Main = function(edunodeMain, View) {
    var EduNode = w.EduNode = edunodeMain();
    EduNode.startup();

    w.view = new View(['div.hola', {rel:"u"}, [
      ['div.kiki#as', [
        ['a', {href:"#ff"}]
      ]]
    ]]);
  }

  require([mootools_core], function() {
    require([mootools_more], function() {
      require(dependencies, Main);
    });
  })

})(window);