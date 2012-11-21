define(["./Branch"], function($Branch) {

	var addBranch = function() {
		
	};

	var $Tree = function(node) {
		$Tree.$init.call(this);
	};
	$Tree.$init = function() {
		$Branch.$init.call(this);
		this.$isTree = true;
		this.$addBranch = addBranch;
	}
	$Tree.prototype = new $Branch();

	$Tree.domClass = "Juggler-Tree";
	/*CREATING TREEES*/
	$Tree.create = function(treeName, domNode, fn) {
	    var _b = $Branch.__create($Tree, treeName, domNode, fn);
	    domNode.addClass($Tree.domClass);
	    return _b;
  	};

	return $Tree;
})