const test = QUnit.test;



QUnit.module('html templates for filter options');

function makeFilterTypeHtml(type) {
    const html = `    
    <option value="artifact">Artifact</option>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('makes html template out of types', function(assert) {
    const type = 'artifact';
    const result = makeFilterTypeHtml(type);
    const expected = /*html*/`
        <option value="artifact">Artifact</option>
    `;
    
    assert.htmlEqual(result, false);
});