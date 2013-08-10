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
  return _(this.children).reduce(function(hasValue, child){
    return hasValue || child.contains(val);
  }, this.value === val);
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  this.parent = null;  //child says he has no parent
  var node = this;
  _(parent.children).each(function(child, i) {
    if(child === node) {
      parent.children.splice(i, 1);
    }
  });
};