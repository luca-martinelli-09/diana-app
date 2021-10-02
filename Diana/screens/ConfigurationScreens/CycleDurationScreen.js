import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

// Theme
import {ThemeContext} from '../../components/Context';
import {Button, OutlineButton} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const CycleDurationScreen = ({navigation}) => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.cycleDurationTitle}
        </Text>
        <Text
          style={[
            appTheme.style.paragraph,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.cycleDurationParagraph}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View>
          <Button
            onPress={() => navigation.navigate('MenstruoDuration')}
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
