const test = QUnit.test;



QUnit.module('html templates for filter options');

import { makeOptionHtml } from '../src/functions/build-filter-components.js';

test('makes html template out of types', function(assert) {
    const type = 'Artifact';
    const result = makeOptionHtml(type);
    const expected = /*html*/`
        <option value="artifact">Artifact</option>
    `;
    
    assert.htmlEqual(result, expected);
});