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
});