
import { Provider } from 'react-redux'
import { Router, Route, createRoutes } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'
import mixStoreToRoutes from './mixStoreToRoutes'
import * as TodoActions from './actions/todos'

const store = configure()
const history = createHistory()

syncReduxAndRouter(history, store)



const rawRoutes = (
  <Route>
    <Route path="/" component={App} onEnter={TodoActions.fetchTodos}>
      <Route path=":id" onEnter={(dispatch, {params}) => { console.log(params.id); dispatch(TodoActions.fetchTodo)}} />
    </Route>
  </Route>
)

const routes = mixStoreToRoutes(store, createRoutes(rawRoutes));

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
)
