import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
import completeTask from "../actions/completeTask"

export const completeTaskFn = (checkboxId) => {
    store.dispatch(completeTask(checkboxId))
}

export const addTodoFn = () => {
    store.dispatch(addTodo())
}