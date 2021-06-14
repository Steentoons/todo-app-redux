import { genId } from "../functions/addTodoFn"

const manageTodoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return (
                {
                    ...state,
                    task: [
                        ...state.task, 
                        {
                            name: "This is the name", 
                            id: genId(state.task), 
                            complete: false
                    }]
                }
            )
        case "CLEAR_LIST":
            return (
                {
                    ...state,
                    task: []
                }
            )
            
        case "DELETE_TODO":
            return (
                {
                    ...state,
                    task: state.task.filter((indexNum) => indexNum.id !== action.payload)
                }
            )   

        default:
            return state    
    }
}

export default manageTodoReducer

