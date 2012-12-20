define([], function() {
	return function(login, onAccess, onFail) {
		
		var holder = $(document.body);
		var holderSize = holder.getSize();
		var modal = new Element('div').inject(holder);
		modal.setStyles({
			background:"#222", 
			width: holderSize.x/2, 
			height:holderSize.y/2, 
			"border-radius": "5px", 
			margin:10
		});
		var form 		  = new Element('form').inject(modal);
		var usernameInput = new Element('input', {name:'username', type: 'text', placeholder: 'username'}).inject(form);
		var emailInput    = new Element('input', {name:'password', type: 'password', placeholder: 'password'}).inject(form);
		var submit        = new Element('input', {type: 'submit', value:"IniciarSesión", class: 'btn btn-primary'}).inject(form);

		var access = function() {
			alert("Accesso");
			onAccess && onAccess();
			return true;
		};

		var fail = function() {
			alert("failAccess");
			onFail && onFail();
			return true;
		}
		
		form.addEvent('submit', function(ev) {
			ev.stop();
			var obj = form.toQueryString().parseQueryString();
			login(obj, function(l) {
				( (l && access() ) || fail());
				return true;
			});

		});
	}
});