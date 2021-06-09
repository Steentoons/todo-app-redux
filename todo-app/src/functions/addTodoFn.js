import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"

export const addTodoFn = () => {
    store.dispatch(addTodo())
}