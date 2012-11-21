define([], function() {
	var HTTPClass = new Class({
		Implements : [Events],
		initialize:function(url, options, fn) {
			var data = ("POST" == options.method) ? options.params : options.query; 
			this.$Request = new Request.JSON({
				url       : url,
				data      : data,
				method    : options.method,
				onSuccess : fn,
				//onFail    : this.fireEvent(this, 'fail')
				onError  : function(err) {
					alert(err);
				}
			});
			this.$Request.send();
		}
	});
	var _HTTP_ = function(url, options, fn) { return new HTTPClass(url, options, fn);};
	_HTTP_.get 		= function(url, options, fn){
		options || (options = {});
		options.method = "GET";
		return  _HTTP_(url, options, fn);
	};
	_HTTP_.post 	= function(url, options, fn){
		options || (options = {});
		options.method = "POST";
		return  _HTTP_(url, options, fn);
	};
	_HTTP_.put 		= function(url, options, fn){
		options || (options = {});
		options.method = "PUT";
		return  _HTTP_(url, options, fn); 
	};
	_HTTP_.delete 	= function(url, options, fn){
		options || (options = {});
		options.method = "DELETE";
		return  _HTTP_(url, options, fn);
	};
	return _HTTP_;
})