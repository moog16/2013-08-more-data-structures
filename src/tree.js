var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var childTree = makeTree();
  childTree.value = val;
  this.children.push(childTree);
};


treeMethods.contains = function(val) {
  var root = this;
  var result = false;
  var hasValue = function(tree) {
    if(tree.value === val) {
      result = true;
    } else {
      for(var i = 0; i < tree.children.length; i++) {
        hasValue(tree.children[i]);
      }
    }
    return result;
  };

  return hasValue(root);
};