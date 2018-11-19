import { compose as recompose, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import { LoginRedux } from 'src/redux/reducers'
import moment from 'moment'
import View from './SignUpV'

export default recompose(
  connect(
    (state) => ({}),
    (dispatch) => ({
      onSignUpPress: (email, password, profile) => dispatch(LoginRedux.Creators.registerRequest(email, password, profile))
    })
  ),
  withState('email', 'setEmail', ''),
  withState('username', 'setUsename', ''),
  withState('password', 'setPassword', ''),
  withState('dateVisible', 'setDateVisible', false),
  withState('datePicker', 'setDatePicker', null),
  withHandlers({
    onHandleDate: (props) => () => {
      props.setDateVisible(!props.dateVisible)
    },
    onConfirmDate: (props) => (date) => {
      props.setDateVisible(false)
      props.setDatePicker(moment(date).format('MM/DD/YY'))
    }
  }),
  withHandlers({
    onSignUp: (props) => () => {
      let profile = {
        dob: props.datePicker ? moment(props.datePicker).toDate() : null,
        username: props.username,
        createdDate: new Date()
      }
      props.onSignUpPress(props.email, props.password, profile)
    }
  })
)(View)
