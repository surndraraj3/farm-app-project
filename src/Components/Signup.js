import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignupPage = (props, {navigation}) => {
  const [isShowPass, setShowPasskey] = useState(true);

  const ShowPassKey = () => {
    if (isShowPass) setShowPasskey(false);
    else setShowPasskey(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 20,
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
        }}>
        <Image
          style={{paddingBottom: 20, width: '80%', height: 100}}
          source={require('../../assets/new-logo.png')}
        />
      </View>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Enter First Name Here"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Enter Last Name Here"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../../assets/password.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Enter Your Password Here"
          underlineColorAndroid="transparent"
          secureTextEntry={isShowPass}
        />
        <TouchableOpacity onPress={ShowPassKey}>
          <Image
            source={require('../../assets/view.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../../assets/email.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Enter email Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            position: 'absolute',
            fontWeight: 'bold',
          }}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, height: StatusBar.height},

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  loginButton: {
    shadowColor: '#032a5e',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: '#0f458d',
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 13},
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
});

export default SignupPage;
