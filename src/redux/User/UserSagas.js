import { call, cancelled, put, takeLatest } from 'redux-saga/effects'
import { LoginRedux, UserRedux } from 'src/redux/reducers'
import firebase from 'react-native-firebase'
import { FIREBASE_DB_PATHS } from 'src/constants'
import Validator from 'src/utilities/Validator'

const loginRequest = function * ({ email = '', password = '' }) {
  try {
    // check for valid inputs first
    if (email === '' && password === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Email and password are required.')))
    } else if (email === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Email is required.')))
    } else if (!Validator.isValidEmail(email)) { // check if correct email format
      yield put(LoginRedux.Creators.requestFailure(new Error('Email is invalid format.')))
    } else if (password === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Password is required.')))
    } else {
      const user = yield call(() => firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
        email,
        password
      ))
      yield put(UserRedux.Creators.getInfoSuccess(user))

      yield put(LoginRedux.Creators.loginSuccess(email))
    }
  } catch (e) {
    yield put(LoginRedux.Creators.requestFailure(e))
  } finally {
    if (yield cancelled()) {
      yield put(LoginRedux.Creators.requestFailure())
    }
  }
}

const registerRequest = function * ({ email = '', password = '', profile = {} }) {
  try {
    // check for valid inputs first
    if (email === '' && password === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Email and password are required.')))
    } else if (email === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Email is required.')))
    } else if (!Validator.isValidEmail(email)) { // check if correct email format
      yield put(LoginRedux.Creators.requestFailure(new Error('Email is invalid format.')))
    } else if (password === '') { // check if empty
      yield put(LoginRedux.Creators.requestFailure(new Error('Password is required.')))
    } else if (!profile.username || profile.username.length < 1) {
      yield put(LoginRedux.Creators.requestFailure(new Error('Username is required.')))
    } else {
      const userCredential = yield call(() => firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
        email,
        password
      ))

      const userRef = firebase.database().ref(`${FIREBASE_DB_PATHS.USERS}/${userCredential.user.uid}`)
      yield call(() => userRef.update({
        email: email,
        ...profile
      }))

      // yield call(() => userCredential.user.updateProfile(profile))

      yield put(LoginRedux.Creators.registerSuccess(email))
      yield put(LoginRedux.Creators.requestFailure(new Error('Sign Up is successful')))
    }
  } catch (e) {
    yield put(LoginRedux.Creators.requestFailure(e))
  } finally {
    if (yield cancelled()) {
      yield put(LoginRedux.Creators.requestFailure())
    }
  }
}

const logoutRequest = function * () {
  try {
    yield call(() => firebase.auth().signOut())
    yield put(UserRedux.Creators.getInfoSuccess(null))
  } catch (e) {
    yield put(LoginRedux.Creators.requestFailure(e))
  } finally {
    if (yield cancelled()) {
      yield put(LoginRedux.Creators.requestFailure())
    } else {
      yield put(LoginRedux.Creators.logoutSuccess())
    }
  }
}

// MARK: export sagas
export default [
// sorted alphabetically Reducers, same Types/Creators order inside Reducer
  takeLatest(LoginRedux.Types.LOGIN_REQUEST, loginRequest),
  takeLatest(LoginRedux.Types.REGISTER_REQUEST, registerRequest),
  takeLatest(LoginRedux.Types.LOGOUT_REQUEST, logoutRequest)
]
