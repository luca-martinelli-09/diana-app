import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {ThemeContext} from './components/Context';
import {MainTheme} from './theme/MainTheme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const appTheme = isDarkMode ? MainTheme.dark : MainTheme.light;

  return (
    <ThemeContext.Provider value={appTheme}>
      <SafeAreaView>
        <StatusBar {...appTheme.statusBarProps} /> 
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={appTheme.colorScheme.backgroundColor}>
          <View style={appTheme.style.container}>
            <Text style={appTheme.style.headerText}>Diana</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
