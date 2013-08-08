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
  it("should add new node to empty list, and head should equal null", function() {
    expect(linkedList.addToTail('a')).toEqual(linkedList.head = null);
  });

  // add more tests here to test the functionality of linkedList
  it("should add new node to empty list, and tail should equal the new node", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');

    expect(linkedList.tail).toEqual(node);
  });

  it("should add new node to empty list, and node.next should equal the head", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');

    expect(node.next).toEqual(linkedList.head);
  });

  it("should add two items to list, and tail should equal the newest node", function() {
    var node1 = makeNode('a');
    var node2 = makeNode('b');
    
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(linkedList.tail).toEqual(node2);
  });

  it("should add two items to list, and node.next should equal the the first node", function() {
    var node1 = makeNode('a');
    var node2 = makeNode('b');
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