import * as Actiontypes from "./ActionTypes.js";
let id = 0;
function reducer (state = [] , action){ 

    switch (action.type){
        case (Actiontypes.ADD_TODO ):
            return [...state , 
                {
                    id:id++,
                    task:action.payload.task,
                    completed:false
                }
            ]

        case (Actiontypes.REMOVE_TODO):
            return state.filter(todo =>todo.id!==action.payload.id);

        case (Actiontypes.TASK_COMPLETED):
            return state.map(task => {

                return action.payload.id === task.id ? {...task , completed:!task.completed} : task } 
            )
        

        default:
            return state;
    }
}

export default reducer