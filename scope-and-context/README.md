## [Scope and Context in a Method](#scope-and-context-in-a-method)

### Sometimes the concepts of scope and context are misunderstood in JavaScript. It is important to understand that they are not the same thing.

In JavaScript, the concept of scope refers to the visibility of variables. On the other hand, the concept of context is used to mean: ***“the object to which a method belongs”***. That may sound like an odd statement, but it is accurate. The only time we care about context is inside a function. Period. Inside a function, the **“this”** keyword is very important. It refers to the object to which that function belongs. In other words, every function is a property of some object. In client-side JavaScript (i.e. in a browser), if you declare a function at the top of your code, then that function is a property of the **window**  object. So, inside of that function, the **“this”** keyword refers to the window object. If you create a new object ***(let’s call it: “myObject”)*** and add a method ***(i.e. a property that happens to be a function)***, then inside of that function, the **“this”** keyword refers to the object ***(i.e. “myObject”)***.

### How to run the example code:

Copy the contents of the file: **scope-and-context-in-a-method.js** and paste it into your JavaScript console.

