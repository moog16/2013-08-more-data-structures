var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var childTree = makeTree();
  childTree.parent = this;
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

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  var childArray = parent.children;
  this.parent = null;  //child says he has no parent

  for(var i=0; i<childArray.length; i++) {  //emancipating the child from the parent
    if(childArray[i] === this) {
      childArray.splice(i, 1);
    }
  }
};