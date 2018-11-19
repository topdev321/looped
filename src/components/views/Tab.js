import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import renderIf from '../libs/renderIf';
import { Images } from 'src/assets'

export default class Tab extends Component {
  static selectedTab = 0;
  constructor(props) {
    super(props);

    this.selected = [
      Images.common.homeActive,
      Images.common.gameActive,
      Images.common.vipActive,
      Images.common.activityActive,
      Images.common.profileActive
    ]

    this.unSelected = [
      Images.common.homeNormal,
      Images.common.gameNormal,
      Images.common.vipNormal,
      Images.common.activityNormal,
      Images.common.profileNormal
    ];
    this.state = {
      icons: this.unSelected
    }

  }
  componentWillMount() {
    console.log("componentDidMount in tab")
    this.changeLogo(this.props.defaultSelected);
  }

  changeLogo = (index) => {
    Tab.selectedTab = index;
    newArray = this.getNewArray(index);
    this.setState({ icons: newArray })
    this.props.tSelect(index)
  };
  getNewArray = () => {
    const newArray = [].concat(this.unSelected);
    newArray[Tab.selectedTab] = this.selected[Tab.selectedTab];
    return newArray;
  };

  render() {
    console.log("Render in tab " + Tab.selectedTab);
    const indexes = [0, 1, 2, 3, 4];
    const newArray = this.getNewArray();
    return (
      <View style={styles.container}>
        {
          indexes.map(i => {
            src = newArray[i];
            return (<TouchableWithoutFeedback key={i} onPress={() => this.changeLogo(i)}>
              <Image source={src} />
            </TouchableWithoutFeedback>);
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  }
});
