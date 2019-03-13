const test = QUnit.test;

QUnit.module('create header html');

function makeHeaderHtml() {
    const html = `
        <header>
            <img class="mtg-logo" src="./assets/mtg-logo.png" alt="five symbols that represent law, water, death, fire, and earth">
            <h1>CardCoven</h1>
            <div class="user-profile">
            </div>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('dynamically makes header html', function(assert) {
    const result = makeHeaderHtml();
    const expected = /*html*/ `
        <header>
            <img class="mtg-logo" src="./assets/mtg-logo.png" alt="five symbols that represent law, water, death, fire, and earth">
            <h1>CardCoven</h1>
            <div class="user-profile">
            </div>
        </header>
    `;
    
    
    assert.htmlEqual(result, expected);
});
