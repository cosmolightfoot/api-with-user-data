export function makeHeaderHtml() {
    const html = `
        <header>
            <img class="mtg-logo" src="./assets/mtg-logo.png" alt="five symbols that represent law, water, death, fire, and earth">
            <h1>CardCoven</h1>
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