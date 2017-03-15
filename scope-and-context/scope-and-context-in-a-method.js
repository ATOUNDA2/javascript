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

//calling foo.getCount() without any arguments
//should increment the scope PROPERTY (this is "context")
foo.getCount(); // 101
foo.getCount(); // 102
foo.getCount(); // 103

//calling foo.getCount() passing in 'scope' as an argument
//should increment the scope VARIABLE (this is "scope")
foo.getCount('scope'); // 1
foo.getCount('scope'); // 2
foo.getCount('scope'); // 3

//etc...
foo.getCount(); // 104
foo.getCount(); // 105
foo.getCount(); // 106

//etc...
foo.getCount('scope'); // 4
foo.getCount('scope'); // 5
foo.getCount('scope'); // 6


