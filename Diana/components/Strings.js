import LocalizedStrings from 'react-native-localization';

let localizedStrings = new LocalizedStrings({
  en: {
    appName: 'Diana',
    appDescription: 'Track your menstrual cycle, forecasts and much more',
    welcome: 'Welcome on',
    signIn: 'Sign In with Google',
    signOut: 'Sign out',
    signInToUseTheApp: 'Sign in with Google to start using the application.',
    hello: 'Welcome back',
  },
  it: {
    appName: 'Diana',
    appDescription:
      'Tieni traccia del tuo ciclo mestruale, previsioni e molto altro',
    welcome: 'Benvenutə su',
    signIn: 'Accedi con Google',
    signOut: 'Esci',
    signInToUseTheApp: "Per iniziare a usare l'app, accedi con Google.",
    hello: 'Bentornatə',
  },
});

export {localizedStrings};
