const completeTask = (deleteIndex) => {

    return ({
        type: "COMPLETE_TASK",
        payload: deleteIndex
    })
}

export default completeTask