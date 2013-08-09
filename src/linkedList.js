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

  list.contains = function(){

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