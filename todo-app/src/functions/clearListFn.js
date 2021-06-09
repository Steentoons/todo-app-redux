import { store } from "../store/reduxStore"
import clearList from "../actions/clearList"

export const clearListFn = () => {
    store.dispatch(clearList())
}