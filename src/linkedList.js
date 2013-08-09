// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head !== list.tail){
      list.tail.next = newNode;
      newNode.prev = list.tail;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
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