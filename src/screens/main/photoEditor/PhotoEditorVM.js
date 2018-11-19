import { FetchingRedux, PostRedux } from 'src/redux/reducers'
import { lifecycle, compose as recompose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import View from './PhotoEditorV'
import { withNavigation } from 'react-navigation'

export default withNavigation(recompose(
  connect(
    (state) => {
      const { postCreateFetching } = FetchingRedux.getReducerState(state)
      const { postImage } = PostRedux.getReducerState(state)
      return {
        postCreateFetching,
        postImage
      }
    },
    (dispatch) => ({
      onPostImage: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video))
    })
  ),
  withProps(
    ({ navigation: { state: { params: { image } } } }) => ({ takePhoto: image })
  ),
  withHandlers({
    onUploadImage: (props) => () => {
      if (!props.takePhoto.width && !props.takePhoto.height) {
        Image.getSize(
          props.takePhoto.uri,
          (imgWidth, imgHeight) => {
            const file = {
              uri: props.takePhoto.uri,
              width: imgWidth,
              height: imgHeight
            }
            props.onPostImage(null, file, null)
          },
          (err) => {
            console.log('>>> eorrr', err)
          }
        )
      } else {
        props.onPostImage(null, props.takePhoto, null)
      }
    }
  }),
  lifecycle({
  })
)(View))
