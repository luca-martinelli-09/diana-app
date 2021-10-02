import React from 'react';

// External libraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import LastEventScreen from './ConfigurationScreens/LastEventScreen';
import CycleDurationScreen from './ConfigurationScreens/CycleDurationScreen';
import MenstruoDurationScreen from './ConfigurationScreens/MenstruoDurationScreen';
import FirstLegendScreen from './ConfigurationScreens/FirstLegendScreen';
import SecondLegendScreen from './ConfigurationScreens/SecondLegendScreen';
import ThirdLegendScreen from './ConfigurationScreens/ThirdLegendScreen';
import FourthLegendScreen from './ConfigurationScreens/FourthLegendScreen';

const Stack = createNativeStackNavigator();

const ConfigurationScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LastEvent" component={LastEventScreen} />
      <Stack.Screen name="CycleDuration" component={CycleDurationScreen} />
      <Stack.Screen
        name="MenstruoDuration"
        component={MenstruoDurationScreen}
      />
      <Stack.Screen name="FirstLegend" component={FirstLegendScreen} />
      <Stack.Screen name="SecondLegend" component={SecondLegendScreen} />
      <Stack.Screen name="ThirdLegend" component={ThirdLegendScreen} />
      <Stack.Screen name="FourthLegend" component={FourthLegendScreen} />
    </Stack.Navigator>
  );
};

export default ConfigurationScreen;
