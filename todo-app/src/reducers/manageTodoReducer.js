const manageTodoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return (
                {
                    ...state,
                    task: [...state.task, {name: "This is the name", id: state.task.length, complete: false}]
                }
            )
        default:
            return state    
    }
}

export default manageTodoReducer