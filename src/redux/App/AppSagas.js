import { all, put, takeLatest } from 'redux-saga/effects'
import AppRedux from './AppRedux'
// import R from 'ramda'
// import registerForPushNotificationsAsync from '$app/utilities/registerForPushNotificationsAsync'
// import store from '$app/services/DataStore'
// import { UserRedux } from '../reducers'

// const reduxStateRestored = function * () {
//   // restore session_key to API store
//   const { session_key } = yield select(UserRedux.getReducerState)
//   yield store.setHeaders({ session_key })
//   // app state restored
//   yield put(AppRedux.Creators.setAppStateRestored())
// }

const initializeApp = function * () {
  // cache assets and register push ...
  yield all([
    // put(AppRedux.Creators.cacheAssetsStart())
  ])
  yield put(AppRedux.Creators.setAppStateRestored())
}

// const getExpoPushTokenRequest = function * () {
//   try {
//     const token = yield registerForPushNotificationsAsync()
//     yield put(AppRedux.Creators.getExpoPushTokenFinish(null, token))
//   } catch (e) {
//     __DEV__ && console.warn(e.message)
//     yield put(AppRedux.Creators.getExpoPushTokenFinish(e, null))
//   }
// }

// const initCheck = function * () {
//   try {

//     // init redux
//     yield put(CoinDetailsRedux.Creators.getCoinTradesLocal())
//     yield put(WalletRedux.Creators.getWalletsLocal())
//     yield put(ExchangeApiRedux.Creators.getExchangeApiLocal())
//     yield put(CoinDetailsRedux.Creators.getTotalHoldings())
//   } catch (e) {
//     yield put(AppRedux.Creators.requestFailure(e))
//   } finally {
//     if (yield cancelled()) {
//       yield put(AppRedux.Creators.requestFailure())
//     }
//   }
// }

export default [
  // takeLatest(AppRedux.Types.SET_REDUX_STATE_RESTORED, reduxStateRestored),
  takeLatest(AppRedux.Types.INITIALIZE_APP, initializeApp)
  // takeLatest(AppRedux.Types.CACHE_ASSETS_START, cacheAssetsStart),
  // takeLatest(AppRedux.Types.GET_EXPO_PUSH_TOKEN_REQUEST, getExpoPushTokenRequest),
  // takeLatest(AppRedux.Types.INIT_CHECK, initCheck)
]
