var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//the shift method removes the first element,
//and returns the removed element
foo.shift(); // a
foo.length // 5
console.dir(foo); // ['b', 'c', 'd', 'e', 'f']

foo.shift(); // b
foo.length // 4
console.dir(foo); // ['c', 'd', 'e', 'f']

foo.shift(); // c
foo.length // 3
console.dir(foo); // ['d', 'e', 'f']


