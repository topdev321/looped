import { compose as recompose, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import { LoginRedux } from 'src/redux/reducers'
import View from './SignInV'

export default recompose(
  connect(
    (state) => ({}),
    (dispatch) => ({
      onSignInPress: (username, password) => dispatch(LoginRedux.Creators.loginRequest(username, password))
    })
  ),
  withState('username', 'setUsename', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onSignIn: (props) => () => {
      props.onSignInPress(props.username, props.password)
    }
  })
)(View)
