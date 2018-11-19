import { ErrorRedux, FetchingRedux, UserRedux } from 'src/redux/reducers'
import { connect } from 'react-redux'
import { compose as recompose } from 'recompose'
import View from './AppNavigationV'

export default recompose(
  connect(
    (state, ownProps) => {
      const { fetching } = FetchingRedux.getReducerState(state)
      const { currentError } = ErrorRedux.getReducerState(state)
      const { user } = UserRedux.getReducerState(state)

      return {
        fetching,
        currentError,
        isLoggedIn: !!user
      }
    },
    (dispatch, ownProps) => ({
      onErrorFinish: () => dispatch(ErrorRedux.Creators.currentErrorFinish())
    })
  )
)(View)
