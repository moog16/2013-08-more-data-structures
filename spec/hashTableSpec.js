describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
  it("should remove the value", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.remove(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
    expect(hashTable.retrieve(v1)).toEqual(undefined);
  });

  it("should remove two elements", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
    hashTable.remove(v1);
    hashTable.remove(v2);
    expect(hashTable.retrieve(v1)).toEqual(undefined);
    expect(hashTable.retrieve(v2)).toEqual(undefined);
  });

  it("should remove two elements", function(){

    for(var i=0; i<100; i++) {
      var k = 'val' + i;
      var v = i;
      hashTable.insert(k, v);
    }

    expect(hashTable.retrieve('val1')).toEqual(1);
    expect(hashTable.retrieve('val85')).toEqual(85);

    hashTable.remove('val1');
    hashTable.remove('val27');
    expect(hashTable.retrieve('val1')).toEqual(undefined);
    expect(hashTable.retrieve('val27')).toEqual(undefined);
    expect(hashTable.retrieve('val76')).toEqual(76);
  });
});
