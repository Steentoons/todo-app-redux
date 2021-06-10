import React from 'react'
import { componentRenderer } from "../functions/addTodoFn"

import { useSelector } from "react-redux"

function TodoListDiv() {
    const state = useSelector(state => state.task)

    return (
        <div>
            <ul>
                {componentRenderer(state)}
            </ul>
        </div>
    )
}

export default TodoListDiv
