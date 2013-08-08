// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //make a node
    var node = makeNode(value);
    //if new list, adding a new node-->head to point to new node
    if(list.head === null) {
      list.tail = node;
    }
    
    //point node's next value-->tail
    //tail-->new node
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

  return node;
};



////tail                 head
  // 8  --> 4 ---> 6 ---> 1 