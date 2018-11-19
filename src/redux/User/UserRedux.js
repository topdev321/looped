import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { reducerPrefixFormat } from '../common'

const stateKey = 'user'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  user: null,
  session_key: null,
  sortType: null
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  loginSessionSuccess: ['user', 'session_key'],
  logoutSessionSuccess: null,

  getInfoRequest: null,
  getInfoSuccess: ['user'],

  updateInfoRequest: ['update'],
  updateInfoSuccess: ['update'],

  setSortType: ['sortType'],

  requestFailure: ['error']
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const loginSessionSuccess = (state, { user, session_key }) =>
  Immutable(state).merge({
    user,
    session_key
  })

const logoutSessionSuccess = (state) =>
  INITIAL_STATE

const getInfoRequest = R.identity

const getInfoSuccess = (state, { user }) =>
  ({
    ...state,
    user
  })

const updateInfoRequest = R.identity

const updateInfoSuccess = (state, { update }) =>
  Immutable(state).merge({
    user: {
      ...state.user,
      ...update
    }
  })

const setSortType = (state, { sortType }) =>
  Immutable(state).merge({
    sortType
  })

const requestFailure = R.identity

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SESSION_SUCCESS]: loginSessionSuccess,
  [Types.LOGOUT_SESSION_SUCCESS]: logoutSessionSuccess,

  [Types.GET_INFO_REQUEST]: getInfoRequest,
  [Types.GET_INFO_SUCCESS]: getInfoSuccess,

  [Types.UPDATE_INFO_REQUEST]: updateInfoRequest,
  [Types.UPDATE_INFO_SUCCESS]: updateInfoSuccess,

  [Types.SET_SORT_TYPE]: setSortType,

  [Types.REQUEST_FAILURE]: requestFailure
})

const reducerMap = { [stateKey]: reducer }

/* ------------- Selectors ------------- */
const getReducerState = (state) => (state[stateKey])
const isLoggedIn = (reducerState) => (reducerState.session_key != null)

/* ------------- Export ------------- */
export default {
  isLoggedIn,

  // default export
  INITIAL_STATE,
  Types,
  Creators,

  stateKey,
  getReducerState,
  reducerMap
}
