import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { FetchingRedux } from 'src/redux/reducers'
import { Colors } from 'src/assets'
import { connect } from 'react-redux'
import { compose as recompose, withPropsOnChange } from 'recompose'

const styles = {
  takePhoto: {
    width: 68,
    height: 68,
    borderRadius: 68 / 2,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideButton: {
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    backgroundColor: Colors.white
  },
  timer: {
    flexDirection: 'row'
  },
  showTime: {
    marginBottom: 30
  },
  recordActive: {
    width: 5,
    height: 5,
    marginTop: 6,
    marginRight: 5,
    borderRadius: 5 / 2,
    backgroundColor: Colors.red
  },
  recordNormal: {
    width: 5,
    height: 5,
    marginTop: 6,
    marginRight: 5,
    borderRadius: 5 / 2,
    backgroundColor: Colors.transparent
  }
}

const VideoButtonContainer = (props) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View style={styles.timer}>
      <View style={props.isRecord ? styles.recordActive : styles.recordNormal} />
      <Text style={styles.showTime}>{moment.utc(props.timeRecord * 1000).format('mm:ss')}</Text>
    </View>
    <TouchableOpacity delayPressIn={200} style={styles.takePhoto} onPressIn={props.onPressInRecord} onPressOut={props.onPressOutRecord}>
      <View style={styles.insideButton} />
    </TouchableOpacity>
  </View>
)

export default recompose(
  connect(
    (state) => {
      return {
      }
    },
    (dispatch) => ({
      onSetVideoFocused: (focused) => dispatch(FetchingRedux.Creators.setVideoFocused(focused))
    })
  ),
  withPropsOnChange(
    ['focused'],
    (props) => {
      props.onSetVideoFocused(props.focused)
    }
  )
)(VideoButtonContainer)
