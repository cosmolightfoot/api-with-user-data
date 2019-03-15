const test = QUnit.test;

QUnit.module('url search function');

function makeSearchURL(searchOptions) {
    const baseURL = 'https://api.magicthegathering.io/v1/cards';
    if(!searchOptions) {
        return baseURL;
    }
    const url = new URL(baseURL);
    if(searchOptions.name) {
        url.searchParams.set('name', searchOptions.name);
    }
    if(searchOptions.colors) {
        url.searchParams.set('colors', searchOptions.colors);
    }
    if(searchOptions.types) {
        url.searchParams.set('types', searchOptions.types);
    }
    if(searchOptions.subtypes) {
        url.searchParams.set('subtypes', searchOptions.subtypes);
    }
    if(searchOptions.sets) {
        url.searchParams.set('sets', searchOptions.sets);
    }
    if(searchOptions.page) {
        url.searchParams.set('page', searchOptions.page);
    }
    return url.toString();
}

test('writes url from Query', assert => {
    const searchOptions = {
        name: 'Jace', 
        colors: 'blue,black',
        types: 'Planeswalker',
        subtypes: 'banana',
        sets: 'Khans of Tarkhir',
        page: 3
    };
    const result = makeSearchURL(searchOptions);
    const expected = 'https://api.magicthegathering.io/v1/cards?name=Jace&colors=blue%2Cblack&types=Planeswalker&subtypes=banana&sets=Khans+of+Tarkhir&page=3';
    assert.equal(result, expected);
});