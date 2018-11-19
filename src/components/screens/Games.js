import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  ImageBackground,
  View
} from 'react-native';
import { Images } from 'src/assets'

import { Header } from 'src/screens/components'
import Grid from 'react-native-grid-component';
import Dashboard from './Dashboard'
import renderIf from '../libs/renderIf';

var deviceWidth = (Dimensions.get('window').width / 2) - 5;
export default class Games extends Component {
  constructor(props) {
    super(props);
    this.data = [1, 2, 3, 4, 5, 6]
    this.subTitles = ['John Doe', 'Stephen', 'Chris', 'Mathiew', 'Geoffery', 'Dominick']
    this.leftAction = this.leftAction.bind(this);
  }

  selectedItem() {
    this.props.tSelect(0)
  }

  _renderItem = (data, i) => {
    console.log(data);
    return (
      <TouchableWithoutFeedback key={i} onPress={() => this.selectedItem()} >
        <View style={styles.item} key={i}>
          <Image source={Images.common.gameImage} style={styles.backgroundImage} />
          <ImageBackground source={Images.common.semiTransparent} style={styles.footer}>
            <Text style={styles.title}>NFS Shift</Text>
            <Text style={styles.subTitle}>{this.subTitles[data - 1]}</Text>
          </ImageBackground>
          {renderIf((data == 4),
            <View style={styles.outer}>
              <Image source={Images.common.checked} style={styles.check} />
              <View style={styles.border} />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  leftAction(){
    this.props.toggle();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header leftButtonPressed={this.leftAction} leftIcon={Images.common.menuIcon} />
        <View
          style={styles.list} >
          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            data={this.data}
            itemsPerRow={2}
          />
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  small_icon: {
    width: 40,
    height: 40,
    position: 'absolute', bottom: 45, right: 16
  },
  outer: {
    position: 'absolute', bottom: 0, top: 0, left: 0, right: 0,
  },
  border: {
    position: 'absolute', bottom: 0, top: 0, left: 0, right: 2,
    borderRadius: 0,
    borderWidth: 4,
    borderColor: '#64D4A9',
  },
  item: {
    flex: 1,
    marginLeft: 2,
    marginBottom: 2,
    height: 200,
  },
  backgroundImage: {
    width: deviceWidth,
    height: 198,
    resizeMode: 'cover',
  },
  list: {
    flex: 1,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  contentContainer: {
    backgroundColor: "#F1F3F4",
    height: 140,
  },
  check: {
    position: 'absolute', top: 0, right: 2
  },
  footer: {
    position: 'absolute', bottom: 4,
    width: deviceWidth,
    height: 60,
  },
  title: {
    flex: 1,
    marginTop: 16,
    marginLeft: 10,
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold'
  },
  subTitle: {
    flex: 1,
    marginTop: -4,
    fontSize: 10,
    marginLeft: 10,
    color: 'white',
    backgroundColor: 'transparent'
  }
});
