import React from 'react';
import { View, Dimensions, ListView, Image, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import TimeLineAction from '../views/TimeLineAction'
import ProfileCard from '../views/ProfileCard'
import Line from '../views/Line'
import Header from '../views/Header'
import NotificationItem from '../views/NotificationItem'
import Main from '../screens/Main'
import renderIf from '../libs/renderIf';
import Button from 'react-native-button';
import { Images } from 'src/assets'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  listview: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  seperator: {
    height: 1,
    backgroundColor: "#F1F3F4",
    width: Dimensions.get('window').width,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#F1F3F4",
  },
  selector: {
    position: 'absolute', right: 1, bottom: 0, left: 1,
    height: 2,
    backgroundColor: "black",
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  empty: {
    position: 'absolute', right: 10, top: 10,
    height: 20,
    width: 20
  },
  messageBox: {
    backgroundColor: 'white',
    height: 160
  },
  segoutcontainer: {
    marginTop: 20,
    height: 50,
  },
  segmentedControl: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'space-between',
  },
  subsegment: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  segText: {
    fontWeight: 'bold'
  },
  messageSubText: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  }
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      messageboxVisible: true,
      segmentedControl: {
        followingTabColor: 'black',
        youTabColor: 'grey',
        selectedTab: 1
      },
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  onPress() {
    Main.compose();
  }
  _renderItem = (data, i) => {
    return (
      <View backgroundColor="white">
        <NotificationItem />
      </View>
    );
  };
  changeSegmentedControl(index) {
    this.setState({ "segmentedControl": { "selectedTab": index } });
  }
  click() {
    this.setState({ "messageboxVisible": false })
  }
  compose() {
    Main.compose();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.segoutcontainer}>
          <View style={styles.segmentedControl}>
            <TouchableWithoutFeedback onPress={() => this.changeSegmentedControl(0)}>
              <View style={styles.subsegment}>
                <Text style={styles.segText}>Following</Text>
                {renderIf((this.state.segmentedControl.selectedTab == 0),
                  <View style={styles.selector} />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.changeSegmentedControl(1)}>
              <View style={styles.subsegment}>
                <Text style={styles.segText}>You</Text>
                {renderIf((this.state.segmentedControl.selectedTab == 1),
                  <View style={styles.selector} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Line />
        {renderIf((this.state.messageboxVisible),
          <View style={styles.messageBox} >
            <Text style={
              {
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 10,
                fontWeight: 'bold'
              }}>Stay Up to Date</Text>
            <Text style={styles.messageSubText}>Turn on notifications to know right away when people follow you, like and comment on your photos or sent you a message</Text>
            <TouchableWithoutFeedback onPress={() => this.click()}>
              <Image style={styles.empty} source={Images.common.close} />
            </TouchableWithoutFeedback>
            <Button
              onPress={() => this.click()}
              containerStyle={
                {
                  height: 38,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 16,
                  overflow: 'hidden',
                  borderRadius: 4,
                  backgroundColor: 'red'
                }}
              style={
                {
                  backgroundColor: '#4492D8',
                  height: 38,
                  fontSize: 14,
                  paddingTop: 10,
                  color: 'white'
                }} >
              Turn On Notifications
            </Button>
          </View>
        )}
        <Line />
        <ListView
          style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.divider} />}
        />

      </View>
    );
  }
}
export default Notifications;
