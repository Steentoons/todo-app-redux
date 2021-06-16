import React from 'react'

import { addTodoFn } from "../functions"

function AddTodoDiv () {
    return (
        <div>
            <div id="new_todo_div" className="invisible-new-todo-div">
                <div className="new-input-field">
                <input id="add_todo_input" type="text" />
                </div>
                <div className="okbutton" onClick={addTodoFn}>
                OK
                </div>
            </div>
        </div>
    )
}

export default AddTodoDiv
