import { all, call, cancelled, put, select, takeLatest } from 'redux-saga/effects'
import { FetchingRedux, PostRedux, UserRedux } from 'src/redux/reducers'
import { cropUploadImage } from 'src/utilities/cropImage'
import firebase from 'react-native-firebase'
import { FIREBASE_DB_PATHS } from 'src/constants'
import moment from 'moment'
import R from 'ramda'
import uploadAws3 from 'src/utilities/uploadAw3'

const createPostRequest = function * ({ text, image, video }) {
  try {
    const checkArr = [text, image, video]
    const checkHasElement = checkArr.some((element) => {
      return !!element
    })
    if (!checkHasElement) {
      throw new Error('Post need at least 1 of text, image or video!')
    }
    yield put(FetchingRedux.Creators.setCreatePostFetching(true))
    const { user: userCredential } = yield select((state) => UserRedux.getReducerState(state))
    const postRef = firebase.database().ref(`${FIREBASE_DB_PATHS.POST}`)

    let postObj = {
      uid: userCredential.user.uid,
      text,
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      createdDate: moment().valueOf(),
      media: {
        image: false,
        video: false
      }
    }

    if (image) {
      const resizeImage = yield call(() => cropUploadImage(image))

      const file = {
        uri: resizeImage.uri,
        name: new Date().toISOString() + resizeImage.name,
        type: 'image/*'
      }

      const urlStorage = yield call(() => uploadAws3(file))
      if (urlStorage.status !== 201) throw new Error('Failed to upload image to S3')

      // let fileName = new Date().toISOString() + image.replace(/[:./]/g, '_')
      // const uploadedFile = yield call(() => firebase
      //   .storage()
      //   .ref(`/post/image/${fileName}`)
      //   .putFile(image)
      // )

      postObj.media.image = urlStorage.body.postResponse.location
    }

    if (video) {
      const createVideo = {
        uri: video,
        name: new Date().toISOString() + video,
        type: 'video/*'
      }

      const urlVideoStorage = yield call(() => uploadAws3(createVideo))
      if (urlVideoStorage.status !== 201) throw new Error('Failed to upload video to S3')

      postObj.media.video = urlVideoStorage.body.postResponse.location
    }

    yield call(() => postRef.push(postObj))
    yield put(PostRedux.Creators.createPostSuccess())
    yield put(PostRedux.Creators.getPostListRequest())
  } catch (e) {
    yield put(PostRedux.Creators.requestFailure(e))
  } finally {
    yield put(FetchingRedux.Creators.setCreatePostFetching(false))
    if (yield cancelled()) {
      yield put(PostRedux.Creators.requestFailure())
    }
  }
}

const getPostRequest = function * ({ postId }) {
  try {
    const postRef = firebase.database().ref(`${FIREBASE_DB_PATHS.POST}/${postId}`)
    const postRes = yield call(() => postRef.once('value'))
    let post = postRes.val()

    if (post && post.uid) {
      const uidRef = firebase.database().ref(`${FIREBASE_DB_PATHS.USERS}/${post.uid}`)
      const userRes = yield call(() => uidRef.once('value'))
      const postUser = userRes.val()
      post.user = postUser
    }

    yield put(PostRedux.Creators.getPostSuccess(post))
  } catch (e) {
    yield put(PostRedux.Creators.requestFailure(e))
  } finally {
    if (yield cancelled()) {
      yield put(PostRedux.Creators.requestFailure())
    }
  }
}

const getPostListRequest = function * ({ startId = '', pageSize = 30 }) {
  try {
    yield put(FetchingRedux.Creators.setPostListFetching(true))
    const postsRef = firebase.database().ref(`${FIREBASE_DB_PATHS.POST}`).limitToLast(pageSize)
    const postsRes = yield call(() => postsRef.once('value'))
    let posts = postsRes.val()

    if (posts) {
      const userCalls = R.mapObjIndexed((post, index) => {
        const uidRef = firebase.database().ref(`${FIREBASE_DB_PATHS.USERS}/${post.uid}`)
        return call(() => uidRef.once('value'))
      }, posts)

      const usersResponse = yield all(userCalls)

      R.forEachObjIndexed((userRes, postId) => {
        const user = userRes.val()
        if (user) {
          posts[postId].user = user
        }
      }, usersResponse)
    }

    const returnArr = R.values(posts).sort((a, b) => b.createdDate - a.createdDate)

    yield put(PostRedux.Creators.getPostListSuccess(returnArr))
  } catch (e) {
    yield put(PostRedux.Creators.requestFailure(e))
  } finally {
    yield put(FetchingRedux.Creators.setPostListFetching(false))
    if (yield cancelled()) {
      yield put(PostRedux.Creators.requestFailure())
    }
  }
}

// MARK: export sagas
export default [
// sorted alphabetically Reducers, same Types/Creators order inside Reducer
  takeLatest(PostRedux.Types.CREATE_POST_REQUEST, createPostRequest),
  takeLatest(PostRedux.Types.GET_POST_REQUEST, getPostRequest),
  takeLatest(PostRedux.Types.GET_POST_LIST_REQUEST, getPostListRequest)
]
