import { store } from "../store/reduxStore"
import deleteTodo from "../actions/deleteTodo"

export const deleteATodo = (index) => {
    // e.stopPropagation()

    store.dispatch(deleteTodo(index))
    alert(index)
}

export const deleteATodoChild = (index) => {
    // e.stopPropagation()
    // store.dispatch(deleteTodo(e.target.parentElement.id))
}