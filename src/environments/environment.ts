// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   auth: {
//     clientID: 'Il8wePlpOaE3X0m7JUGDj50UDEaSe22u',
//     domain: 'dev-xoyhcfsj.auth0.com', // e.g., https://you.auth0.com/
//     audience: 'http://localhost:4200', // e.g., http://localhost:3001
//     redirect: 'http://localhost:4200/callback',
//     scope: 'openid profile email'
//   }
// }; 

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC9ZQJA7eDubW-O96QhLyaL8cXyHfLvntg",
    authDomain: "angular-firestore-ee733.firebaseapp.com",
    databaseURL: "https://angular-firestore-ee733.firebaseio.com",
    projectId: "angular-firestore-ee733",
    storageBucket: "angular-firestore-ee733.appspot.com",
    messagingSenderId: "404408841485",
    appId: "1:404408841485:web:7d57db23b80d3bbdd76c44",
    measurementId: "G-K37RDZ80TL"
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
