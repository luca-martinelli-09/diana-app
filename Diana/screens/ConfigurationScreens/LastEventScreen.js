import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

// Theme
import {ThemeContext} from '../../components/Context';
import {Button} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const LastEventScreen = ({navigation}) => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.lastEventTitle}
        </Text>
        <Text
          style={[
            appTheme.style.paragraph,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.lastEventParagraph}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View>
          <Button
            onPress={() => {
              navigation.navigate('CycleDuration');
            }}
            title={localizedStrings.next}
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
              '1',
              '3',
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LastEventScreen;
