var makeBinarySearchTree = function(){
  var binaryTree = {};

  binaryTree.value = undefined;
  binaryTree.right = null;
  binaryTree.left = null;

  binaryTree.insert = function(val) {
      //debugger;
    if(!this.contains(val)) {
        if(this.value === undefined) { //make a new node at the root, if it is an empty tree
          this.value = val;
        } else if(this.value > val) {
        if(this.left === null) {
          this.left = makeNewNode(val);
        } else {
          this.left.insert(val);
        }
      } else if(this.value < val) {
        if(this.right === null) {
          this.right = makeNewNode(val);
        } else {
          this.right.insert(val);
        }
      }
    }
  };

  binaryTree.contains = function(val) {
    if(val === this.value) {
      return true;
    } else if(val < this.value) {
      if(this.left === null) {
        return false;
      } else {
        return this.left.contains(val);
      }
    } else if(val > this.value) {
      if(this.right === null) {
        return false;
      } else {
        return this.right.contains(val);
      }
    }
  };

  binaryTree.depthFirstLog = function(callback) {
    console.log(this.value);
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
