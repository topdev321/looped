import { FlatList, Image, RefreshControl, TouchableOpacity, View } from 'react-native'
import { Header, OptimizedFlatList } from 'src/screens/components'
import { Images } from 'src/assets'
import PostItem from 'src/screens/components/postItem/PostItem'
import React from 'react'

export default class NewsFeedV extends React.PureComponent {
  keyExtractor = (item, index) => `post-item-${index}`

  renderPost = ({ item }) => {
    return (
      item
      ? (
        <PostItem
          posts={item}
        />
      )
      : null
    )
  }

  renderRefreshControl = () => {
    const { onRefresh, postListFetching } = this.props
    return (<RefreshControl refreshing={postListFetching} onRefresh={onRefresh} />)
  }

  render () {
    const { posts, toggle, onNavigateSearch, onNavigateInstagram } = this.props
    return (
      <View style={styles.wrapper}>
        <Header
          leftButtonPressed={toggle}
          leftIcon={Images.common.menuIcon}
          rightButtonPressed={onNavigateSearch}
          rightIcon={Images.common.searchIcon}
        />
        <View style={styles.list}>
          <FlatList
            // removeClippedSubviews
            legacyImplementation
            data={posts}
            keyExtractor={this.keyExtractor}
            refreshControl={this.renderRefreshControl()}
            renderItem={this.renderPost}
          />
        </View>
        <TouchableOpacity style={styles.compose} onPress={onNavigateInstagram}>
          <Image source={Images.common.composeIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  compose: {
    position: 'absolute',
    right: 20,
    bottom: 10
  },
  list: {
    flex: 1
  }
}
