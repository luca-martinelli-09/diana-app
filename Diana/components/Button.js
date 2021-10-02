import React, {useContext} from 'react';

import {View, Text, TouchableHighlight} from 'react-native';

// External libraries
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import {ThemeContext} from '../components/Context';

const Button = props => {
  const appTheme = useContext(ThemeContext);

  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={{
        borderRadius: appTheme.metrics.borderRadius,
      }}>
      <View
        style={{
          paddingVertical: appTheme.metrics.buttonPaddingVertical,
          paddingHorizontal: appTheme.metrics.buttonPaddingHorizontal,
          backgroundColor: appTheme.colorScheme.buttonColor,
          borderRadius: appTheme.metrics.borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.icon ? (
          <Icon
            name={props.icon}
            size={25}
            style={{marginRight: 8}}
            color={appTheme.colorScheme.onButtonColor}
            {...props.iconProps}
          />
        ) : null}
        <Text
          style={{
            color: appTheme.colorScheme.onButtonColor,
            fontSize: 16,
            fontFamily: 'Manrope-Bold',
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export {Button};
