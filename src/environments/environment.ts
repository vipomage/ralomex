// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBHMLRn7jsgPDKN3RYcK1LUexL_Ztjemwo',
    authDomain: 'ralomex-34693.firebaseapp.com',
    databaseURL: 'https://ralomex-34693.firebaseio.com',
    projectId: 'ralomex-34693',
    storageBucket: 'ralomex-34693.appspot.com',
    messagingSenderId: '130489209852',
  },
  toastr:{
    timeOut: 4000,
    positionClass: 'toast-bottom-right',
    maxOpened:3,
    newestOnTop:true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
