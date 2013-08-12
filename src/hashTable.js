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
  var slot = this._storage.get(i);

  if(slot === undefined) {  //check if this is the first value at the index of the hashTable
    this._storage.set(i, [k,v]);  //set an array containing key,value pair at index
  } else {  //if there is already a key/value pair (if there is a collision)
    if(this.slotContains(k)) {
      for(var j=0; j<slot.length; j=j+2) {
        if(slot[j] === k) {
          slot[j+1] = v;
        }
      }
    } else {
      slot = slot.concat([k,v]);
    }
    this._storage.set(i, slot);  //replace previous array value with newly formed key/value pair array
  }
  if(this.spaceFilled() >= 0.75) {
    this.expandMem();
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

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);  //the array of keys/values at given index i
  for(j=0; j<slot.length; j=j+2) {
    if(k === slot[j]) {
      slot.splice(j,2);
    }
  }
  this._storage.set(i, slot);
};

HashTable.prototype.spaceFilled = function() {
  var tally = 0;
  for(var i=0; i<this._limit; i++) {
    var slot = this._storage.get(i);
    if(slot !== undefined) {
      tally++;
    }
  }
  return (tally/this._limit);
};

HashTable.prototype.expandMem = function() {
  var keyValueHolder = [];
  this._storage.each(function(stor, idx) {
    if(stor !== undefined) {
      keyValueHolder = keyValueHolder.concat(stor);
    }
  });
  console.log(keyValueHolder);
  this._limit = this._limit*2;
  this._storage = makeLimitedArray(this._limit);

  for(var j=0; j<(keyValueHolder.length/2); j++) {
    var key = keyValueHolder[j]  //evens are keys
    var value = keyValueHolder[j+1]  //odds are values
    this.insert(key, value);
  }
};

HashTable.prototype.slotContains = function(key) {
  var i = getIndexBelowMaxForKey(key, this._limit);
  var slot = this._storage.get(i);
  for(var i=0; i<slot.length; i=i+2) {
    if(slot[i] === key) {
      return true;
    }
  }
  return false;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

//getIndexBelowMaxForKey(str, max)
//makeLimitedArray(limit)