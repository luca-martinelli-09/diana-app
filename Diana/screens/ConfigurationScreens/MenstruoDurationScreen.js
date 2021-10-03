import React, {useContext, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';

// External libraries
import firestore from '@react-native-firebase/firestore';

// Theme
import {AuthContext, ThemeContext} from '../../components/Context';
import {Button, OutlineButton} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const MenstruoDurationScreen = ({route, navigation}) => {
  const appTheme = useContext(ThemeContext);
  const user = useContext(AuthContext);

  // Params from previous screens
  const currentConfiguration = route.params;

  // Set the cycle duration and limits
  const [menstruoDuration, setMenstruoDuration] = useState(5);
  const durationLimits = [1, 10];

  // Is creating account
  const [isLoading, setIsLoading] = useState(false);

  // Function to save configuration and create firebase snapshot
  async function saveConfiguration(finalConfiguration) {
    // Set loading
    setIsLoading(true);

    // Create new user
    await firestore().collection('Users').doc(user.uid).set({
      menstruoDuration: finalConfiguration.menstruoDuration,
      cycleDuration: finalConfiguration.cycleDuration,
    });

    // Add the last event of the user
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .collection('Events')
      .add({
        eventType: 'menstruo',
        date: firestore.Timestamp.fromDate(
          new Date(finalConfiguration.lastEvent),
        ),
      });

    // When finished, exit from loading and go to the home screen preserving going back
    setIsLoading(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.menstruoDurationTitle}
        </Text>
        <Text
          style={[
            appTheme.style.subtext,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.menstruoDurationParagraph}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: appTheme.metrics.marginSpacer * 2,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <OutlineButton
              mini
              style={{marginTop: appTheme.metrics.marginSpacer * 0.5}}
              onPress={() => {
                if (menstruoDuration > durationLimits[0]) {
                  setMenstruoDuration(menstruoDuration - 1);
                }
              }}
              icon="remove-outline"
            />
            <Text
              style={[
                appTheme.style.title1,
                {
                  fontFamily: 'Manrope-Bold',
                  textTransform: 'lowercase',
                  marginHorizontal: appTheme.metrics.marginHorizontal * 3,
                },
              ]}>
              {localizedStrings.formatString(
                localizedStrings.daysDuration,
                menstruoDuration,
              )}
            </Text>
            <OutlineButton
              mini
              style={{marginTop: appTheme.metrics.marginSpacer * 0.5}}
              onPress={() => {
                if (menstruoDuration < durationLimits[1]) {
                  setMenstruoDuration(menstruoDuration + 1);
                }
              }}
              icon="add-outline"
            />
          </View>
        </View>
        <View>
          {!isLoading ? (
            <View>
              <Button
                onPress={() =>
                  saveConfiguration({
                    ...currentConfiguration,
                    menstruoDuration: menstruoDuration,
                  })
                }
                title={localizedStrings.finishedConfiguration}
              />
              <OutlineButton
                onPress={() => navigation.goBack()}
                title={localizedStrings.back}
                mini={true}
              />
            </View>
          ) : (
            <ActivityIndicator
              size="large"
              color={appTheme.colorScheme.textColor}
            />
          )}
          <Text
            style={[
              appTheme.style.subtext,
              {
                marginTop: appTheme.metrics.marginSpacer,
                textAlign: 'center',
              },
            ]}>
            {!isLoading
              ? localizedStrings.formatString(
                  localizedStrings.configurationStatus,
                  '3',
                  '3',
                )
              : localizedStrings.configuratingAccount}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenstruoDurationScreen;
