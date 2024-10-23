import * as actiontypes from "ActionTypes.js"

export const addTodo = (task) => {

    return { 
        type : actiontypes.addTodo,
        payload  :{task}

    }
}

export const  removeTodo = (id) => {

    return {

        type:actiontypes.removeTodo,
        payload : {id}
    }
}

export const task_completed = (id)=>{
    return {

        type : actiontypes.task_completed,
        payload  : {id}
    }
}