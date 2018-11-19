import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { reducerPrefixFormat } from '../common'

const stateKey = 'userlogin'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  username: null
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  registerRequest: ['email', 'password', 'profile'],
  registerSuccess: ['email'],

  logoutRequest: null,
  logoutSuccess: null,

  forgotPasswordRequest: ['email'],
  forgotPasswordSuccess: null,

  requestFailure: ['error']
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const loginRequest = R.identity

const loginSuccess = (state, { email }) =>
  Immutable(state).merge({
    email
  })

const registerRequest = R.identity

const registerSuccess = (state, { email }) =>
  Immutable(state).merge({
    email
  })

const logoutRequest = R.identity

const logoutSuccess = R.identity

const forgotPasswordRequest = R.identity

const forgotPasswordSuccess = R.identity

const requestFailure = R.identity

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,

  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,

  [Types.FORGOT_PASSWORD_REQUEST]: forgotPasswordRequest,
  [Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,

  [Types.REQUEST_FAILURE]: requestFailure
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
