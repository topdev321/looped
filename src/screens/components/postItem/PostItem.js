import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Images } from 'src/assets'
import { compose as recompose, withHandlers, withState } from 'recompose'
import moment from 'moment'
import React from 'react'
import styles from './post.Style'
import Video from 'react-native-video'
import FastImage from 'react-native-fast-image'

class PostItem extends React.PureComponent {
  onLoad = (event) => {
    this.adjustSize(event.nativeEvent.width, event.nativeEvent.height)
  }

  onLoadImage = () => {
    const { setLoading } = this.props
    setLoading(true)
  }

  onLoadEnd = () => {
    const { setLoading } = this.props
    setLoading(false)
  }

  adjustSize = (sourceWidth, sourceHeight) => {
    const { onSetSize, size: { width, height } } = this.props

    let ratio = 1

    if (width && height) {
      ratio = Math.min(width / sourceWidth, height / sourceHeight)
    } else if (width) {
      ratio = width / sourceWidth
    } else if (height) {
      ratio = height / sourceHeight
    }

    onSetSize({
      width: width,
      height: sourceHeight * ratio
    })
  }

  render () {
    const { posts, onPlayVideo, paused, loading, size } = this.props
    return (
      <View style={styles.postItem}>
        <View style={styles.header}>
          <TouchableOpacity>
            {
              posts.user.avatarUrl
              ? <Image source={{uri: posts.user.avatarUrl}} style={styles.avatar} />
              : <Image source={Images.common.noAvatar} style={styles.avatar} />
            }
          </TouchableOpacity>
          <View style={styles.timeLine}>
            {
              (posts.user.username)
              ? <Text style={styles.nameUser}>{posts.user.username}</Text>
              : (
                (posts.user.email)
                ? <Text style={styles.nameUser}>{posts.user.email}</Text>
                : <Text style={styles.nameUser}>{`Name User`}</Text>
              )
            }
            {
              (posts.createdDate)
              ? <Text style={styles.postTime}>{ moment(posts.createdDate).calendar()}</Text>
              : <Text style={styles.postTime}>{`mm/dd/yy`}</Text>
            }
          </View>
          <TouchableOpacity>
            <Image source={Images.common.downArrow} style={styles.postOption} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {
            !!posts.text && posts.text.length > 0 &&
            <View style={styles.wrapperDesc}>
              <Text style={styles.desc}>{posts.text}</Text>
            </View>
          }
          <View style={styles.playerMedia}>
            {
              (posts.media) &&
                posts.media.image
                ? (
                  <FastImage
                    source={{uri: posts.media.image, priority: FastImage.priority.high}}
                    style={[styles.media, size]}
                    onLoad={this.onLoad}
                    onLoadEnd={this.onLoadEnd}
                    onProgress={this.onLoadImage}
                  />
                )
                : (posts.media.video) &&
                (
                  <View>
                    <TouchableOpacity style={styles.wrapperVideo} onPress={onPlayVideo}>
                      <Video
                        repeat
                        paused={paused}
                        source={{ uri: posts.media.video }}
                        style={styles.videoPost}
                      />
                      {
                        paused &&
                        <Image source={Images.common.playIcon} style={styles.playBtn} />
                      }
                    </TouchableOpacity>
                  </View>
                )
            }
            {
              loading && <ActivityIndicator color={Colors.daisyBush} size='large' style={styles.loading} />
            }
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.postInfo}>
            <TouchableOpacity style={styles.subRow}>
              <Image source={Images.common.likePressed} style={styles.subLike} />
              <Text style={styles.postTime}>{(posts.likes) ? posts.likes : '' + `Likes`}</Text>
            </TouchableOpacity>
            <View style={styles.subRow}>
              <TouchableOpacity style={styles.comment}>
                <Text style={[styles.postTime, styles.subLike]}>{(posts.comment) ? posts.comment : '' + `Comments`}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.postTime}>{(posts.shares) ? posts.shares : '' + `Shares`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postSub}>
            <TouchableOpacity>
              <Image source={Images.common.likeNormal} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.common.comment} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.common.shareIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default recompose(
  withState('paused', 'setPaused', true),
  withState('loading', 'setLoading', false),
  withState('size', 'onSetSize', { width: Dimensions.get('window').width, height: null }),
  withHandlers({
    onPlayVideo: (props) => () => {
      props.setPaused(!props.paused)
    }
  })
)(PostItem)
