import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { launchImageLibrary } from 'src/utilities/pickImage'
import { cropUploadImage } from 'src/utilities/cropImage'
import { compose as recompose } from 'recompose'
import { PostRedux } from 'src/redux/reducers'
import { connect } from 'react-redux'


import Tab from '../views/Tab'
import Games from './Games'
import { GamesScreen, NewsFeedScreen } from 'src/screens'
import Profile from './Profile'
import Notifications from './Notifications'

import Tabs from 'react-native-tabs';
import { Images } from 'src/assets'

import Search from './Search'
import DrawerLayout from './DrawerLayout'

import renderIf from '../libs/renderIf'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
      "tabIndex": 0,
      "selectedTab": 0,
      "drawerVisible": false,
    }
    this.selectedTab = 0;
    this.tabSelected = this.tabSelected.bind(this);
    this.navigateToNewsFeed = this.navigateToNewsFeed.bind(this);
    this.toggle = this.toggle.bind(this);

    this.unSelected = [
      Images.common.homeNormal,
      Images.common.gameNormal,
      Images.common.vipNormal,
      Images.common.activityNormal,
      Images.common.profileNormal
    ]

    this.selected = [
      Images.common.homeActive,
      Images.common.gameActive,
      Images.common.vipActive,
      Images.common.activityActive,
      Images.common.profileActive
    ];

  }

  tabSelected(index) {
    console.log('tab Selected');
    Tab.selectedTab = index;
    this.selectedTab = index;
    this.setState({ "tabIndex": index })
  }
  navigateToNewsFeed() {
    Tab.selectedTab = 0;
    this.selectedTab = 0;
    const { navigate } = this.props.navigation;
    navigate('Compose')
  }

  getNewArray = () => {
    const newArray = [].concat(this.unSelected);
    newArray[Tab.selectedTab] = this.selected[Tab.selectedTab];
    return newArray;
  };

  toggle = () => {
    this.setState({drawerVisible: !this.state.drawerVisible});
  }

  openImagePicker = async () => {
    try {
      const res = await launchImageLibrary({
        mediaType: 'photo',
        noData: true
      })

      let resizedRes = await cropUploadImage(res)

      this.props.onPost(null, resizedRes.path, null)
    } catch (e) {
      console.log('>>>. erroroor', e)
    }
  }

  onNavigateInstagram = () => {
    this.props.navigation.navigate('Instagram')
  }

  render() {
    const { navigate } = this.props.navigation;
    index = -1
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
          onSelect={el => {
            if (el.props.name == 2) {
              return this.onNavigateInstagram()
            }
            this.selectedTab = el.props.name;
            this.setState({ page: el.props.name })
          }}>
          {
            this.unSelected.map(i => {
              src = i;
              index++;
              if (this.selectedTab == index) {
                return (<Image name={index} key={i} source={this.selected[index]} />);
              }
              return (<Image name={index} key={i} source={src} />);
            })
          }
        </Tabs>
        <View style={styles.contentContainer}>
          {renderIf((this.selectedTab == 0),
            <NewsFeedScreen navigate={navigate} toggle={this.toggle} />
          )}
          {renderIf((this.selectedTab == 1),
            <GamesScreen toggle={this.toggle} />
          )}
          {renderIf((this.selectedTab == 3),
            <Notifications />
          )}
          {renderIf((this.selectedTab == 4),
            <Profile toggle={this.toggle} />
          )}
        </View>
        {renderIf((this.state.drawerVisible == true),
          <DrawerLayout toggle={this.toggle} />
        )}

      </View>
    );
  }
}

export default recompose(
  connect(
    (state) => ({}),
    (dispatch) => ({
      onPost: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video))
    })
  )
)(Dashboard)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    position: 'absolute', top: 0, right: 0, bottom: 50, left: 0,
    backgroundColor: "#F1F3F4",
  },
  footer: {
    height: 50,
    backgroundColor: "#ffffff"
  }
});
