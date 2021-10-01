import React from 'react';

import {StatusBar, View, SafeAreaView, ActivityIndicator} from 'react-native';

// Theme
import {ThemeContext} from '../components/Context';

const SplashScreen = () => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView>
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
        </View>
        <ActivityIndicator size="large" color={appTheme.colorScheme.textColor} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
