import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'

const stateKey = 'error'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  errorsQueue: [],
  currentError: null
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  errorsQueueAppend: ['error'],
  currentErrorFinish: null
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const errorsQueueAppend = (state, { error }) => {
  let { errorsQueue = [], currentError } = state
  if (currentError && currentError.message === error.message) {
    // do nothing to reduce duplicate error
  } else if (errorsQueue.findIndex((item) => (item.message === error.message)) > -1) {
    // do nothing to reduce duplicate error
  } else {
    errorsQueue = errorsQueue.concat(error)
  }

  if (currentError) {
    return Immutable(state).merge({
      errorsQueue
    })
  } else {
    return Immutable(state).merge({
      errorsQueue: errorsQueue.slice(1),
      currentError: errorsQueue[0]
    })
  }
}

const currentErrorFinish = (state) => {
  const errorsQueue = state.errorsQueue
  if (errorsQueue.length > 0) {
    return Immutable(state).merge({
      errorsQueue: errorsQueue.slice(1),
      currentError: errorsQueue[0]
    })
  } else {
    return INITIAL_STATE
  }
}

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.ERRORS_QUEUE_APPEND]: errorsQueueAppend,
  [Types.CURRENT_ERROR_FINISH]: currentErrorFinish
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = (state) => (state[stateKey])

/* ------------- Export ------------- */
export default {
  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
