import { Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'src/assets'
import moment from 'moment'
import React from 'react'
import { RNCamera } from 'react-native-camera'

const styles = {
  takePhoto: {
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
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

export default class Video extends React.PureComponent {
  render () {
    const { isRecord, timeRecord, onPressInRecord, onPressOutRecord } = this.props
    return (
      <View style={{flex: 1}}>
        <RNCamera
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          permissionDialogTitle={'Permission to use camera'}
          ref={ref => {
            this.props.setCamera(ref)
          }}
          style={{flex: 2}}
          type={RNCamera.Constants.Type.back}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.timer}>
            <View style={isRecord ? styles.recordActive : styles.recordNormal} />
            <Text style={styles.showTime}>{moment.utc(timeRecord * 1000).format('mm:ss')}</Text>
          </View>
          <TouchableOpacity delayPressIn={300} style={styles.takePhoto} onPressIn={onPressInRecord} onPressOut={onPressOutRecord}>
            <View style={styles.insideButton} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
