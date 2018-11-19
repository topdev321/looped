import { Colors, Images } from 'src/assets'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const styles = {
  headerContent: {
    width: '100%',
    height: 42,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    ...Platform.select({
      'ios': {
        justifyContent: 'center'
      },
      'android': {
        paddingLeft: 50,
        justifyContent: 'flex-start'
      }
    })
  },
  cancel: {
    fontSize: 14,
    color: Colors.black
  },
  next: {
    fontSize: 14,
    color: Colors.textGrey
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 14
  },
  headerButtonLeft: {
    position: 'absolute',
    left: 15
  },
  headerButtonRight: {
    position: 'absolute',
    right: 15
  },
  cancelIcon: {
    tintColor: Colors.black,
    padding: 5
  }
}

export default class HeaderTab extends React.PureComponent {
  render () {
    const { title, headerRight, headerLeftAction, rightStyle, headerRightAction } = this.props
    return (
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.headerButtonLeft} onPress={headerLeftAction}>
          {
            Platform.OS === 'ios'
            ? (
              <Text style={styles.cancel}>{`Cancel`}</Text>
            )
            : (
              <Image source={Images.common.cancelIcon} style={styles.cancelIcon} />
            )
          }
        </TouchableOpacity>
        {
          (typeof title === 'string')
          ? <Text style={styles.title}>{title}</Text>
          : title
        }
        {
          headerRight &&
          <TouchableOpacity style={styles.headerButtonRight} onPress={headerRightAction}>
            <Text style={(rightStyle) ? rightStyle : styles.next}>{headerRight}</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}
