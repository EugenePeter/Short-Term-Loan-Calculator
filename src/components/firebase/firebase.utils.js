import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBE8MDWK9qXBcnlA8-ND2mB8Cpt8lsyDio",
    authDomain: "cashfull-18ccc.firebaseapp.com",
    databaseURL: "https://cashfull-18ccc.firebaseio.com",
    projectId: "cashfull-18ccc",
    storageBucket: "cashfull-18ccc.appspot.com",
    messagingSenderId: "844794530926",
    appId: "1:844794530926:web:aca31f82e78515f594ea7f",
    measurementId: "G-WJMZWN48VS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

    const ggg = firestore.collection("users").doc("signInUsersss").collection("loan");

    // alert(ggg)
    // ggg.update({
    //     loanAmount: "dddd"
    // })
  return userRef;

};

export const addUserApplication = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const signedInUser = userAuth.uid;
    // alert(signedInUser)
;
    const ggg = firestore.collection("users").doc(signedInUser);

    // alert(ggg)
    ggg.update({
        loan: {
            amount: 2000,
            duration: "25 months"
        }
    })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;