import { genId } from "../functions/addTodoFn"

const manageTodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return ({
                ...state,
                task: [
                    ...state.task,
                    {
                        name: "This is the name",
                        id: genId(state.task),
                        complete: false
                    }
                ]
            })
        case "CLEAR_LIST":
            return ({
                ...state,
                task: []
            })

        case "DELETE_TODO":
            return ({
                ...state,
                task: state.task.filter((indexNum) => indexNum.id !== action.payload)
            })

        case "COMPLETE_TASK":
            {
                const newIndex = action.payload - 1000

                const arrayIndex = state.task.findIndex(item => item.id === newIndex)
                const newArray = [...state.task]
                newArray[arrayIndex].complete = true

                return ({
                    ...state,
                    task: newArray
                })
            }

        default:
            return state
    }
}

export default manageTodoReducer