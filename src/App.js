
import store from "./redux/store.js";
import { addTodo , removeTodo, task_completed } from "./redux/Actions.js";
// const store = require("./store");
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
 


// using the function curying to achieve this:  

// function parent() { 

//   return function child(){

//     return "Hello World";
//   }
// }

// let getMessage = parent();

// console.log(getMessage());


console.log("Redux Learning using the react(web pack as the bundler)");

store.dispatch(addTodo("New Task"))

store.dispatch(addTodo("New Task 2"));

store.dispatch(task_completed(1))

store.dispatch(removeTodo(0));

const state = store.getState();

console.log(state)