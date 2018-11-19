import { compose as recompose, withHandlers, withState } from 'recompose'
import View from './StartV'

export default recompose(
  withState('tabIndex', 'setTabIndex', 0),
  withHandlers({
    onSignInTab: (props) => () => {
      props.setTabIndex(0)
    },
    onSignUpTab: (props) => () => {
      props.setTabIndex(1)
    }
  })
)(View)
