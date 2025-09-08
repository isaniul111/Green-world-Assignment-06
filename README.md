1) What is the difference between var, let, and const?
**Answer: 
var: is the old way. Its scope is either global or limited to the function it's in. This can lead to unexpected behavior and bugs, so it's generally best to avoid it in new code.

let: is the modern, flexible option. It's block-scoped, meaning it only exists within the curly braces {} it was declared in, like in a for loop or an if statement. You can also reassign its value later.

const: is for constants. It's also block-scoped, but once you declare a value, you cannot reassign it. Use const whenever you know a variable's value won't change, which helps prevent bugs and makes your code's intent clearer.

2) What is the difference between map(), forEach(), and filter()?
**Answer:
forEach(): is for simple iteration. It loops through each item and runs a function, but it doesn't return a new array. Use it when you just need to do something with each item, like logging it to the console or performing a side effect.

map(): is for transforming an array. It creates a new array by calling a function on every item in the original array. The new array will have the same number of elements, but with a different value.

filter(): is for selecting items. It creates a new array containing only the items that pass a specific test (the function you provide must return true). The original array remains unchanged.

3) What are arrow functions in ES6?
**Answer:
Arrow functions are a modern, more concise way to write function expressions. They use the => syntax.

The main benefits are:

Shorter Syntax: For simple, single-expression functions, you can omit the return keyword and the curly braces, which makes the code much cleaner.

Lexical this: Unlike regular functions, arrow functions don't have their own this binding. They automatically inherit the this value from the code around them, which solves a common source of bugs in JavaScript.

4) How does destructuring assignment work in ES6?
**Answer:
Destructuring is a powerful syntax that lets you "unpack" values from arrays and properties from objects into distinct variables. It makes your code more readable and reduces the need for repeated property access.

Object Destructuring: Instead of writing const name = user.name; and const age = user.age;, you can simply write const { name, age } = user; to get both values at once.

Array Destructuring: It works the same way for arrays, using the item's position. For example, const [first, second] = ['a', 'b']; is a concise way to declare two new variables.

5) Explain template literals in ES6. How are they different from string concatenation?
**Answer:
They’re the cool upgrade to strings. Use backticks ` instead of quotes, and you can:
Insert variables directly with ${}
Write multi-line strings without \n
Example:const sentence = `Hello, my name is ${name} and I am ${age} years old.`;
