import { createStore } from "redux"
import manageTodoReducer from "../reducers/manageTodoReducer"

export const initialState = {
    task: []
}

export const store = createStore(
    manageTodoReducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())