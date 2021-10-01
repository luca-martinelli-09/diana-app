import React, {useContext} from 'react';

import {StatusBar, View, SafeAreaView, Text} from 'react-native';

// Theme
import {ThemeContext, AuthContext} from '../components/Context';

const HomeScreen = () => {
  const appTheme = useContext(ThemeContext);
  const user = useContext(AuthContext);

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
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={appTheme.style.paragraph}>{user.displayName}</Text>
          <Text style={appTheme.style.paragraph}>{user.email}</Text>
          <Text style={appTheme.style.paragraph}>{user.uid}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
