var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//the pop method removes the last element,
//and returns the removed element
foo.pop(); // f
foo.length // 5
console.dir(foo); // ['a', 'b', 'c', 'd', 'e']

foo.pop(); // e
foo.length // 4
console.dir(foo); // ['a', 'b', 'c', 'd']

foo.pop(); // c
foo.length // 3
console.dir(foo); // ['a', 'b', 'c']
