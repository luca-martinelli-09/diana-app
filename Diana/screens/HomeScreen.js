import React, {useContext} from 'react';

import {StatusBar, View, SafeAreaView, Text} from 'react-native';

// External libraries
import auth from '@react-native-firebase/auth';

// Theme
import {ThemeContext, AuthContext} from '../components/Context';
import {Button} from '../components/Button';
import {localizedStrings} from '../components/Strings';

const HomeScreen = () => {
  const appTheme = useContext(ThemeContext);
  const user = useContext(AuthContext);

  function getOnlyName(name) {
    return name.split(' ')[0];
  }

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>{localizedStrings.hello}</Text>
        <Text style={appTheme.style.title2}>
          {getOnlyName(user.displayName)}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <Button
          icon="log-out-outline"
          onPress={() => {
            auth().signOut();
          }}
          title={localizedStrings.signOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
