import Colors from './Colors'
import Metrics from './Metrics'

// common component & text styles across app

export default {
  screen: {
    // generic
    none: {
      height: 0,
      width: 0
    },
    mainContainer: {
      // backgroundColor: Colors.darkPurple,
      flex: 1
    },
    container: {
      backgroundColor: Colors.transparent,
      flex: 1
    },
    separatorColumn: {
      alignSelf: 'stretch',
      backgroundColor: Colors.separator,
      width: Metrics.width.verticalLine
    },
    separatorRow: {
      alignSelf: 'stretch',
      backgroundColor: Colors.separator,
      height: Metrics.height.horizontalLine
    },
    absoluteFill: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0
    },
    blurFill: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    imageFill: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      height: null,
      width: null
    },
    // specific
    statusBar: {
      // height: Metrics.height.statusBar,
      // backgroundColor: Colors.darkPurple,
      zIndex: 1
    },
    navStackCard: {
      backgroundColor: Colors.darkPurple
    },
    navBarContainer: {
      backgroundColor: Colors.darkPurple,
      height: Metrics.height.navBar
    },
    navBarLeftAccessory: {
      alignItems: 'center',
      backgroundColor: Colors.transparent,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      // marginVertical: Metrics.margin.base,
      minWidth: Metrics.width.navBarAccessory,
      paddingLeft: Metrics.margin.navBarAccessory,
      paddingRight: Metrics.margin.base
    },
    navBarRightAccessory: {
      alignItems: 'center',
      backgroundColor: Colors.transparent,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      // marginVertical: Metrics.margin.base,
      minWidth: Metrics.width.navBarAccessory,
      paddingLeft: Metrics.margin.base,
      paddingRight: Metrics.margin.navBarAccessory
    },
    navBarCenter: {
      alignItems: 'stretch',
      backgroundColor: Colors.transparent,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      // marginVertical: Metrics.margin.base,
      paddingHorizontal: Metrics.margin.base
    },
    button: {
      backgroundColor: Colors.transparent,
      borderRadius: Metrics.radius.buttonCorner,
      justifyContent: 'center'
    }
  },
  text: {
    normal: {
      color: Colors.blue,
      margin: Metrics.margin.small
    },
    navBarTitle: {
      alignSelf: 'center',
      color: Colors.white,
      fontWeight: 'bold'
    },
    normalTextInput: {
      textAlign: 'left',
      fontSize: 13,
      flex: 1
    }
  }
}
