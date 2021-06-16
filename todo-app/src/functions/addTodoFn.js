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
            const checkboxId = current.id + 1000

            const checkCorrectClass = () => {
                if(state[current.id].complete) 
                    return "checked-task"
                else
                    return "not-checked-task"
            }
            
            const checkboxState = checkCorrectClass()
            return (
                <div className="todo-div">
                    <div 
                        id={checkboxId} 
                        className={checkboxState} 
                        onClick={() => completeTaskFn(checkboxId)}
                    >
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="input-field">
                        The first todo
                    </div>
                    <div id={current.id} className="xbutton" onClick={() => deleteATodo(current.id)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            )})
    return (
        TodoComponents
    )
}