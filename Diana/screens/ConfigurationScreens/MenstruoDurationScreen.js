import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

// Theme
import {ThemeContext} from '../../components/Context';
import {Button, OutlineButton} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const MenstruoDurationScreen = ({navigation}) => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.menstruoDurationTitle}
        </Text>
        <Text
          style={[
            appTheme.style.paragraph,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.menstruoDurationParagraph}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View>
          <Button onPress={() => {}} title={localizedStrings.next} />
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
              '3',
              '3',
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenstruoDurationScreen;
