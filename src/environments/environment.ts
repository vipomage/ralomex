// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  headers: {
    disks: [
      { key: 'model', value: 'Model' },
      { key: 'diskCount', value: 'Disk count' },
      { key: 'reqHP', value: 'Required HP' },
      { key: 'diskDiameter', value: 'Disk Diameter' },
      { key: 'axisSize', value: 'Axis Size' },
      { key: 'workWidth', value: 'Working Width' },
      { key: 'transportWidth', value: 'Transporting Width' },
      { key: 'diskWorkingDepth', value: 'Disk Working Width' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'productivity', value: 'Productivity' },
      { key: 'weightWoRotors', value: 'Weight' },
    ],
    ploughs: [
      { key: 'model', value: 'Model' },
      { key: 'workBodyCount', value: 'Body count' },
      { key: 'reqHP', value: 'Required HP' },
      { key: 'mainBeam', value: 'Main Beam Size' },
      { key: 'bodiesDistance', value: 'Body Distance' },
      { key: 'widthWork', value: 'Width Work' },
      { key: 'clearance', value: 'Clearance' },
      { key: 'depthWork', value: 'Depth Work' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'productivity', value: 'Productivity' },
      { key: 'weight', value: 'Weight' },
    ],
    cultivators: [
      { key: 'model', value: 'Model' },
      { key: 'workBodyCount', value: 'Body count' },
      { key: 'rowCount', value: 'Row count' },
      { key: 'bodySpacing', value: 'Body spacing' },
      { key: 'widthWork', value: 'Working Width' },
      { key: 'transportWidth', value: 'Transporting Width' },
      { key: 'bodyProtection', value: 'Protection' },
      { key: 'depthWork', value: 'Working Depth' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'weight', value: 'Weight' },
    ],
  },
  firebase: {
    apiKey: 'AIzaSyBHMLRn7jsgPDKN3RYcK1LUexL_Ztjemwo',
    authDomain: 'ralomex-34693.firebaseapp.com',
    databaseURL: 'https://ralomex-34693.firebaseio.com',
    projectId: 'ralomex-34693',
    storageBucket: 'ralomex-34693.appspot.com',
    messagingSenderId: '130489209852',
  },
  toastr: {
    timeOut: 4000,
    positionClass: 'toast-top-right',
    maxOpened: 3,
    newestOnTop: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
