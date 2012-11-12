define(['juggler/lib/http'], function(http) {
	var vs = function(config) {
		var views = {};
		var vkeys = Object.keys(config);

		var viewUrl = function(viewName) {
			var viewParts = viewName.split(":");
			var viewUrl = "";
			if(viewParts.length > 1) {
				viewUrl = config[viewParts[0]] + viewParts[1];
			} else {
				console.log(config[vkeys[0]]);
				viewUrl = config[vkeys[0]] + viewParts[0];
			}
			return viewUrl + ".js";
		}

		var setView = function(viewUrl, vson) {
			views[viewUrl] = vson
		}

		var getView = function(viewUrl, callback) {
			var v = views[viewUrl];
			if(v) {
				callback(v);
			} else {
				http.get(viewUrl, null, function(vson) {
					setView(viewUrl, vson);
					getView(viewUrl, callback);
				});
			}
		};

		return function(viewName, callback) {
			var v =  getView(viewUrl(viewName));
		}
	}

	return vs;
});