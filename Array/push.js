var foo = ['a', 'b', 'c'];

//the push method adds the element
//to the end of the array,
//and returns the new length
foo.push('d'); // 4
foo.length // 4
console.dir(foo); // ['a', 'b', 'c', 'd']

foo.push('e'); // 5
foo.length // 5
console.dir(foo); // ['a', 'b', 'c', 'd', 'e']

foo.push('f'); // 6
foo.length; // 6
console.dir(foo); // ['a', 'b', 'c', 'd', 'e', 'f']
