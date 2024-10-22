console.log("Redux Learning using the react(web pack as the bundler");

//functional programming : 

   // pure function : it will always return the same output for a given input and won't have any side effects.


//higher order functions : 

// function parent() {

//   function child(){

//      return "Hello World"
//   } 

//   return child();
// } 

// const getMessage = parent();

// console.log(getMessage)



//using closure to get this : 

// function parent() { 

//   function child() {

//     return "Hello World"; 
//   }

//   return child;
// }

// let getMessage = parent(); 

// console.log(getMessage());
 


//using the function curying to achieve this:  

// function parent() { 

//   return function child(){

//     return "Hello World";
//   }
// }

// let getMessage = parent();

// console.log(getMessage());