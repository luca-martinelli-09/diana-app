import {StyleSheet} from 'react-native';

const colorSchemeLight = {
  backgroundColor: '#fff',
  primaryColor: '#06c',
  onPrimaryColor: '#fff',
  subtextColor: '#666',
};

const satusBarLightProps = {
  backgroundColor: colorSchemeLight.backgroundColor,
  barStyle: 'dark-content',
};

const lightTheme = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorSchemeLight.backgroundColor,
  },

  header: {
    backgroundColor: colorSchemeLight.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },

  whiteIconHeader: {
    backgroundColor: colorSchemeLight.backgroundColor,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },

  headerText: {
    color: colorSchemeLight.onPrimaryColor,
    fontWeight: 'bold',
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: colorSchemeLight.backgroundColor,
    padding: 25,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 45,
    marginBottom: 30,
  },

  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  subtext: {
    fontSize: 16,
    color: colorSchemeLight.subtextColor,
  },
});

export {lightTheme, colorSchemeLight, satusBarLightProps};
