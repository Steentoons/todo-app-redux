import React from 'react'

function TodoListDiv() {
    return (
        <div>
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
        </div>
    )
}

export default TodoListDiv
