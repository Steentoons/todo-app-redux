import { store } from "../store/reduxStore"
import deleteTodo from "../actions/deleteTodo"

export const deleteATodo = (index) => {
    store.dispatch(deleteTodo(index))
}