import { Colors, Images } from 'src/assets'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import ButtonInput from 'src/components/views/ButtonInput'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Input from 'src/components/views/LoginInput'
import React from 'react'
import s from 'src/components/styles'

export default class SignUp extends React.PureComponent {
  click = (src) => {
    this.props.tSelect(0)
  }

  render () {
    const {
      email,
      username,
      password,
      setUsename,
      setPassword,
      setEmail,
      onSignUp,
      dateVisible,
      onHandleDate,
      datePicker,
      onConfirmDate
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapperInput}>
          <Input
            imgIndex='3'
            placeholder='Email'
            text='EMAIL'
            value={email}
            onChangeText={setEmail}
          />
          <Input
            secureTextEntry
            imgIndex='1'
            placeholder='Password'
            text='PASSWORD'
            value={password}
            onChangeText={setPassword}
          />
          <Input
            imgIndex='4'
            placeholder='Username'
            text='USERNAME'
            value={username}
            onChangeText={setUsename}
          />
          <ButtonInput
            defaultValue={`Birth date`}
            imgIndex='2'
            text={'BIRTH DATE'}
            value={datePicker}
            onPress={onHandleDate}
          />
        </View>
        <TouchableOpacity style={s.button} onPress={onSignUp}>
          <Text style={styles.textBtn}>{(`Sign up`).toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.signWith}>{`Or you can sign up with`}</Text>
        <View style={styles.social_container}>
          <Image source={Images.common.googleIcon} style={styles.social_icon} />
          <Image source={Images.common.fbIcon} style={styles.social_icon} />
          <Image source={Images.common.twichIcon} style={styles.social_icon} />
          <Image source={Images.common.steamIcon} style={styles.social_icon} />
        </View>
        <DateTimePicker
          isVisible={dateVisible}
          onCancel={onHandleDate}
          onConfirm={onConfirmDate}
        />
      </View>
    )
  }
}

const styles = {
  social_icon: {
    marginLeft: 15
  },
  social_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  wrapperInput: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    width: Dimensions.get('window').width
  },
  textBtn: {
    color: Colors.white
  }
}
