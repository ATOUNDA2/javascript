//--------------

var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//the 1st argument is the start position
//and the 2nd argument is the number 
//of elements to remove.
//and the removed elements are returned in an array
console.dir(foo.splice(0, 1)); // ['a']
console.info(foo.length); // 5

foo.splice(0, 1); // ['b']
console.info(foo.length); // 4
//--------------

var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//start at the beginning, and remove two elements
console.dir(foo.splice(0, 2)); // ['a', 'b']
console.info(foo.length); // 4

//--------------

var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//start on the third elemet, and remove three elements
console.dir(foo.splice(2, 3)); // ['c', 'd', 'e']
console.info(foo.length); // 3

//--------------

var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//when passing no arguments,
//nothing is removed
console.dir(foo.splice()); // []
console.info(foo.length); // 6

//--------------

var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//when the start position is a negative number
//it represents a "from the end" position
console.dir(foo.splice(-4, 3)); // ['c', 'd', 'e']
console.info(foo.length); // 3
console.dir(foo) // ["a", "b", "f"]
//--------------






