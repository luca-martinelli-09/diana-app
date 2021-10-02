import React, {useContext} from 'react';

import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

// External libraries
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {localizedStrings} from '../components/Strings';

// Theme
import {ThemeContext} from '../components/Context';
import {Button} from '../components/Button';

// Assets
import DianaCharacter from '../src/assets/images/diana-character.svg';

GoogleSignin.configure({
  webClientId:
    '570067801670-ietbk3ij1esd56l022qj6sibugcc63m1.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const appTheme = useContext(ThemeContext);

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
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>{localizedStrings.welcome}</Text>
        <Text style={appTheme.style.title2}>{localizedStrings.appName}</Text>
        <Text
          style={[
            appTheme.style.paragraph,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.appDescription}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DianaCharacter height={400} width={400 * 0.63} />
        </View>
        <View>
          <Button
            icon="logo-google"
            onPress={onGoogleButtonPress}
            title={localizedStrings.signIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
