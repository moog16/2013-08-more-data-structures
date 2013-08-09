// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.tail !== null) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
    }
    if(list.head === null) {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head === null) {
      return 'no more in the list';
    }
    var result = list.head.value;
    if(list.head.next !== null) {
      list.head = list.head.next;
      list.head.prev = null;
    } else {
      list.head = null;
    }

    return result;
  };

  list.contains = function(value){
    var hasValue = function(checkNode) {
      if(checkNode === null){
        return false;
      } else if(value === checkNode.value) {
        return true;
      } else if(checkNode === list.tail) {
        return false;
      } else {
        return hasValue(checkNode.next);
      }
    };
    return hasValue(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};



  //head                 tail 
  // 8  --> 4 ---> 6 ---> 1 