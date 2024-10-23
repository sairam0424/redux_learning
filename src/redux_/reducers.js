import * as actiontypes from 'ActionTypes.js'
let id = 0;
export default function reducer(state =[], action) {
    switch (action.type) {
        case (actiontypes.addtodo):
            return [
                ...state ,
                {
                    id: id++,
                    task: action.payload.task,
                    completed: false
                }

            ]


            

            case(actiontypes.removetodo):

            return state.filter(task =>  task.id !== action.id);

            case (actiontypes.taskcompleted):
                return state.map( task => {
                    return task.id!==action.id ? {...state , completed:!task.completed} : state

                })

                default:
                    return state;
        }

        

    }
    

