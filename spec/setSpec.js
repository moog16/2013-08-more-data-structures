describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should contain value 'a' after adding 'a' to set", function() {
    set.add("a");
    expect(set.contains('a')).toEqual(true);
  });

  it("should not contain value 'd' after adding 'a', 'b', and 'c' to set", function() {
    set.add("a");
    set.add("b");
    set.add("c");
    expect(set.contains('d')).toEqual(false);
  });

  it("should contain value 'c' after adding 'a', 'b', and 'c' to set", function() {
    set.add("a");
    set.add("b");
    set.add("c");
    expect(set.contains('b')).toEqual(true);
    expect(set.contains('c')).toEqual(true);
  });

  it("should not contain 'c' after removing 'c' from set", function() {
    set.add("a");
    set.add("b");
    set.add("c");
    set.remove('c');

    expect(set.contains('c')).toEqual(false);
  });

  it("should not contain 'c' after removing 'c' from set", function() {
    set.add("a");
    set.add("b");
    set.add("c");
    set.remove('c');

    expect(set.contains('c')).toEqual(false);
  });

  it("should not contain 'c' after removing 'c' from set", function() {
    set.add("a");
    set.add("b");
    set.add("c");
    set.remove('c');

    expect(set.contains('c')).toEqual(false);
  });
});