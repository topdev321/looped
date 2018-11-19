import { compose as recompose, withHandlers, withProps, withState } from 'recompose'
import { connect } from 'react-redux'
import { PostRedux } from 'src/redux/reducers'
import View from './VideoEditorV'

export default recompose(
  connect(
    (state) => ({}),
    (dispatch) => ({
      onPostVideo: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video))
    })
  ),
  withProps(
    ({ navigation: { state: { params: { video } } } }) => ({videoUri: video})
  ),
  withState('isPause', 'setIsPause', true),
  withHandlers({
    onPlayVideo: (props) => () => {
      props.setIsPause(!props.isPause)
    },
    onUploadVideo: (props) => () => {
      props.onPostVideo(null, null, props.videoUri)
    }
  })
)(View)
