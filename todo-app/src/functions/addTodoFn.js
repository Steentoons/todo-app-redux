import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
// import deleteTodo from "../actions/deleteTodo"
import React from "react"

import { deleteATodo, deleteATodoChild } from "./deleteTodos"

export const addTodoFn = () => {
    store.dispatch(addTodo())
}

export const genId = (state) => {
    return (
        Math.max(...state.map(({ id }) => id).concat( -1 )) + 1
    )
}

// const deletingTodo = () => {
//     store.dispatch(deleteTodo())
// }

export const componentRenderer = (state) => {

    const TodoComponents = state.map((current, index) =>
        {
            return (
                <div className="todo-div">
                    <div className="checkbox">
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="input-field">
                        The first todo
                    </div>
                    <div id={current.id} className="xbutton" onClick={() => deleteATodo(current.id)}>
                        <i className="fas fa-times" onClick={deleteATodoChild}></i>
                    </div>
                </div>
            )})
    return (
        TodoComponents
    )
}