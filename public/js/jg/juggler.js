(function(W) {
	/*Primitivas & Curris*/
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
	//HashListener 
	var HashWatcher = function() {
		var HW = new Class({
			Implements : [Events],
			oldHash    : null,
			newHash    : null,
			initialize : function() {
				this.checkHash.periodical(100, this);
			},
			checkHash : function() {
				this.newHash = window.location.hash;
				if(this.newHash != this.oldHash) {
					this.fireEvent('change', [this.newHash, this.oldHash]);
					this.oldHash = this.newHash;
				}
			}
		});
		var hw = null;
		return function() {
			( hw || (hw = new HW()) );
			return hw;
		}
	}
  //Nampespace
	var juggler = {};
  //App Class
	juggler.$APP = new Class({
		Implements : [Options, Events],
		$use   		 : [], 
		$est 			 : {},
		initialize: function() {},
		use       : function(aFn) {
			this.$use.push(aFn);
		},
		configure : function(fn) {
			this.$cfg = fn;
		},
		run      : function(aNode) {
			aNode || (aNode = $(document.body));
			this.$cfg && this.$cfg(this);
			var next = NEXTED(this, this.$use);
			next();
		},
		debug    : function(text) {
			console.log("APP »" + text)
		},
		est 	   : function(name, fn) {
			this.$est[name] = fn;
		},
		obt      : function(name) {
			return this.$est[name];
		}
	});
	//App
	juggler.$app = {};
	juggler.app = function(appName, app) {
		if(app) {
			this.$app[appName] = new juggler.$APP(app); 
		} 
		var Rapp = this.$app[appName];
		
		return Rapp;
	};

	juggler.HashWatcher = HashWatcher();
	/*
	CreateHashWatcher()().addEvent("change", function(a, b) {
		console.log(b + " -» " + a);
	})*/











 W.juggler = juggler;
})(window);