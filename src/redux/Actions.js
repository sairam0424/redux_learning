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