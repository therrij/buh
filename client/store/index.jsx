
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'

import mySaga from '../actions/sagas'
import logger from './logger'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

    // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()
  
  // mount it on the Store
  const store = create(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
    initialState
  )

  sagaMiddleware.run(mySaga)

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
