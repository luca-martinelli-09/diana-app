import React, {useState, useEffect} from 'react';

import {useColorScheme} from 'react-native';

// External libraries
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Theme
import {AuthContext, ThemeContext} from './components/Context';
import {MainTheme} from './theme/MainTheme';

// Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const appTheme = isDarkMode ? MainTheme.dark : MainTheme.light;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);

    if (isLoading) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const user = auth().onAuthStateChanged(onAuthStateChanged);
    return user;
  }, []);

  return (
    <ThemeContext.Provider value={appTheme}>
      <AuthContext.Provider value={user}>
        <SafeAreaProvider>
          <NavigationContainer>
            {isLoading ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!user ? (
                  <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                  <Stack.Screen name="Home" component={HomeScreen} />
                )}
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
