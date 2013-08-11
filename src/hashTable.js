var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);  //index from the hash function
  if(this._storage.get(i) === undefined) {  //check if this is the first value at the index of the hashTable
    this._storage.set(i, [k,v]);  //set an array containing key,value pair at index
  } else {  //if there is already a key/value pair (if there is a collision)
    var oldValue = this._storage.get(i);  //get that array of storage, and set oldValue to that array
    var newValue = oldValue.concat([k,v]);  //concat new key/value pair to oldValue array
    this._storage.set(i, newValue);  //replace previous array value with newly formed key/value pair array
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);  //the array of keys/values at given index i
  for(var j=0; j<slot.length; j=j+2) {
    if(k === slot[j]) {
      return slot[j+1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);  //the array of keys/values at given index i
  for(j=0; j<slot.length; j=j+2) {
    if(k === slot[j]) {
      slot.splice(j,2);
    }
  }
  this._storage.set(i, slot);
};



// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

//getIndexBelowMaxForKey(str, max)
//makeLimitedArray(limit)