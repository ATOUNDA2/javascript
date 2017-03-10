var foo = ['d', 'e', 'f'];

//the unshift method adds the element 
//to the beginning of the array,
//and returns the new length
foo.unshift('c'); // 4
foo.length // 4
console.dir(foo); // ['c', d', 'e', 'f']

foo.unshift('b'); // 5
foo.length // 5
console.dir(foo); // ['b', c', d', 'e', 'f']

foo.unshift('a'); // 6
foo.length; // 6
console.dir(foo); // ['a', 'b', 'c', 'd', 'e', 'f']