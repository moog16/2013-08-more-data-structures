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

  var hasValue = function(tree) {
    for(var i=0; i<tree.length; i++) {
      if(tree[i].value === val) {
        return true;
      } else if(tree[i].children.length > 0) {
        return hasValue(tree[i].children);
      } else {
        return false;
      }
    }
  };

  return this.value === val ? true : hasValue(root.children);
};

/*treeMethods.contains = function(val){
  var root = this;
  var hasValue = function(tree) {
    for(var i=0; i<tree.length; i++) {
      if(tree[i].value === val) {
        return true;
      }
    }
    hasValue(tree[0].children);
  };
  if(root.value === val) {
    return true;
  } else {
    return hasValue(root.children);
  }
};*/
