import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import createStore from './createStore'
// import { FirebaseReducer } from '$app/firebase'
import R from 'ramda'
import * as reducers from './reducers'
import * as sagas from './sagas'

/* ------------- Reducers ------------- */
const allReducers = R.pipe(
  R.values,
  R.map(R.prop('reducerMap')),
  // R.append({
  //   firebase: FirebaseReducer
  // }),
  R.mergeAll
)(reducers)

const rootReducer = combineReducers(allReducers)

/* ------------- Sagas ------------- */
const allSagas = R.pipe(
  R.values,
  R.flatten
)(sagas)

const rootSaga = function * () {
  yield all(allSagas)
}

/* ------------- Create Store ------------- */
export default createStore(rootReducer, rootSaga)
