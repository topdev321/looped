import { Colors, Images } from 'src/assets'
import { Image, Text, TextInput, View } from 'react-native'
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
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke,
    marginBottom: 10
  },
  search: {
    marginLeft: 0,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  formtext: {
    color: Colors.casper,
    fontWeight: 'bold'
  }
}

export default class LoginInput extends React.PureComponent {
  render () {
    const { value, onChangeText, imgIndex, ...otherProps } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Image source={selected[imgIndex]} style={{marginLeft: 2, marginRight: 20}} />
          <Text style={styles.formtext}>{this.props.text}</Text>
        </View>
        <TextInput
          autoCapitalize='none'
          placeholder={this.props.placeholder}
          {...otherProps}
          style={styles.textInput}
          underlineColorAndroid='transparent'
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    )
  }
}
