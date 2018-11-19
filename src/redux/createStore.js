import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
// import { getFirebase } from 'react-redux-firebase'
// import { reactReduxFirebaseEnhancer } from '$app/firebase'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['app', 'fetching', 'error']
}

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  // middleware.push(client.middleware())

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- React Redux Firebase ------------- */
  // enhancers.push(reactReduxFirebaseEnhancer)

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  /* ------------- createStore ------------- */

  const store = createStore(persistedReducer, compose(...enhancers))

  const persistor = persistStore(store)

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
