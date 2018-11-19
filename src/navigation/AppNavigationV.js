import { ActivityIndicator, Alert, View } from 'react-native'
import { ApplicationStyles, Colors } from 'src/assets'
import React, { Component } from 'react'
import LoginStack from './LoginStack'
import MainStack from './MainStack'

const { screen: screenStyles } = ApplicationStyles

export default class AppNavigationV extends Component {
  componentWillReceiveProps (nextProps) {
    // alert error
    nextProps.currentError && nextProps.currentError !== this.props.currentError && Alert.alert(
      'LoopedApp',
      nextProps.currentError.message || nextProps.currentError,
      [
        {
          text: 'OK',
          onPress: () => {
            this.props.onErrorFinish()
          }}
      ],
      {
        onDismiss: () => {
          this.props.onErrorFinish()
        }
      }
    )
  }

  render () {
    const { style, isLoggedIn, fetching } = this.props
    return (
      <View style={[screenStyles.mainContainer, style]}>
        {
          isLoggedIn
          ? <MainStack />
          : <LoginStack />
        }

        {
          fetching &&
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              flex: 1,
              backgroundColor: Colors.black,
              opacity: 0.4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ActivityIndicator
              animating
              color={Colors.white}
              size='large'
            />
          </View>
        }
      </View>
    )
  }
}
