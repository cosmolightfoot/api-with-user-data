import loadHeader from '../functions/header-components.js';
import loadSearchForm from '../functions/build-filter-components.js';
import { readFromQuery } from '../functions/query-functions.js';
import { loadGallery } from '../functions/gallery-components.js';
import { auth, favoritesByUserRef } from '../firebase/firebase.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    
});
