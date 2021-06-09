import React from 'react'
import { store } from '../store/reduxStore'
import addTodo from "../actions/addTodo"

import { addTodoFn } from "../functions/addTodoFn"

function AddTodoDiv () {
    return (
        <div>
            <div className="new-todo-div">
                <div className="new-input-field">
                <input type="text" />
                </div>
                <div className="okbutton" onClick={addTodoFn}>
                OK
                </div>
            </div>
        </div>
    )
}

export default AddTodoDiv
