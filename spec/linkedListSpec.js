describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should add new node to empty list, and head should equal new node", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');
    expect(linkedList.head).toEqual(node);
  });

  // add more tests here to test the functionality of linkedList
  it("should add new node to empty list, and tail should equal the new node", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');

    expect(linkedList.tail).toEqual(node);
  });

  it("should add new node to empty list, and node.next should equal null", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');

    expect(node.next).toEqual(null);
  });

  it("should properly use previous property, when adding 2 elements to tail", function() {
    var node1 = makeNode('a');  //one new node added list, previous is null
    linkedList.addToTail('a');

    expect(node1.prev).toEqual(null);

    var node2 = makeNode('b', node1);
    linkedList.addToTail('b');

    expect(node1.prev).toEqual(node2);
    expect(node2.prev).toEqual(null);
  });

  it("head and tail should equal new node if list is empty and one element is added to tail", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');

    expect(node.next).toEqual(null);

    expect(linkedList.removeHead()).toEqual(node.value);
  });

  it("should add two items to list, and tail should equal the newest node", function() {
    var node1 = makeNode('a');
    var node2 = makeNode('b', node1);
    
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(linkedList.tail).toEqual(node2);
  });

  it("should add two items to list, and node.next should equal the the first node", function() {
    var node1 = makeNode('a');
    var node2 = makeNode('b', node1);
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(node2.next).toEqual(node1);
    expect(linkedList.tail).toEqual(node2);
  });

  it("should return the value of single node added to linked list", function() {
    var node1 = makeNode('a');

    linkedList.addToTail('a');

    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should add two items to list, and node.next should equal the the first node", function() {
    var node1 = makeNode('a');
    var node2 = makeNode('b', node1);
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(node2.next).toEqual(node1);
    expect(linkedList.tail).toEqual(node2);
  });
  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });
});