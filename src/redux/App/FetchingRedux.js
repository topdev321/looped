import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reducerPrefixFormat } from '../common'

const stateKey = 'fetching'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  fetching: false,
  fetchingCount: 0,
  postCreateFetching: false,
  postListFetching: false,

  videoFocused: false
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  started: null,
  stopped: null,

  setCreatePostFetching: ['fetching'],
  setPostListFetching: ['fetching'],

  setVideoFocused: ['focused']
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const started = (state) =>
  Immutable(state).merge({
    fetching: (state.fetchingCount + 1 > 0),
    fetchingCount: state.fetchingCount + 1
  })

const stopped = (state) =>
  Immutable(state).merge({
    fetching: (state.fetchingCount - 1 > 0),
    fetchingCount: state.fetchingCount > 0 ? state.fetchingCount - 1 : 0
  })

const setCreatePostFetching = (state, { fetching }) =>
  Immutable(state).merge({
    postCreateFetching: fetching
  })

const setPostListFetching = (state, { fetching }) =>
  Immutable(state).merge({
    postListFetching: fetching
  })

const setVideoFocused = (state, { focused }) =>
  Immutable(state).merge({
    videoFocused: focused
  })

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTED]: started,
  [Types.STOPPED]: stopped,

  [Types.SET_CREATE_POST_FETCHING]: setCreatePostFetching,
  [Types.SET_POST_LIST_FETCHING]: setPostListFetching,

  [Types.SET_VIDEO_FOCUSED]: setVideoFocused
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
