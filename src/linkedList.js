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

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    //case: list is empty
    if(list.tail === null) {
      list.tail = newNode;
    }
    //case: add to list with multiple items in list
    if(list.head !== null) {
      newNode.next = list.head;
      list.head.prev = newNode;
    }

    list.head = newNode;
  };

  list.removeHead = function(){
    var result = list.head.value; //gather value
    remove(list.head);

    return result;
  };

  list.removeTail = function() {
    var result = list.tail.value;  //gather the value
    remove(list.tail);

    return result;
  };

  var remove = function(node) {
    if(node === list.tail && node.prev !== null) {
      list.tail = list.tail.prev;
      list.tail.next = null;
    } else if(node === list.head && node.next !== null) {  //a tail value exist (at least two elements in the list)
      list.head = list.head.next;  //set a new head to whatever follows it
      list.head.prev = null;  //new head has no previous node
    }else if(list.head === list.tail) {
      list.head = list.tail = null;
    }
  };

  list.contains = function(value){
    return this.head !== null ? this.head.contains(value) : false;
  };

  return list;
};

var makeNode = function(value, next){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  node.contains = function(val) {
    return this.value === val || (this.next && this.next.contains(val)) || false;
  };

  return node;
};