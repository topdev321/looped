import { Colors, Images } from 'src/assets'
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import renderIf from 'src/components/libs/renderIf'
import SignIn from './sign-in/SignInVM'
import SignUp from './sign-up/SignUpVM'

const MyKBAView = Platform.select({
  ios: KeyboardAvoidingView,
  android: View
})

export default class StartV extends React.PureComponent {
  render () {
    const { tabIndex, onSignInTab, onSignUpTab } = this.props
    return (
      <MyKBAView enabled behavior={'padding'} style={styles.contentContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={Images.common.logo1}
              style={styles.logoApp}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableWithoutFeedback onPress={onSignInTab}>
                <View style={styles.text}>
                  <Text style={styles.title}>{`LOGIN`}</Text>
                  <View style={tabIndex === 0 ? styles.indicatorActive : styles.indicator} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={onSignUpTab}>
                <View style={styles.text}>
                  <Text style={styles.title}>{`SIGN UP`}</Text>
                  <View style={tabIndex === 1 ? styles.indicatorActive : styles.indicator} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              {renderIf((tabIndex === 0),
                <SignIn />
              )}
              {renderIf((tabIndex === 1),
                <SignUp />
              )}
            </View>
          </View>
        </ScrollView>
      </MyKBAView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  contentContainer: {
    backgroundColor: Colors.white,
    flex: 1
  },
  text: {
    marginTop: 6,
    marginLeft: 8,
    marginRight: 8
  },
  title: {
    color: Colors.black
  },
  logoApp: {
    marginTop: 40,
    flex: 1
  },
  indicator: {
    height: 2,
    backgroundColor: Colors.white,
    marginTop: 2
  },
  indicatorActive: {
    height: 2,
    backgroundColor: Colors.pigmentGreen,
    marginTop: 2
  }
}
