import { FetchingRedux, PostRedux } from 'src/redux/reducers'
import { lifecycle, compose as recompose, withHandlers, withState } from 'recompose'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'src/utilities/pickImage'
import View from './ComposeV'

export default recompose(
  connect(
    (state) => {
      const { postCreateFetching } = FetchingRedux.getReducerState(state)
      return {
        postCreateFetching
      }
    },
    (dispatch) => ({
      onPost: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video))
    })
  ),
  withState('desc', 'updateDesc', ''),
  withState('paused', 'setPaused', true),
  withState('imageUri', 'setImageUri', null),
  withState('videoUri', 'setVideoUri', null),
  withHandlers({
    onPickerImage: (props) => async () => {
      try {
        const res = await ImagePicker({
          title: 'Select image',
          mediaType: 'photo',
          allowsEditing: true,
          noData: true
        })

        if (res.uri) {
          props.setImageUri(res)
          props.setVideoUri(null)
        }
      } catch (e) {
        Alert.alert('LoopedApp', e.message)
      }
    },
    onPickerVideo: (props) => async() => {
      try {
        const res = await ImagePicker({
          title: 'Select video',
          mediaType: 'video',
          allowsEditing: false,
          noData: true,
          videoQuality: 'high',
          durationLimit: 300
        })

        if (res.uri) {
          props.setVideoUri(res.uri)
          props.setImageUri(null)
        }
      } catch (e) {
        Alert.alert('LoopedApp', e.message)
      }
    }
  }),
  withHandlers({
    onPostStatus: (props) => () => {
      props.onPost(props.desc, props.imageUri, props.videoUri)
    },
    onCancelCompose: (props) => () => {
      props.navigation.navigate('Dashboard')
    },
    // Option Video
    onPlayVideo: (props) => () => {
      props.setPaused(!props.paused)
    }
  }),
  lifecycle({
    componentDidUpdate (prevProps) {
      if (this.props.postCreateFetching !== prevProps.postCreateFetching && this.props.postCreateFetching === false) {
        this.props.navigation.goBack()
      }
    }
  })
)(View)
