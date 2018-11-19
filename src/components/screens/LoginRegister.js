import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextInput,
  TouchableHighlight,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Login from '../views/Login'
import Register from '../views/Register'
import renderIf from '../libs/renderIf';
import { Images } from 'src/assets'

const MyKBAView = Platform.select({
  ios: KeyboardAvoidingView,
  android: View
})

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.s = {
      height:2,
      backgroundColor : '#00BA53',
      marginTop : 2
    };
    this.u = {
      height:2,
      backgroundColor : 'white',
      marginTop : 2
    };
    this.state = {
      index:0,
      login : this.s,
      register : this.u
    }
    this.gotoDashboard = this.gotoDashboard.bind(this);
  }
  gotoDashboard(){
    const {navigate} = this.props.navigation;
    navigate('Dashboard')
  }

  click(index){
    this.setState({"index" : index})
    if(index == 0){
      this.setState({"login" : this.s});
      this.setState({"register" : this.u});
    }else{
      this.setState({"login" : this.u});
      this.setState({"register" : this.s});
    }
  }
  render() {
    return (
      <MyKBAView enabled style={styles.contentContainer} behavior={'padding'}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={{marginTop: 40, flex: 1}}
              source={Images.common.logo1}
            />
            <View style={{flexDirection: 'row', flex: 1}}>
              <TouchableWithoutFeedback onPress={() => this.click(0)}>
                <View style={styles.text}>
                  <Text style={styles.title}>LOGIN</Text>
                  <View style={this.state.login} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.click(1)}>
                <View style={styles.text}>
                  <Text style={styles.title}>SIGN UP</Text>
                  <View style={this.state.register} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}>
              {renderIf((this.state.index == 0),
                <Login tSelect={this.gotoDashboard} />
              )}
              {renderIf((this.state.index == 1),
                <Register tSelect={this.gotoDashboard} />
              )}
            </View>
          </View>
        </ScrollView>
      </MyKBAView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  contentContainer: {
    backgroundColor : 'white',
    flex: 1
  },
  text: {
    marginTop : 6,
    marginLeft : 8,
    marginRight:8
  },
  title: {
    color: '#333'
  }
});
