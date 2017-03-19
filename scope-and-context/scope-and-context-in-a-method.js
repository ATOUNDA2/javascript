//foo will be the return value of this IIFE
window.foo = (function () {
    //this is a VARIABLE
    var count = 0;

    //return an object
    return {
      //this is a PROPERTY
      count: 100,
      
      //this is a METOD
      getCount: function(type){
        return (type === 'scope') ? ++count : ++this.count;
      }
    };
})();

console.warn('calling foo.getCount() without any arguments should increment the count PROPERTY (this is "context")');
console.log(foo.getCount()); // 101
console.log(foo.getCount()); // 102
console.log(foo.getCount()); // 103

console.warn('but the count PROPERTY is exposed, so we can change it:');

foo.count = 75;

console.log(foo.getCount()); // 76
console.log(foo.getCount()); // 77
console.log(foo.getCount()); // 78

console.warn('calling foo.getCount() passing in "scope"" as an argument should increment the scope VARIABLE (this is "scope")');
console.log(foo.getCount('scope')); // 1
console.log(foo.getCount('scope')); // 2
console.log(foo.getCount('scope')); // 3

console.warn('switching back to context:');
console.log(foo.getCount()); // 76
console.log(foo.getCount()); // 77
console.log(foo.getCount()); // 78


console.warn('switching back to scope:');
console.log(foo.getCount('scope')); // 4
console.log(foo.getCount('scope')); // 5
console.log(foo.getCount('scope')); // 6


