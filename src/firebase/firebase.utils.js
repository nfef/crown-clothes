import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAMI4DmbxFbAIJ6AQfe7tNDk1TQ__RX_U",
    authDomain: "crown-db-bf7e6.firebaseapp.com",
    projectId: "crown-db-bf7e6",
    storageBucket: "crown-db-bf7e6.appspot.com",
    messagingSenderId: "785432075676",
    appId: "1:785432075676:web:e233579959bac3748ffc59"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const   { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) =>{
        const collectionRef = firestore.collection(collectionkey);

        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
        });

        return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc =>{
          const { title, items } = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          };
      } );

      console.log('TransformedData', transformedCollection); 
      return transformedCollection.reduce( (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
      }, {});

  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;