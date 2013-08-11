var makeBinarySearchTree = function(){
  var binaryTree = {};

  binaryTree.value = undefined;
  binaryTree.right = null;
  binaryTree.left = null;

  binaryTree.insert = function(val) {

    if(!this.contains(val)) {

      if(this.value === undefined) { //make a new node at the root, if it is an empty tree
        this.value = val;
      } else if(this.value > val) {
        this.left === null ? (this.left = makeNewNode(val)) : this.left.insert(val);
      } else if(this.value < val) {
        this.right === null ? (this.right = makeNewNode(val)) : this.right.insert(val);
      }
    }
  };

  binaryTree.contains = function(val) {
    var result = false;

    if(val < this.value) {
      result = this.left && this.left.contains(val) || false;
    } else {
      result = this.right && this.right.contains(val) || false;
    }
    return val === this.value || result;
    //return val === this.value ||(val < this.value ? (this.left && this.left.contains(val) || false) : (this.right && this.right.contains(val) || false));
  };

  binaryTree.depthFirstLog = function(callback) {
    this.value = callback(this.value);

    if(this.left !== null) {
      this.left.depthFirstLog(callback);
    }
    if(this.right !== null) {
      this.right.depthFirstLog(callback);
    }
  };

  var makeNewNode = function(val) {
    var newNode = makeBinarySearchTree();
    newNode.value = val;
    return newNode;
  };

  return binaryTree;
};
