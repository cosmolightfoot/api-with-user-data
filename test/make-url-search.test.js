const test = QUnit.test;

QUnit.module('url search function');

import { makeSearchURL } from '../src/functions/make-search-url.js';

test('writes url from Query', assert => {
    const searchOptions = {
        name: 'Jace', 
        colors: 'blue,black',
        types: 'Planeswalker',
        subtypes: 'banana',
        setName: 'Khans of Tarkhir',
        page: 3
    };
    const result = makeSearchURL(searchOptions);
    const expected = 'https://api.magicthegathering.io/v1/cards?name=Jace&colors=blue%2Cblack&types=Planeswalker&subtypes=banana&setName=Khans+of+Tarkhir&page=3';
    assert.equal(result, expected);
});