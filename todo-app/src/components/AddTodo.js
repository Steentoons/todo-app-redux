import React from 'react'
import { startAddingTodos } from "../functions/addTodoFn"

function AddTodo() {
    return (
        <div>
            <div className="add-todo-button">
                <button onClick={startAddingTodos}>ADD TODO</button>
            </div>
        </div>
    )
}

export default AddTodo
