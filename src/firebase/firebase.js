import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// const firebaseNotes = {
//     notes: {
//         kdkdkd: {
//             title: 'first note',
//             body: 'this is my note'
//         },
//         tttthhhhh: {
//             title: 'second note',
//             body: 'this is my note'
//         }
//     }
// }


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });


// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });

// database.ref().set({
//     name: 'Karyn Fogg',
//     age: 31,
//     isSingle: true,
//     location: {
//         city: 'Greenacres',
//         country: 'United States'
//     }
// }).then( () => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });