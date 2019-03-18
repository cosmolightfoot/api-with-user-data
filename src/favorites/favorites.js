import loadHeader from '../functions/header-components.js';
import { loadGallery } from '../functions/gallery-components.js';
import { auth, favoritesByUserRef } from '../firebase/firebase.js';
import { objectToArray } from '../functions/object-to-array.js';
loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.once('value').then(snapshot => {
        const value = snapshot.val();
        const favoriteArray = objectToArray(value);
        loadGallery(favoriteArray);
        
    });
});
