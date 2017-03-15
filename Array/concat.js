//--------------

var myArray1 = ["a", "b", "c"],
    myArray2 = ["d", "e", "f"],
    result = myArray1.concat(myArray2);

//concat returns a new array
console.dir(result); // ["a","b","c","d","e","f"];

//the original arrays are not changed
console.dir(myArray1); // ["a","b","c"];
console.dir(myArray2); // ["d","e","f"];

//--------------

var myArray1 = ["a", "b", "c"];

//you can also pass a single value
//and it will return a new array with that value appended
console.dir(myArray1.concat("hello")); // ["a","b","c","hello"];

//--------------

var myArray1 = ["a", "b", "c"];

//you can also pass more than one value
//and it will return a new array with those values appended
console.dir(myArray1.concat("hello", "goodbye")); // ["a","b","c","hello","goodbye"];

//--------------








