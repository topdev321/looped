import { lifecycle, compose as recompose, withHandlers, withState } from 'recompose'
import View from './CameraV'
import { withNavigation } from 'react-navigation'

export default withNavigation(recompose(
  withState('camera', 'setCamera', null),
  withState('refreshTime', 'setRefreshTime', null),
  withState('refreshStatus', 'setRefreshStatus', null),
  withState('timeRecord', 'setTimeRecord', 0),
  withState('isRecord', 'setIsRecord', true),
  withState('videoUri', 'setVideoUri', null),
  withState('pressedOut', 'setPressedOut', true),
  withHandlers({
    onNavigatePhotoEditor: (props) => (data) => {
      props.navigation.navigate('PhotoEditor', { image: data })
    },
    onPressInRecord: (props) => async () => {
      if (props.camera && props.pressedOut) {
        try {
          props.setTimeRecord(0)
          props.setIsRecord(true)
          props.setPressedOut(false)
          let refreshIntervalId = setInterval(() => {
            props.setTimeRecord((prev) => prev + 1)
            props.setIsRecord(((prev) => !prev))
          }, 1000)
          props.setRefreshTime(refreshIntervalId)

          const recordOptions = {
          }
          const recordData = await props.camera.recordAsync(recordOptions)

          props.setVideoUri(recordData.uri)
        } catch (e) {
          console.log('>>>> errr', e)
        }
      }
    },
    onPressOutRecord: (props) => () => {
      clearInterval(props.refreshTime)
      props.camera.stopRecording()
      props.setPressedOut(true)
    },
    cancelInstagram: (props) => () => {
      props.navigation.goBack()
    },
    onNavigateVideoEditor: (props) => () => {
      props.videoUri && props.navigation.navigate('VideoEditor', {video: props.videoUri})
    }
  }),
  lifecycle({
    componentWillUnmount () {
      this.props.refreshTime && clearInterval(this.props.refreshTime)
    }
  })
)(View))
