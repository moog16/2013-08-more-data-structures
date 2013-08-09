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

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should set head on first item added", function() {
    var node = makeNode('a');
    linkedList.addToTail('a');
    expect(linkedList.head).toEqual(node);
  });

  it("should have list.head = original node after two items added", function() {
    var node1 = makeNode('a');
    linkedList.addToTail('a');

    var node2 = makeNode('b');
    var tail = node1;
    tail.next = node2;
    linkedList.addToTail('b');

    expect(linkedList.head).toEqual(node1);
  });

  it("should list.tail = newNode after two items added", function() {
    //debugger;
    var node1 = makeNode('a');
    linkedList.addToTail('a');

    var node2 = makeNode('b');
    var tail = node1;
    tail.next = node2;
    linkedList.addToTail('b');

    expect(linkedList.tail).toEqual(node2);
  });

  it("should list.next = null after two items added", function() {
    var node1 = makeNode('a');
    linkedList.addToTail('a');

    var node2 = makeNode('b');
    var tail = node1;
    tail.next = node2;
    linkedList.addToTail('b');

    expect(linkedList.next).toEqual(null);
  });


  
});