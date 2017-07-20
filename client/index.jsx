
import { Provider } from 'react-redux'
import { Router, Route, createRoutes } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'
import * as TodoActions from './actions/todos'

const store = configure()
const history = createHistory()

syncReduxAndRouter(history, store)

function mixDispatchToRoutes(routes) {
    return routes && routes.map(route => ({
        ...route,
        childRoutes: mixDispatchToRoutes(route.childRoutes),
        onEnter: route.onEnter && function (props, replaceState, cb) {
            store.dispatch(route.onEnter)
            cb()
        }
    }));
}

const rawRoutes = (
  <Route>
    <Route path="/" component={App} onEnter={TodoActions.fetchTodos} />
  </Route>
)

const routes = mixDispatchToRoutes(createRoutes(rawRoutes));

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
)
