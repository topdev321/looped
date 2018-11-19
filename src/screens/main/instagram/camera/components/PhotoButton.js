import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Colors } from 'src/assets'
import { compose as recompose } from 'recompose'

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
  }
}

const ButtonContainer = (props) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity style={styles.takePhoto} onPress={props.onTakePicture}>
      <View style={styles.insideButton} />
    </TouchableOpacity>
  </View>
)

export default recompose(
)(ButtonContainer)
