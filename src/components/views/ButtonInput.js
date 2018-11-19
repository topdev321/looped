import { Colors, Images } from 'src/assets'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const selected = [
  Images.common.usernameIcon,
  Images.common.passwordIcon,
  Images.common.birthdayIcon,
  Images.common.emailIcon,
  Images.common.profileActive
]

const styles = {
  container: {
    backgroundColor: Colors.white,
    width: '100%'
  },
  search: {
    marginLeft: 0,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateInput: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke,
    marginTop: 10
  },
  title: {
    color: Colors.casper,
    fontWeight: 'bold'
  },
  text: {
    color: Colors.casper
  }
}

export default class ButtonInput extends React.PureComponent {
  render () {
    const { imgIndex, onPress, value, defaultValue, text } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Image source={selected[imgIndex]} style={{marginLeft: 2, marginRight: 20}} />
          <Text style={styles.title}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.dateInput} onPress={onPress}>
          <Text style={styles.text}>{value || defaultValue}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
