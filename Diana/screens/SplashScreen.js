import React from 'react';

import {StatusBar, View, SafeAreaView, ActivityIndicator} from 'react-native';

// Theme
import {ThemeContext} from '../components/Context';

const SplashScreen = () => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <ActivityIndicator
          size="large"
          color={appTheme.colorScheme.textColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
