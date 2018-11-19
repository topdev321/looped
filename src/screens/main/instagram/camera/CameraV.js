import { Dimensions, View } from 'react-native'
import { Colors } from 'src/assets'
import React from 'react'
import { RNCamera } from 'react-native-camera'
import { TabView } from 'react-native-tab-view'
import PhotoButton from './components/PhotoButton'
import VideoButton from './components/VideoButton'
import HeaderTab from '../components/HeaderTab'

export default class LibraryV extends React.PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Photo' },
      { key: 'second', title: 'Video' }
    ]
  }

  componentDidUpdate (nextProps) {
    if (this.props.cameraTabIndex !== nextProps.cameraTabIndex && this.state.index !== this.props.cameraTabIndex) {
      this.setState({
        index: this.props.cameraTabIndex
      })
    }
  }

  _onTakePicture = async () => {
    const { onNavigatePhotoEditor } = this.props
    if (this.props.camera) {
      try {
        const options = { quality: 1, fixOrientation: true, forceUpOrientation: true }
        const data = await this.props.camera.takePictureAsync(options)
        onNavigatePhotoEditor(data)
      } catch (e) {
        console.log('>>>> eroroor', e)
      }
    }
  }

  _renderTabbar = () => null

  _renderScene = (obj) => {
    switch (obj.route.key) {
      case 'first':
        return <PhotoButton focused={obj.navigationState.index === 0} onTakePicture={this._onTakePicture} />
      case 'second':
        return <VideoButton focused={obj.navigationState.index === 1} {...this.props} />
      default:
        return null
    }
  }

  render () {
    const { cancelInstagram, onNavigateVideoEditor } = this.props
    return (
      <View style={{flex: 1}}>
        <HeaderTab
          headerLeftAction={cancelInstagram}
          headerRight={this.state.index === 1 ? 'Next' : null}
          headerRightAction={onNavigateVideoEditor}
          // rightStyle={this.state.routes[this.state.index].rightStyle}
          title={this.state.routes[this.state.index].title}
        />
        <RNCamera
          flashMode={RNCamera.Constants.FlashMode.auto}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          permissionDialogTitle={'Permission to use camera'}
          ref={ref => {
            this.props.setCamera(ref)
          }}
          style={{flex: 2}}
          type={RNCamera.Constants.Type.back}
        />
        <TabView
          // initialLayout={{
          //   width: Dimensions.get('window').width,
          //   height: 200
          // }}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabbar}
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    )
  }
}

const styles = {
  takePhoto: {
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideButton: {
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    backgroundColor: Colors.white
  }
}
