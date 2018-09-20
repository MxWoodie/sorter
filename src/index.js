class Sorter {
  constructor() {
    // your implementation
    this.myArray = [];
    this.compareFunction = function(a, b) {
      return a - b;
    };
  }

  add(element) {
    // your implementation
    this.myArray.push(element);
  }

  at(index) {
    // your implementation
    return this.myArray[index];
  }

  get length() {
    // your implementation
    return this.myArray.length;
  }

  toArray() {
    // your implementation
    return this.myArray;
  }

  sort(indices) {
    // your implementation
    let subArray = [];

    for(let i = 0; i < indices.length; i++){
      subArray.push(this.myArray[indices[i]]);
    }
    
    indices.sort(function(a, b) {
      return a - b;
    })
    subArray.sort(this.compareFunction);

    for(let i=0; i < indices.length; i++){
      this.myArray[indices[i]] = subArray[i];
    }

  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;