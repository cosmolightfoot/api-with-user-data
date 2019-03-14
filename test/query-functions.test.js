const test = QUnit.test;

QUnit.module('query functions');

function writeSearchToQuery(existingQuery, searchOptions) {
    const URL = new URLSearchParams(existingQuery);
    if(searchOptions.name) {
        URL.set('name', searchOptions.name);
    }
    URL.set('page', 1);
    return URL.toString();
}

test('writes search terms to query', assert => {
    //arrange
    const searchOptions = {
        name: 'Jace'
    };
    const existingQuery = '';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&page=1';
    //assert
    assert.equal(result, expected);
});


test('writes search terms to query', assert => {
    //arrange
    const searchOptions = {
        name: 'Jace'
    };
    const existingQuery = '';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&page=1';
    //assert
    assert.equal(result, expected);
});