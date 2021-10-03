import React, {useContext, useState} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

// Theme
import {ThemeContext} from '../../components/Context';
import {Button, OutlineButton} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const CycleDurationScreen = ({route, navigation}) => {
  const appTheme = useContext(ThemeContext);

  // Params from previous screens
  const currentConfiguration = route.params;

  // Set the cycle duration and limits
  const [cycleDuration, setCycleDuration] = useState(28);
  const durationLimits = [20, 40];

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.cycleDurationTitle}
        </Text>
        <Text
          style={[
            appTheme.style.subtext,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.cycleDurationParagraph}
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
                if (cycleDuration > durationLimits[0]) {
                  setCycleDuration(cycleDuration - 1);
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
                cycleDuration,
              )}
            </Text>
            <OutlineButton
              mini
              style={{marginTop: appTheme.metrics.marginSpacer * 0.5}}
              onPress={() => {
                if (cycleDuration < durationLimits[1]) {
                  setCycleDuration(cycleDuration + 1);
                }
              }}
              icon="add-outline"
            />
          </View>
        </View>
        <View>
          <Button
            onPress={() =>
              navigation.navigate('MenstruoDuration', {
                ...currentConfiguration,
                cycleDuration: cycleDuration,
              })
            }
            title={localizedStrings.next}
          />
          <OutlineButton
            onPress={() => navigation.goBack()}
            title={localizedStrings.back}
            mini={true}
          />
          <Text
            style={[
              appTheme.style.subtext,
              {
                marginTop: appTheme.metrics.marginSpacer,
                textAlign: 'center',
              },
            ]}>
            {localizedStrings.formatString(
              localizedStrings.configurationStatus,
              '2',
              '3',
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CycleDurationScreen;
