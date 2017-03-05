var foo = ['a', 'b', 'c', 'd', 'e', 'f'];

//the join method combines all elemetns of an array
//and returns them as a string
//the default separator is a comma: ','
foo.join(); // 'a,b,c,d,e,f'

//of you can provide a specific separator
foo.join(','); // 'a,b,c,d,e,f'
foo.join('-'); // 'a-b-c-d-e-f'
foo.join(' '); // 'a b c d e f'
foo.join('/'); // 'a/b/c/d/e/f'