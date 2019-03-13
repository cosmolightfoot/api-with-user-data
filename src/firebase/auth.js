import { auth, usersRef } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebase-auth-ui', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './' + window.location.hash,
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
        signInSucessWithAuthResult(authResult) {
            const user = authResult.user;
            usersRef.child(user.uid).set({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL
            });
            return true;
        }
    }

});
