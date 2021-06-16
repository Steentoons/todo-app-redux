const addTodo = (inputMessage) => {
    return ({
        type: "ADD_TODO",
        payload: inputMessage
    })
}

export default addTodo