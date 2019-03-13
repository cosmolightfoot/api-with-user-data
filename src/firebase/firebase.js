const config = {
    apiKey: "AIzaSyBiXCKdiu9g_HHYSmIJh2wAQkySfNpCTiU",
    authDomain: "magic-the-gathering-api-5ea5a.firebaseapp.com",
    databaseURL: "https://magic-the-gathering-api-5ea5a.firebaseio.com",
    projectId: "magic-the-gathering-api-5ea5a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const usersRef = db.ref('users');
