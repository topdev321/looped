// take from reducers & put to Error reducer
import { AppRedux, LoginRedux, PostRedux, UserRedux } from '../reducers'
import { put, takeEvery } from 'redux-saga/effects'
import ErrorRedux from './ErrorRedux'

const requestFailure = function * ({ error }) {
  if (!error) { return }
  if (typeof error === 'string') {
    yield put(ErrorRedux.Creators.errorsQueueAppend(new Error(error)))
  } else if (typeof error.message === 'string') {
    yield put(ErrorRedux.Creators.errorsQueueAppend(error))
  }
}

export default [
  takeEvery(AppRedux.Types.REQUEST_FAILURE, requestFailure),
  takeEvery(LoginRedux.Types.REQUEST_FAILURE, requestFailure),
  takeEvery(PostRedux.Types.REQUEST_FAILURE, requestFailure),
  takeEvery(UserRedux.Types.REQUEST_FAILURE, requestFailure)
]
