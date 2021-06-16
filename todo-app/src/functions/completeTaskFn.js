import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
import completeTask from "../actions/completeTask"

export let checkClass = "not-checked-task"

export const completeTaskFn = (checkboxId, state) => {
    store.dispatch(completeTask(checkboxId))
}

export const addTodoFn = () => {
    store.dispatch(addTodo())
}