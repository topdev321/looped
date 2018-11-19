import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './header.Style'

export default class Header extends React.PureComponent {
  render () {
    const { leftIcon, rightIcon, leftButtonPressed, rightButtonPressed, title } = this.props
    return (
      <View style={styles.header}>
        { leftIcon &&
          <TouchableOpacity style={styles.icon} onPress={leftButtonPressed}>
            <Image source={leftIcon} />
          </TouchableOpacity>
        }
        {
          title &&
          <Text style={styles.titleHeader}>{title}</Text>
        }
        {
          rightIcon &&
          <TouchableOpacity style={styles.icon} onPress={rightButtonPressed}>
            <Image source={rightIcon} style={styles.icondim} />
          </TouchableOpacity>
        }
      </View>
    )
  }
}
