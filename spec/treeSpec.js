describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("should add child successfully after adding new child", function() {
    var val = 'a';
    tree.addChild(val);
    expect(tree.contains(val)).toEqual(true);
  });

  it("should add two or more children successfully", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    expect(tree.contains('b')).toEqual(true);
  });

  it("should contain nothing in an empty tree", function() {
    expect(tree.contains('b')).toEqual(false);
  });

  it("should contain 0 children in a tree with no children", function() {
    expect(tree.children.length).toEqual(0);
  });

  it("should add two or more children successfully, and add one grandchild", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[0].addChild('d');
    expect(tree.contains('d')).toEqual(true);
  });

  it("should add two or more children successfully, and add two or more grandchildren", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    tree.children[1].addChild('f');
    expect(tree.contains('d')).toEqual(true);
    expect(tree.contains('e')).toEqual(true);
    expect(tree.contains('f')).toEqual(true);
  });

  it("should add two or more children successfully, and add two or more grandchildren", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    tree.children[1].addChild('f');
    expect(tree.contains('g')).toEqual(false);
    expect(tree.contains('1')).toEqual(false);
    expect(tree.contains('hello')).toEqual(false);
  });

  it("should count the correct number of children in children array", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    tree.children[1].addChild('f');
    expect(tree.children.length).toEqual(3);
  });

  it("should count the correct number of children in children array", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    tree.children[1].addChild('f');
    expect(tree.children[0].children.length).toEqual(2);
  });

  it("should have correct parent at grandchild", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    var childA = tree.children[0];
    var grandChildE = tree.children[0].children[1];

    tree.children[1].addChild('f');

    expect(grandChildE.parent.value).toEqual('a');
    expect(grandChildE.parent).toEqual(childA);
  });

  it("should return null if checking root parent tree", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    var grandChildE = tree.children[0].children[1];

    tree.children[1].addChild('f');

    expect(tree.parent).toEqual(null);
  });

  it("should contain a null value at tree root", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    var grandChildE = tree.children[0].children[1];
    var childA = tree.children[0];

    tree.children[1].addChild('f');

    childA.removeFromParent();

    expect(tree.contains(undefined)).toEqual(true);
  });

  it("should contain b and f on first element of child array, and not contain a, d, or e", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    tree.children[0].addChild('d');
    tree.children[0].addChild('e');

    var grandChildE = tree.children[0].children[1];
    var childA = tree.children[0];

    tree.children[1].addChild('f');

    childA.removeFromParent();

    expect(tree.children[0].contains('f')).toEqual(true);
    expect(tree.children[0].contains('b')).toEqual(true);
    expect(tree.contains('a')).toEqual(false);
    expect(tree.contains('e')).toEqual(false);
  });
});
