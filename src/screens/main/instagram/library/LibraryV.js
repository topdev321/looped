import { Dimensions, FlatList, Image, Text, View } from 'react-native'
import HeaderTab from '../components/HeaderTab'
import ImageTile from './components/ImageTile'
import React from 'react'
import { ViewEditor, OptimizedFlatList } from 'src/screens/components'

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  flex: {
    flex: 1
  }
}

export default class LibraryV extends React.PureComponent {
  _keyExtractor = (_, index) => `camera-roll-item-${index}`

  _onEndReached = () => {
    this.props.getPhotos()
  }

  renderImageTile = ({item, index}) => {
    let selected = !!this.props.selected[index]
    return (
      <ImageTile
        index={index}
        item={item}
        selected={selected}
        selectImage={this.props.selectImage}
      />
    )
  }

  _onRightAction = async () => {
    try {
      const uri = await this.viewEditorRef.captureFrameAndCrop()
      this.props.onNavigatePhotoEditor({ uri })
    } catch (e) {
      console.log('>>> eee', e)
    }
  }

  render () {
    const { photos, indexImage, cancelInstagram, onSetTabSwipable } = this.props
    return (
      <View style={styles.container}>
        <HeaderTab
          headerLeftAction={cancelInstagram}
          headerRight={'Next'}
          headerRightAction={this._onRightAction}
          // rightStyle={this.state.routes[this.state.index].rightStyle}
          title={'Library'}
        />
        <ViewEditor
          imageContainerHeight={width}
          imageHeight={width}
          imageUrl={photos[indexImage] && photos[indexImage].uri}
          imageWidth={width}
          maskHeight={width}
          maskPadding={0}
          maskWidth={width}
          ref={ref => { this.viewEditorRef = ref }}
          style={{ width, height: width }}
          onSetTabSwipable={onSetTabSwipable}
        >
          <Image
            resizeMode='contain'
            source={{ uri: photos[indexImage] && photos[indexImage].uri }}
            style={styles.flex}
          />
        </ViewEditor>
        <View style={{flex: 1}}>
          <OptimizedFlatList
            removeClippedSubviews
            data={photos}
            getItemLayout={this.getItemLayout}
            initialNumToRender={24}
            keyExtractor={this._keyExtractor}
            ListEmptyComponent={<Text>{`Loading...`}</Text>}
            numColumns={4}
            renderItem={this.renderImageTile}
            onEndReached={this._onEndReached}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    )
  }
}
