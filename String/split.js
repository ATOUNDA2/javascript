var testString = 'I want to be an array';

//the split method turns a string into an array.

console.info('if we pass an empty string as an argument, then every letter becomes an array element');
console.dir(testString.split(''));

console.info('if we pass an argument, then that determines where the string is split');
console.dir(testString.split(' '));

console.info('if we split on " be ", then whatever is on either side of it becomes an array element');
console.dir(testString.split(' be '));

console.info('...and you can do some pretty funky stuff.');
console.dir(testString.split('a'));
