import { store } from "../store/reduxStore"
import addTodo from "../actions/addTodo"
import React from "react"


export const addTodoFn = () => {
    store.dispatch(addTodo())
}

export const componentRenderer = (state) => {

    const TodoComponents = state.map(() =>
        <div className="todo-div">
            <div className="checkbox">
                <i className="fas fa-check"></i>
                </div>
                <div className="input-field">
                The first todo
                </div>
                <div className="xbutton">
                <i className="fas fa-times"></i>
                </div>
            </div>
        )
    return (
        TodoComponents
    )
}