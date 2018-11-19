// take from reducers & put to Fetching reducer
import { LoginRedux, PostRedux, UserRedux } from '../reducers'
import { put, takeEvery } from 'redux-saga/effects'
import FetchingRedux from './FetchingRedux'

const started = function * ({ type }) {
  // __DEV__ && console.warn('started ', type)
  yield put(FetchingRedux.Creators.started())
}

const stopped = function * ({ type }) {
  // __DEV__ && console.warn('stopped ', type)
  yield put(FetchingRedux.Creators.stopped())
}

export default [
  takeEvery(PostRedux.Types.CREATE_POST_REQUEST, started),
  takeEvery(PostRedux.Types.CREATE_POST_SUCCESS, stopped),
  takeEvery(PostRedux.Types.GET_POST_REQUEST, started),
  takeEvery(PostRedux.Types.GET_POST_SUCCESS, stopped),
  takeEvery(PostRedux.Types.REQUEST_FAILURE, stopped),

  takeEvery(LoginRedux.Types.FORGOT_PASSWORD_REQUEST, started),
  takeEvery(LoginRedux.Types.FORGOT_PASSWORD_SUCCESS, stopped),
  takeEvery(LoginRedux.Types.LOGIN_REQUEST, started),
  takeEvery(LoginRedux.Types.LOGIN_SUCCESS, stopped),
  takeEvery(LoginRedux.Types.REGISTER_REQUEST, started),
  takeEvery(LoginRedux.Types.REGISTER_SUCCESS, stopped),
  takeEvery(LoginRedux.Types.LOGOUT_REQUEST, started),
  takeEvery(LoginRedux.Types.LOGOUT_SUCCESS, stopped),
  takeEvery(LoginRedux.Types.REQUEST_FAILURE, stopped),

  takeEvery(UserRedux.Types.GET_INFO_REQUEST, started),
  takeEvery(UserRedux.Types.GET_INFO_SUCCESS, stopped),
  takeEvery(UserRedux.Types.UPDATE_INFO_REQUEST, started),
  takeEvery(UserRedux.Types.UPDATE_INFO_SUCCESS, stopped),
  takeEvery(UserRedux.Types.REQUEST_FAILURE, stopped)
]
