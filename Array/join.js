var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//the join method combines all elemetns of an array
//and returns them as a string

//the default separator is a comma: ','
foo.join(); // 'a,b,c,d,e,f'

console.warn('join using the default separator');
console.log(foo.join()); // 'a b c d e f'

//or you can provide a specific separator:

console.warn('join using a space');
console.log(foo.join(' ')); // 'a b c d e f'

console.warn('join using: ","');
console.log(foo.join(',')); // 'a,b,c,d,e,f'

console.warn('join using: "-"');
console.log(foo.join('-')); // 'a-b-c-d-e-f'

console.warn('join using: "/"');
console.log(foo.join('/')); // 'a/b/c/d/e/f'