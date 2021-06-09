import React from 'react'
import { clearListFn } from "../functions"

function ManageTodoList() {
    return (
        <div>
           <div className="buttons">
                <button onClick={clearListFn}>CLEAR LIST</button>
                <button>COMPLETE LIST</button>
            </div>                                                             
        </div>
    )
}

export default ManageTodoList
