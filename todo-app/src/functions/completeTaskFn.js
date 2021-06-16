import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
import completeTask from "../actions/completeTask"

export let checkClass = "not-checked-task"

export const completeTaskFn = (checkboxId, state) => {
    store.dispatch(completeTask(checkboxId))
}

export const addTodoFn = () => {
    const inputMessage = document.getElementById("add_todo_input").value
    store.dispatch(addTodo(inputMessage))
    document.getElementById("new_todo_div").className = "invisible-new-todo-div"
}