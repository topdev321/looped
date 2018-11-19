import React from 'react'
import { View, Dimensions, ListView, Image, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native'
import TimeLineAction from '../views/TimeLineAction'
import ProfileCard from '../views/ProfileCard'
import Line from '../views/Line'
import { Header } from 'src/screens/components'
import { Images } from 'src/assets'

const deviceWidth = (Dimensions.get('window').width)

const styles = StyleSheet.create({
  banner: {
    width: deviceWidth,
    resizeMode: 'cover'
  },
  cirular_ic: {
    marginTop: -50,
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  action_ic: {
    marginTop: -35,
    width: 32,
    height: 32,
    marginRight: 5,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  empty: {
    position: 'absolute', right: 20, bottom: 10
  },
  button: {
    backgroundColor: '#552E72',
    height: 40,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    width: 120,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
    borderRadius: 10
  },
  profile_container: {
    backgroundColor: '#6A398D',
    flex: 1
  },
  small_icon_container: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  username: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  profile_description: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 12
  },
  bottom_description: {
    color: 'black',
    textAlign: 'justify',
    margin: 20,
    lineHeight: 18,
    fontSize: 12
  },
  top: {
    marginTop: 100
  },
  action_container: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  right_action_container: {
    height: 30,
    width: 110,
    marginTop: 60,
    flexDirection: 'row',
  },

});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.leftAction = this.leftAction.bind(this);
  }
  leftAction(){
    this.props.toggle();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header leftButtonPressed={this.leftAction} leftIcon={Images.common.menuIcon} />
        <ScrollView>
          <View style={styles.profile_container}>
            <Image style={styles.banner} source={Images.common.gameBanner} />
            <View style={styles.small_icon_container}>
              <Image style={styles.cirular_ic} source={Images.common.circularIc} />
            </View>
            <View style={styles.small_icon_container}>
              <Text style={styles.username}>Dominick Milner</Text>
            </View>
            <View style={styles.action_container}>
              <View ref="rootView" style={styles.action_container}>
                <Text style={{ color: 'white' }}>@tariq</Text>
                <View style={styles.right_action_container}>
                  <Image style={styles.action_ic} source={Images.common.act0} />
                  <Image style={styles.action_ic} source={Images.common.act1} />
                  <Image style={styles.action_ic} source={Images.common.act2} />
                </View>
              </View>
            </View>
            <Line style={styles.top} />
            <Text style={styles.profile_description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </Text>
            <View style={styles.small_icon_container}>
              <Text style={styles.button}>{`EDIT INFO`}</Text>
            </View>
          </View>
          <View>
            <ProfileCard style={styles.top} />
            <Text style={styles.bottom_description}>
              {`
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              `}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.empty}>
          <Image source={Images.common.composeIcon} />
        </TouchableOpacity>
      </View>
    );
  };
}
export default Profile
