import { call, put } from 'redux-saga/effects'
import { LoginRedux, UserRedux } from '../reducers'
import { API_CONFIG } from '$app/constants'
import R from 'ramda'
import store from '$app/services/DataStore'

export const apiCall = function * (fn) {
  try {
    const response = yield call(fn)

    if (response._error) {
      let code = R.path(['code'], response.data)
      if (code === API_CONFIG.unauthorizedErrorCode) {
        // not authenticated --> logout flow in User Sagas
        store.setHeaders({ session_key: null })
        yield put(LoginRedux.Creators.logoutSuccess())
        yield put(UserRedux.Creators.logoutSessionSuccess())
        throw (new Error('Unauthorized. You must login again.'))
      } else {
        throw (response._error)
      }
    }

    return response
  } catch (e) {
    throw (e)
  }
}
