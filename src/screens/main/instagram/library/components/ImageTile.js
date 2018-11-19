import {
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native'
import { Colors } from 'src/assets'
import React from 'react'
const { width } = Dimensions.get('window')

class ImageTile extends React.PureComponent {
  _onSelectImage = () => {
    this.props.selectImage(this.props.index)
  }

  render () {
    let { item, selected } = this.props
    if (!item) return null
    return (
      <TouchableHighlight
        style={{opacity: selected ? 0.5 : 1, backgroundColor: Colors.white, paddingTop: 1, paddingRight: 1}}
        underlayColor='transparent'
        onPress={this._onSelectImage}
      >
        <Image
          source={{uri: item.uri}}
          style={{
            width: width / 4 - 1,
            height: width / 4 - 1
          }}
        />
      </TouchableHighlight>
    )
  }
}
export default ImageTile
