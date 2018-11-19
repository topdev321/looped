import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { Colors } from 'src/assets'
import React from 'react'

const styles = {
  container: {

  },
  buttonImage: {
    borderRightWidth: 5,
    borderRightColor: Colors.white,
    borderBottomWidth: 5,
    borderBottomColor: Colors.white
  },
  imageItem: {
    width: (Dimensions.get('window').width - 20) / 3,
    height: 150
  }
}

export default class GameCell extends React.PureComponent {
  render () {
    const { itemUri, onPressGame } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonImage} onPress={onPressGame}>
          <Image resizeMode='cover' source={itemUri} style={styles.imageItem} />
        </TouchableOpacity>
      </View>
    )
  }
}
