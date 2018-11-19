import { compose as recompose, withHandlers, withState } from 'recompose'
import View from './VideoV'

export default recompose(
  withState('camera', 'setCamera', null),
  withState('refreshTime', 'setRefreshTime', null),
  withState('refreshStatus', 'setRefreshStatus', null),
  withState('timeRecord', 'setTimeRecord', 0),
  withState('isRecord', 'setIsRecord', true),
  withHandlers({
    onChangeStatusRecord: (props) => () => {
      let recordStatus = setInterval(() => {
        props.setIsRecord(!props.isRecord)
      }, 1200)
      props.setRefreshStatus(recordStatus)
    }
  }),
  withHandlers({
    onPressInRecord: (props) => async () => {
      if (props.camera) {
        try {
          let recordData
          const recordOptions = {
          }
          try {
            recordData = await props.camera.recordAsync(recordOptions)
          } catch (e) {
            console.log('>>>>>> eerrr', e)
          }
          // props.onChangeStatusRecord()
          let refreshIntervalId = setInterval(() => {
            props.setTimeRecord((prev) => prev + 1)
            props.setIsRecord(((prev) => !prev))
          }, 1000)
          props.setRefreshTime(refreshIntervalId)
        } catch (e) {
          console.log('>>>> errr', e)
        }
      }
    },
    onPressOutRecord: (props) => () => {
      clearInterval(props.refreshTime)
      clearInterval(props.refreshStatus)
    }
  })
)(View)
