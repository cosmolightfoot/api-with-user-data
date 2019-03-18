import { auth } from '../firebase/firebase.js';
 
export function makeHeaderHtml() {
    const html = `
        <header>
            <img class="mtg-logo" src="./assets/mtg-logo.png" alt="five symbols that represent law, water, death, fire, and earth">
            <h1>CardCoven</h1>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./favorites.html">Favorites List</a></li>
            </ul>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeUserHtml(user) {
    const html = /*html*/ `
    <div class="user-profile">
        <img class="profile-pic" src="${user.photoURL}">
        <span>${user.displayName}</span>
        <button class="sign-out-button">Sign Out</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadHeader(options) {
    const dom = makeHeaderHtml();
    const headerWrapperNode = document.getElementById('header-wrapper');
    const header = dom.querySelector('header');
    headerWrapperNode.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    
    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeUserHtml(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);

        }
        else {
            window.location = './auth.html';
        }
    });
    
}