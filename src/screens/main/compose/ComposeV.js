import { Colors, Images } from 'src/assets'
import { Dimensions, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Header } from 'src/screens/components'
import React from 'react'
import Video from 'react-native-video'

export default class Compose extends React.PureComponent {
  onDismissKeyboard = () => {
    Keyboard.dismiss()
  }

  render () {
    const {
      onPickerImage,
      desc,
      updateDesc,
      onPostStatus,
      imageUri,
      onCancelCompose,
      onPickerVideo,
      videoUri,
      paused,
      onPlayVideo
    } = this.props
    return (
      <TouchableWithoutFeedback onPress={this.onDismissKeyboard}>
        <View style={styles.container}>
          <Header
            leftButtonPressed={onCancelCompose}
            leftIcon={Images.common.cancelIcon}
            rightButtonPressed={onPostStatus}
            rightIcon={Images.common.postIcon}
          />
          <ScrollView>
            <View style={styles.compose}>
              <Image source={Images.common.profilePic} style={styles.profile_thumbnail} />
              <Text
                style={{marginLeft: 15, fontSize: 18}}
              >
                {`Catherine Harris`}
              </Text>
            </View>
            <TextInput
              multiline
              placeholder={`What's on your mind ?`}
              style={styles.editor}
              underlineColorAndroid={Colors.transparent}
              value={desc}
              onChangeText={updateDesc}
            />
            {
              imageUri &&
              <View style={{ paddingHorizontal: 15 }}>
                <Image
                  source={{ uri: imageUri.uri }}
                  style={styles.imagePost}
                />
              </View>
            }
            {
              videoUri &&
              <View>
                <TouchableOpacity style={styles.wrapperVideo} onPress={onPlayVideo}>
                  <Video
                    paused={paused}
                    repeat={paused}
                    source={{ uri: videoUri }}
                    style={styles.videoPost}
                  />
                  {
                    paused &&
                    <Image source={Images.common.playIcon} style={styles.playBtn} />
                  }
                </TouchableOpacity>
              </View>
            }
            <View style={styles.option}>
              <TouchableOpacity style={styles.picker} onPress={onPickerImage}>
                <Image source={Images.common.pictureIcon} style={styles.iconPost} />
                <Text style={styles.text}>{`Image`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.picker} onPress={onPickerVideo}>
                <Image source={Images.common.videoIcon} style={styles.iconPost} />
                <Text style={styles.text}>{`Video`}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  editor: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    minHeight: 20,
    fontSize: 16
  },
  profile_thumbnail: {
    height: 40,
    width: 40
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.white
  },
  option: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: Colors.whiteSmoke
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke
  },
  text: {
    marginLeft: 10,
    color: Colors.textGrey
  },
  imagePost: {
    width: '100%',
    height: 200,
    paddingHorizontal: 20
  },
  videoPost: {
    width: Dimensions.get('window').width,
    height: 200
  },
  wrapperVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playBtn: {
    position: 'absolute'
  },
  iconPost: {
    width: 50,
    height: 50
  }
}
