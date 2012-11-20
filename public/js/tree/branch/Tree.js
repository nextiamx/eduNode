define(["./Branch"], function(Branch) {

	var addBranch = function() {
		
	};

	var Tree = function(node) {
		this.$isTree = true;
		this.$addBranch = addBranch;
	};
	Tree.prototype = new Branch();

	return Tree;
})