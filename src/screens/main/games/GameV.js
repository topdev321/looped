import { Colors, Images } from 'src/assets'
import { FlatList, Platform, View } from 'react-native'
import GameCell from './components/GameCell'
import { Header } from 'src/screens/components'
import React from 'react'

const styles = {
  wrapper: {
    flex: 1
  },
  listGame: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 5,
    paddingLeft: 5
  }
}

export default class GameV extends React.PureComponent {
  keyExtractor = (item, index) => index.toString()

  renderGameItem = ({ item }) => {
    const { onNavigateGameDetails } = this.props
    return <GameCell itemUri={item} onPressGame={onNavigateGameDetails} />
  }
  render () {
    const { data, onNavigateSearch, toggle } = this.props
    return (
      <View style={styles.wrapper}>
        <Header
          leftButtonPressed={toggle}
          leftIcon={Images.common.menuIcon}
          rightButtonPressed={onNavigateSearch}
          rightIcon={Images.common.searchIcon}
          title={`Games`}
        />
        <View style={styles.listGame}>
          <FlatList
            removeClippedSubviews={Platform.OS !== 'ios'}
            data={data}
            keyExtractor={this.keyExtractor}
            numColumns={3}
            renderItem={this.renderGameItem}
          />
        </View>
      </View>
    )
  }
}
