import app from 'firebase/app';

// Import require sub-packages
import 'firebase/auth';
import 'firebase/firestore';

// Set Firebase project configurations
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.provider = new app.auth.GoogleAuthProvider();

    this.db = app.firestore();
  }

  // Sign into app
  firebaseSignIn = () => {
    this.auth
      .signInWithPopup(this.provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;

        // eslint-disable-next-line no-console
        console.log('user: ', user, ' token: ', token);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;

        // eslint-disable-next-line no-console
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };

  // Get all groups from the database
  firebaseGetGroups = () => {
    return this.db.collection('groups').get();
  };

  // Delete a single group by id
  firebaseDeleteGroup = id => {
    return this.db
      .collection('groups')
      .doc(id)
      .delete();
  };

  // Add a group to the database
  firebaseAddGroup = title => {
    return this.db.collection('groups').add({
      title,
    });
  };

  // Add a beer to the database
}

export default Firebase;
