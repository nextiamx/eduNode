require(["tree/index", "ec/wakeup"], 

	function(TreeJS, EduWakeup) {
		window.addEvent("domready", function() {

			var e = TreeJS("EduCom", $("EduCom"), EduWakeup);
			
		})
		
	}
);


