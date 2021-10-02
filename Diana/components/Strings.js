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
    configurationStatus: 'Step {0} of {1}',
    next: 'Next',
    back: 'Go back',
    lastEventTitle: 'Quando è',
    lastEventParagraph: 'Quando è',
    cycleDurationTitle: '',
    cycleDurationParagraph: '',
    menstruoDurationTitle: '',
    menstruoDurationParagraph: '',
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
    configurationStatus: 'Passaggio {0} di {1}',
    next: 'Avanti',
    back: 'Indietro',
    lastEventTitle: "Quando è finito l'ultimo ciclo?",
    lastEventParagraph:
      'Questo mi permetterà di capire quando potranno iniziare le prossime mestruazioni.',
    cycleDurationTitle: 'Quanto dura il tuo ciclo?',
    cycleDurationParagraph:
      'Questo mi permetterà di fare delle previsioni iniziali, col tempo migliorerò imparando!',
    menstruoDurationTitle: 'Quanto durano le tue mestruazioni?',
    menstruoDurationParagraph:
      'Questo mi permetterà di fare delle previsioni iniziali, col tempo migliorerò imparando!',
  },
});

export {localizedStrings};
