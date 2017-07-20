const logger = store => next => action => {
    let previousState = store.getState()
    next(action)
    let nextState = store.getState()
    console.log(action.type, {
      action,
      previousState,
      nextState
    })
}

export default logger