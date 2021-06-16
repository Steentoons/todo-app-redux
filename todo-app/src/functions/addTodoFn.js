import React from "react"

import { deleteATodo } from "./deleteTodos"

import { completeTaskFn } from "../functions/index"
   
export const genId = (state) => {
    return (
        Math.max(...state.map(({ id }) => id).concat( -1 )) + 1
    )
}

export const componentRenderer = (state) => {

    const TodoComponents = state.map((current) =>
        {
            const deleteId = current.id
            const checkboxId = current.id + 1000
            return (
                <div className="todo-div">
                    <div 
                        id={checkboxId} 
                        className={current.complete ? "checked-task" : "not-checked-task"} 
                        onClick={() => completeTaskFn(checkboxId, state)}
                    >
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="input-field">
                        {current.name}
                    </div>
                    <div id={deleteId} className="xbutton" onClick={() => deleteATodo(deleteId)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            )})
    return (
        TodoComponents
    )
}