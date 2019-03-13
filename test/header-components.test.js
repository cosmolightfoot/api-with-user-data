const test = QUnit.test;

QUnit.module('create header html');

import { makeHeaderHtml } from '../src/functions/header-components.js';


test('dynamically makes header html', function(assert) {
    const result = makeHeaderHtml();
    const expected = /*html*/ `
        <header>
            <img class="mtg-logo" src="./assets/mtg-logo.png" alt="five symbols that represent law, water, death, fire, and earth">
            <h1>CardCoven</h1>
        </header>
    `;
    
    
    assert.htmlEqual(result, expected);
});

import { makeUserHtml } from '../src/functions/header-components.js';

test('dynamically makes header html', function(assert) {
    const user = {
        uid: '34598745203948572',
        displayName: 'Cosmo Kent',
        photoURL: 'https://somewhere.com'
    };
    
    const result = makeUserHtml(user);
    const expected = /*html*/ `
    <div class="user-profile">
        <img class="profile-pic" src="https://somewhere.com">
        <span>Cosmo Kent</span>
        <button class="sign-out-button">Sign Out</button>
    </div>
    `;
    
    
    assert.htmlEqual(result, expected);
});
