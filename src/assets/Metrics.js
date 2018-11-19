import { Dimensions, Platform, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  dimensions: {
    icons: {
      xs: 8,
      tiny: 15,
      small: 20,
      medium: 30,
      large: 45,
      xl: 50,
      navBar: 24
    },
    images: {
      small: 20,
      medium: 40,
      large: 60
    }
  },
  height: {
    horizontalLine: StyleSheet.hairlineWidth,
    statusBar: (Platform.OS === 'ios') ? 20 : 24,
    navBar: (Platform.OS === 'ios') ? 64 : 68,
    searchBar: 30,
    tabbar: 32
  },
  margin: {
    base: 8,
    double: 20,
    small: 4,
    navBarAccessory: 40
  },
  os: {
    isIOS: (Platform.OS === 'ios'),
    isAndroid: (Platform.OS === 'android')
  },
  radius: {
    buttonCorner: 4,
    modalCorner: 20,
    tabbarCorner: 10
  },
  screen: {
    width,
    height
  },
  width: {
    navBarAccessory: 60,
    verticalLine: StyleSheet.hairlineWidth,
    drawer: Math.min(300, 4 / 5 * width)
  },
  thickness: {
    line: StyleSheet.hairlineWidth
  }
}
