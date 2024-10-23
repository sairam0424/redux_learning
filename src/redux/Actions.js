import { type } from "os";
import * as Actiontypes from "./ActionTypes.js";
export const addTodo = (task) =>{

   return { 
    type:Actiontypes.ADD_TODO,
    payload: { task}
   }

}

export const removeTodo = (id)=>{

    return {
    type : Actiontypes.REMOVE_TODO,
    payload : { id }
    }
}

export const task_completed = (id) =>{
    return { 
        type  :Actiontypes.TASK_COMPLETED,
        payload : {id}
    }
}

export const fetchTodo = () =>{

    return async function(dispatch , getState) {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        // console.log(response)

         const task = await response.json();

         dispatch(addTodo(task.title));
    }
}