require(["juggler/index", "ec/wakeup"], 
  function(Juggler, EduWakeup) {
    window.addEvent("domready", function() {
      var e = Juggler.tree("EduCom", $("EduCom"), EduWakeup);
      window.Juggler = Juggler;
    });
  }
);


