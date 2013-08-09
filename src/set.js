var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(str){
  if(!this.contains(str)) {
    this._storage[str] = str;
  }
};

setPrototype.contains = function(str){
  return this._storage[str] !== undefined ? true : false;
};

setPrototype.remove = function(str){
  if(this.contains(str)) {
    delete this._storage[str];
  }
};
