import React, {useState, useEffect} from 'react';

import {useColorScheme} from 'react-native';

// External libraries
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
import ConfigurationScreen from './screens/ConfigurationScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appTheme = isDarkMode ? MainTheme.dark : MainTheme.light;

  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState();
  const [userExists, setUserExists] = useState(false);

  // Call this function when the authentication state changes
  function onAuthStateChanged(user) {
    setUser(user);

    if (isLoading) {
      setIsLoading(false); // Authentication completed
      checkUser(user); // Check if it is the first time the user login
    }
  }

  useEffect(() => {
    const user = auth().onAuthStateChanged(onAuthStateChanged);
    return user;
  }, []);

  // Check if the user already exists in the database
  async function checkUser(user) {
    setIsLoading(true);

    // Try to get the document of the user
    const userDocument = await firestore()
      .collection('users')
      .doc(user.uid)
      .get();

    // Set if the user exists in the database
    setUserExists(userDocument.exists);
    setIsLoading(false);
  }

  const NavigatorTheme = {
    colors: {
      background: appTheme.colorScheme.backgroundColor,
    },
  };

  // Draw the application stack
  return (
    <ThemeContext.Provider value={appTheme}>
      <AuthContext.Provider value={user}>
        <SafeAreaProvider>
          <NavigationContainer theme={NavigatorTheme}>
            {isLoading ? (
              // If there is a login operation, show the splash screen
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
              </Stack.Navigator>
            ) : !user ? (
              // If the user is not logged in, go to login page
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
              </Stack.Navigator>
            ) : userExists ? (
              // If the user exists, go to the home page
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
            ) : (
              // If the user not exists, go to the first configuration page
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="Configuration"
                  component={ConfigurationScreen}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
