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

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should have removeHead = original node after two or more items added", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should return 2nd item after removing two items", function() {
    //debugger;
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeHead();

    expect(linkedList.removeHead()).toEqual('b');
  });

  it("contains should return false with nothing in the list", function() {
    expect(linkedList.contains('c')).toEqual(false);
  });

  it("contains should return true after adding 'a' in list", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(linkedList.contains('a')).toEqual(true);
  });

  it("contains should return true after adding 'c' as the second list in the item", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');

    expect(linkedList.contains('c')).toEqual(true);
  });

  it("adding to head properly adds to an empty list", function() {
    linkedList.addToHead('a');

    expect(linkedList.contains('a')).toEqual(true);
  });

  it("adding two nodes to head properly adds to an list", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');

    expect(linkedList.head.value).toEqual('b');
  });


  it("removing tail returns proper value", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    linkedList.removeTail();

    expect(linkedList.contains('a')).toEqual(false);
    expect(linkedList.contains('b')).toEqual(true);
  });

  it("performs the ultimate test", function() {
    for(var i=0; i<100; i++) {
      linkedList.addToHead('addHead' + i);
    }
    for(var j=300; j>250; j--) {
      linkedList.addToTail('addTail' + j);
    }
    for(var k=0; k< 20; k++) {
      linkedList.removeHead();
    }
    linkedList.removeTail();

    expect(linkedList.contains('addTail251')).toEqual(false);
    expect(linkedList.contains('addTail252')).toEqual(true);
    expect(linkedList.contains('addHead79')).toEqual(true);

  });
























});