import { environment as devEnv } from './environment';

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBHMLRn7jsgPDKN3RYcK1LUexL_Ztjemwo',
    authDomain: 'ralomex-34693.firebaseapp.com',
    databaseURL: 'https://ralomex-34693.firebaseio.com',
    projectId: 'ralomex-34693',
    storageBucket: 'ralomex-34693.appspot.com',
    messagingSenderId: '130489209852',
  },
  toastr:devEnv.toastr,
};
