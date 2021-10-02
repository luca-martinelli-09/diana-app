import React, {useContext} from 'react';

import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
} from 'react-native';

// External libraries
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import {ThemeContext, AuthContext} from '../components/Context';

GoogleSignin.configure({
  webClientId:
    '570067801670-ietbk3ij1esd56l022qj6sibugcc63m1.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const appTheme = useContext(ThemeContext);
  const user = useContext(AuthContext);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View
        style={[
          appTheme.style.container,
          {backgroundColor: appTheme.colorScheme.backgroundColor, flex: 1},
        ]}>
        <View
          style={{
            marginBottom: 50,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableHighlight onPress={onGoogleButtonPress}>
            <View>
              <Icon name="logo-google" />
              <Text>Login with Google</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
