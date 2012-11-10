(function(w) {
	var mootools_core = 'mootools-core-1.4.5-full-nocompat-yc';
	var mootools_more = 'mootools-more-1.4.0.1';
	var raphael 	  = 'raphael';

	var Main = function() {
		w.addEvent('domready', function() {
			//alert('ola');
		});
	}

	require([mootools_core], function() {
		require([mootools_more], function() {
			Main();
		});
	})

})(window);