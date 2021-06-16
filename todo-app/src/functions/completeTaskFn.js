import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
import completeTask from "../actions/completeTask"

export let checkClass = "not-checked-task"

export const completeTaskFn = (checkboxId, state) => {
    store.dispatch(completeTask(checkboxId))
}

export const addTodoFn = () => {
    const inputMessage = document.getElementById("add_todo_input").value
    alert("The input message : " + inputMessage)
    store.dispatch(addTodo(inputMessage))
}