import { Alert, Dimensions, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Images } from 'src/assets'
import { lifecycle, compose as recompose, withHandlers, withState } from 'recompose'
import { PagerAndroid, PagerScroll, TabView } from 'react-native-tab-view'
import CameraTab from './camera/CameraVM'
import CameraTabBar from './components/CameraTabBar'
import { connect } from 'react-redux'
import LibraryTab from './library/LibraryVM'
import { PostRedux } from 'src/redux/reducers'
import React from 'react'

const styles = {
  titleButton: {
    ...Platform.select({
      'ios': {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      'android': {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
      }
    })
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 14
  },
  titleIcon: {
    tintColor: Colors.black,
    marginLeft: 5,
    width: 10,
    height: 6
  }
}

class InstagramTabView extends React.PureComponent {
  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'Library',
        name: (
          <TouchableOpacity style={styles.titleButton} >
            <Text style={styles.title}>{Platform.OS === 'ios' ? `Camera Roll` : `Gallery`}</Text>
            <Image source={Images.common.downArrow} style={styles.titleIcon} />
          </TouchableOpacity>
        ),
        next: 'Next',
        rightStyle: {color: Colors.cornflowerBlue, fontSize: 14}
      },
      { key: 'second', title: 'Photo', name: 'Photo', next: null }
    ],
    cameraTabIndex: 0
  }

  _renderScene = (obj) => {
    switch (obj.route.key) {
      case 'first':
        return <LibraryTab onSetTabSwipable={this.props.onSetTabSwipable} />
      case 'second':
        return <CameraTab cameraTabIndex={this.state.cameraTabIndex} />
      default:
        return null
    }
  }

  _renderLabel = (scene) => {
    return (
      <Text>{Platform.OS === 'ios' ? scene.route.title : (scene.route.title).toUpperCase()}</Text>
    )
  }

  _onTabPress = ({ route }) => {
    if (route.isVideoTab) {
      this.setState({
        index: 1,
        cameraTabIndex: 1
      })
    } else {
      this.setState({
        cameraTabIndex: 0
      })
    }
  }

  _renderTabbar = (props) => (
    <CameraTabBar
      {...props}
      indicatorStyle={{
        backgroundColor: Colors.transparent
      }}
      labelStyle={{color: Colors.black, textAlignVertical: 'center'}}
      renderLabel={this._renderLabel}
      style={{
        height: 42,
        backgroundColor: Colors.lightGrey
      }}
      tabStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        height: 42
      }}
      onTabPress={this._onTabPress}
    />
  )

  _renderPager = props => Platform.OS === 'ios' ? <PagerScroll swipeEnabled={this.props.tabSwipable} {...props} /> : <PagerAndroid swipeEnabled={this.props.tabSwipable} {...props} />

  render () {
    return (
      <View style={{flex: 1}}>
        <TabView
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
          navigationState={this.state}
          renderPager={this._renderPager}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabbar}
          tabBarPosition='bottom'
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    )
  }
}

export default recompose(
  connect(
    (state) => {
      const { postImage } = state.post
      return {
        postImage
      }
    },
    (dispatch) => ({
      onPostImage: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video)),
      onResetImage: (image) => dispatch(PostRedux.Creators.setPostImage(image))
    })
  ),
  withState('tabSwipable', 'onSetTabSwipable', true),
  withHandlers({
    onUploadImage: (props) => async () => {
      if (props.postImage) {
        try {
          props.onPostImage(null, props.postImage, null)
        } catch (e) {
          console.log('>>>> errrr', e)
        }
      } else {
        Alert.alert('Error', 'Image is required!')
      }
    }
  }),
  lifecycle({
    componentWillUnmount () {
      this.props.onResetImage(null)
    }
  })
)(InstagramTabView)
