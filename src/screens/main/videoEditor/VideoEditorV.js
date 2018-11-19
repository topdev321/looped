import { Colors, Images } from 'src/assets'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import HeaderTab from 'src/screens/main/instagram/components/HeaderTab'
import React from 'react'
import Video from 'react-native-video'

const styles = {
  mainContainer: {
    flex: 1
  },
  wrapperPlayer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoPlayer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  playBtn: {
    position: 'absolute'
  }
}

export default class VideoEditorV extends React.PureComponent {
  cancelInstagram = () => {
    this.props.navigation.goBack()
  }

  render () {
    const { isPause, videoUri, onPlayVideo, onUploadVideo } = this.props
    return (
      <View style={styles.mainContainer}>
        <HeaderTab
          headerLeftAction={this.cancelInstagram}
          headerRight={`Next`}
          headerRightAction={onUploadVideo}
          rightStyle={{color: Colors.cornflowerBlue, fontSize: 14}}
          title={`Edit`}
        />
        {
          videoUri &&
          <TouchableOpacity style={styles.wrapperPlayer} onPress={onPlayVideo}>
            <Video
              repeat
              useTextureView
              paused={isPause}
              resizeMode='contain'
              source={{ uri: videoUri }}
              style={styles.videoPlayer}
            />
            {
              isPause &&
              <Image source={Images.common.playIcon} style={styles.playBtn} />
            }
          </TouchableOpacity>
        }
      </View>
    )
  }
}
