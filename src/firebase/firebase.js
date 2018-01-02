import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCf0lruBRjI4zgcjRU9gRq6RRpT9R9g63U",
  authDomain: "expensify-20d91.firebaseapp.com",
  databaseURL: "https://expensify-20d91.firebaseio.com",
  projectId: "expensify-20d91",
  storageBucket: "expensify-20d91.appspot.com",
  messagingSenderId: "135206400363"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

