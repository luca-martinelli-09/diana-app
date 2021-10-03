import React, {useContext, useState} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

// External libraries
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import {ThemeContext} from '../../components/Context';
import {Button, OutlineButton} from '../../components/Button';
import {localizedStrings} from '../../components/Strings';

const LastEventScreen = ({navigation}) => {
  const appTheme = useContext(ThemeContext);

  // Set locale for date format
  Moment.updateLocale(
    localizedStrings.getLanguage(),
    localizedStrings.momentMonths,
  );

  // Control the date picker
  const [datePickerOpened, setDatePickerOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    Moment(new Date()).subtract(28, 'days'),
  );

  // Set form errors
  const [error, setError] = useState(null);

  // On date selection, check if the date is accettable
  function onDateSelected(date) {
    setDatePickerOpened(false);
    setSelectedDate(Moment(date));

    if (date >= new Date()) {
      setError(localizedStrings.dateError);
    } else {
      setError(null);
    }
  }

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.statusBarProps} />
      <View style={appTheme.style.container}>
        <Text style={appTheme.style.title1}>
          {localizedStrings.lastEventTitle}
        </Text>
        <Text
          style={[
            appTheme.style.subtext,
            {marginTop: appTheme.metrics.marginSpacer},
          ]}>
          {localizedStrings.lastEventParagraph}
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: appTheme.metrics.marginSpacer * 2,
          }}>
          <Text
            style={[
              appTheme.style.title1,
              {fontFamily: 'Manrope-Bold', textTransform: 'lowercase'},
            ]}>
            {selectedDate.format(localizedStrings.dateFormat)}
          </Text>
          <OutlineButton
            mini
            style={{marginTop: appTheme.metrics.marginSpacer * 0.5}}
            onPress={() => setDatePickerOpened(true)}
            title={localizedStrings.chooseDate}
          />
          <DateTimePickerModal
            mode="date"
            isVisible={datePickerOpened}
            date={selectedDate.toDate()}
            onConfirm={onDateSelected}
            onCancel={() => {
              setDatePickerOpened(false);
            }}
          />
        </View>
        <View>
          {error ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: appTheme.metrics.marginSpacer,
              }}>
              <Icon
                name="alert-circle-outline"
                color={appTheme.colorScheme.errorColor}
                size={appTheme.metrics.smallIconSize}
              />
              <Text
                style={[
                  appTheme.style.subtext,
                  {
                    color: appTheme.colorScheme.errorColor,
                    marginLeft: appTheme.metrics.marginHorizontal,
                    opacity: 1,
                  },
                ]}>
                {error}
              </Text>
            </View>
          ) : null}
          <Button
            onPress={() => {
              // If no errors, continue to next step, passing the selected date
              if (!error) {
                navigation.navigate('CycleDuration', {
                  lastEvent: selectedDate.toString(),
                });
              }
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
