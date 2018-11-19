import { lifecycle, compose as recompose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { PostRedux } from 'src/redux/reducers'
import View from './NewsFeedV'

export default recompose(
  connect(
    (state) => {
      const { posts } = PostRedux.getReducerState(state)
      const { postListFetching } = state.fetching
      return {
        posts,
        postListFetching
      }
    },
    (dispatch) => ({
      onGetPost: (startId) => dispatch(PostRedux.Creators.getPostListRequest(startId))
    })
  ),
  withHandlers({
    onNavigateSearch: (props) => () => {
      props.navigate('Search')
    },
    onNavigateInstagram: (props) => () => {
      props.navigate('Instagram')
    },
    onRefresh: (props) => () => {
      props.onGetPost()
    }
  }),
  lifecycle({
    componentDidMount () {
      this.props.onGetPost()
    }
  })
)(View)
