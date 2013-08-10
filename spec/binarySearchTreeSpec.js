describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("left branch should equal null if node values are less than tree root", function() {
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.left).toEqual(null);
  });

  it("contains should return true if we insert a number", function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);

    expect(binarySearchTree.contains(4)).toEqual(true);
    expect(binarySearchTree.contains(5)).toEqual(true);
    expect(binarySearchTree.contains(1)).toEqual(true);
    expect(binarySearchTree.contains(3)).toEqual(true);
  });
  
  it("should have correct left and right nodes", function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(14);
    binarySearchTree.insert(80);
    binarySearchTree.insert(102);
    binarySearchTree.insert(183);
    binarySearchTree.insert(7);
    expect(binarySearchTree.left.value).toEqual(2);
    expect(binarySearchTree.right.value).toEqual(14);
  });

  it("should have correct left and right nodes", function() {
    var callback = function(value) {
      return value * 2;
    };
    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(14);
    binarySearchTree.insert(80);
    binarySearchTree.insert(102);
    binarySearchTree.insert(183);
    binarySearchTree.insert(7);
    binarySearchTree.insert(40);
    binarySearchTree.insert(34);

    binarySearchTree.depthFirstLog(callback);

    expect(binarySearchTree.left.value).toEqual(4);
    expect(binarySearchTree.right.value).toEqual(28);
    expect(binarySearchTree.value).toEqual(10);
    expect(binarySearchTree.left.right.value).toEqual(6);
    expect(binarySearchTree.right.right.value).toEqual(160);
    expect(binarySearchTree.right.left.value).toEqual(14);
    expect(binarySearchTree.right.right.right.value).toEqual(204);
  });
});