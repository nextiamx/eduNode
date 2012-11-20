define([], function() {
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
	return HashWatcher;
});
