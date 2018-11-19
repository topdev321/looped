import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import { reducerPrefixFormat } from '../common'

const stateKey = 'post'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  posts: [],
  postDetail: null,
  postCreateFetching: false,
  postListFetching: false,
  postImage: null
})

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  createPostRequest: ['text', 'image', 'video'],
  createPostSuccess: ['post'],

  getPostRequest: ['postId'],
  getPostSuccess: ['post'],

  getPostListRequest: ['startId', 'pageSize'],
  getPostListSuccess: ['posts'],

  setPostImage: ['image'],

  requestFailure: ['error']
}, {
  prefix: reducerPrefixFormat(stateKey)
})

/* ------------- Reducers ------------- */
const createPostRequest = R.identity

const createPostSuccess = R.identity

const getPostRequest = R.identity

const getPostSuccess = (state, { post }) =>
  Immutable(state).merge({
    postDetail: post
  })

const getPostListRequest = R.identity

const getPostListSuccess = (state, { posts }) =>
  Immutable(state).merge({
    posts
  })

const setPostImage = (state, { image }) =>
  Immutable(state).merge({
    postImage: image
  })

const requestFailure = R.identity

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_POST_REQUEST]: createPostRequest,
  [Types.CREATE_POST_SUCCESS]: createPostSuccess,

  [Types.GET_POST_REQUEST]: getPostRequest,
  [Types.GET_POST_SUCCESS]: getPostSuccess,

  [Types.GET_POST_LIST_REQUEST]: getPostListRequest,
  [Types.GET_POST_LIST_SUCCESS]: getPostListSuccess,

  [Types.SET_POST_IMAGE]: setPostImage,

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
