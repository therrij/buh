function isAction(item) {
  return typeof item === 'object' && item.type
}

function isFunction(item) {
  return typeof item === 'function'
}

function isPromise(item) {
  return typeof item === 'object' && typeof item.then === 'function'
}

export default function mixStoreToRoutes(store, routes) {
    return routes && routes.map(route => ({
        ...route,
        childRoutes: mixStoreToRoutes(store, route.childRoutes),
        onEnter: route.onEnter && function (props, replaceState, cb) {
            if (isAction(route.onEnter)) {
              store.dispatch(route.onEnter)
              cb()
            } else if (isFunction(route.onEnter)) {
              const rtn = route.onEnter(store.dispatch, props)

              if (isPromise(rtn)) {
                rtn
                  .then(() => cb(null))
                  .catch(cb)
              } else {
                cb(null)
              }
            }
        }
    }));
}