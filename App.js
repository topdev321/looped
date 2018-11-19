/* eslint-disable react/no-multi-comp */
import { ApplicationStyles, Metrics } from 'src/assets'
import { connect, Provider } from 'react-redux'
import { lifecycle, compose as recompose } from 'recompose'
import { Platform, StatusBar, View } from 'react-native'
import AppNavigationVM from 'src/navigation/AppNavigationVM'
import { AppRedux } from 'src/redux/reducers'
import createdStore from 'src/redux'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

const { persistor, store } = createdStore

// App Container
const { screen: screenStyles } = ApplicationStyles

const App = recompose(
  connect(
    (state) => {
      const appState = AppRedux.getReducerState(state)
      const isAppReady = AppRedux.isReady(appState)

      return {
        isReady: isAppReady
      }
    },
    (dispatch) => ({
      initializeApp: () => dispatch(AppRedux.Creators.initializeApp())
    })
  ),
  lifecycle({
    componentWillMount () {
      this.props.initializeApp()
    }
  })
)(({ isReady, initializeApp }) => (
  // !isReady
  // ? (
  //   <KeepAwake>
  //     <AppLoading />
  //   </KeepAwake>
  // )
  <View style={screenStyles.mainContainer}>
    {
      Metrics.os.isIOS &&
      <StatusBar barStyle='default' />
    }
    <View style={{...screenStyles.statusBar, height: Platform.select({ios: 20, android: 0})}} />
    <AppNavigationVM />
  </View>
))

// Entry
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
