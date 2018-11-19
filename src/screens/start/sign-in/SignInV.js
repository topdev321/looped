import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'src/assets'
import Input from 'src/components/views/LoginInput'
import React from 'react'
import s from 'src/components/styles'

class SignIn extends React.PureComponent {
  render () {
    const { username, password, setUsename, setPassword, onSignIn } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapperInput}>
          <Input
            imgIndex='3'
            placeholder='Email'
            text='EMAIL'
            value={username}
            onChangeText={setUsename}
          />
          <Input
            secureTextEntry
            imgIndex='1'
            placeholder='Password'
            text='PASSWORD'
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={s.button} onPress={onSignIn}>
          <Text style={styles.textBtn}>{(`Login`).toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.textForgot}>{`Forget Password? Click here to recover it`}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInput: {
    height: 40,
    marginLeft: 20,
    marginRight: 20
  },
  search: {
    marginLeft: 0,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  formtext: {
    marginLeft: 20
  },
  seperator: {
    height: 1,
    backgroundColor: Colors.casper,
    marginBottom: 20,
    width: (Dimensions.get('window').width) - 30
  },
  wrapperInput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: (Dimensions.get('window').width)
  },
  textBtn: {
    color: Colors.white
  },
  textForgot: {
    color: Colors.black
  }
}

export default SignIn
