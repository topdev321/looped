import React from 'react';
import { View,Dimensions ,ListView,Image,TouchableOpacity, StyleSheet, Text } from 'react-native';
import TimeLineAction from '../views/TimeLineAction'
import ProfileCard from '../views/ProfileCard'
import Line from '../views/Line'
import { Header } from 'src/screens/components'
import Main from '../screens/Main'
import { Images } from 'src/assets'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 0,
    marginBottom : 0,
  },
  listview:{
    flex: 1,
    marginBottom : 0,
  },
  profile_thumbnail:{
    height : 50,
    width : 50,
    marginRight : 10
  },
  thumbnail:{
    height:200,
    width : Dimensions.get('window').width,
  },
  post:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft:20,
    textAlign: 'justify',
    marginRight:20
  },
  seperator:{
    height:1,
    backgroundColor : "#F1F3F4",
    width : Dimensions.get('window').width,
  },
  divider:{
    flex: 1,
    height: 10,
    backgroundColor : "#F1F3F4",
  },
  footer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop : 16,
    marginBottom: 16,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  subRow:{
    flexDirection: 'row',
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom : 8
  },
  subText:{
    color: 'grey',
    fontSize: 12,
  },
  empty:{
    position: 'absolute',  right: 20, bottom: 10
  }
});

class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.rightAction = this.rightAction.bind(this);
    this.leftAction = this.leftAction.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  onPress(){
    const { navigate } = this.props.navigation;
    navigate('Compose');
    Main.compose();
  }
  _renderItem = (data, i) => {
      return (
        <View backgroundColor="white">
          <ProfileCard />
          <Text style={styles.post}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          <Image style={styles.thumbnail} source={Images.common.videoThumbnail} />
          <View style={styles.footer}>
            <View style={styles.subRow}>
              <Image source={Images.common.likePressed} />
              <Text style={styles.subText}> 21k Likes</Text>
            </View>
            <View style={styles.subRow}>
              <Text style={styles.subText}>32 Commments </Text>
              <Text style={styles.subText}> 5 Shares</Text>
            </View>
          </View>
          <Line />
          <TimeLineAction />
        </View>
      );
  };
  compose(){
    this.props.tSelect(0)
  }

  rightAction(){
    this.props.nav('Search');
  }
  leftAction(){
    this.props.toggle();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftButtonPressed={this.leftAction}
          leftIcon={Images.common.menuIcon}
          rightButtonPressed={this.rightAction}
          rightIcon={Images.common.searchIcon}
        />
        <ListView
          style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.divider} />}
        />
        <TouchableOpacity onPress={() => this.compose()} style={styles.empty} >
          <Image source={Images.common.composeIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default TimeLine;
