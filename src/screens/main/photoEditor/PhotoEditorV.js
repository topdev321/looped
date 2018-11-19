import { Dimensions, Image, View } from 'react-native'
import { Colors } from 'src/assets'
import HeaderTab from 'src/screens/main/instagram/components/HeaderTab'
import React from 'react'

const styles = {
  container: {
    flex: 1
  },
  showPhoto: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  }
}

export default class PhotoEditorV extends React.PureComponent {
  cancelInstagram = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const { takePhoto, onUploadImage } = this.props
    return (
      <View style={styles.container}>
        <HeaderTab
          headerLeftAction={this.cancelInstagram}
          headerRight={`Next`}
          headerRightAction={onUploadImage}
          rightStyle={{color: Colors.cornflowerBlue, fontSize: 14}}
          title={`Edit`}
        />
        <Image source={takePhoto} style={styles.showPhoto} resizeMode='contain' />
      </View>
    )
  }
}
