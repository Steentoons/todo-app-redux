const deleteTodo = (deleteIndex) => {
    return ({
        type: "DELETE_TODO",
        payload: deleteIndex
    })
}

export default deleteTodo