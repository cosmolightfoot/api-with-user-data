const test = QUnit.test;

QUnit.module('query functions');

function writeSearchToQuery(existingQuery, searchOptions) {
    const URL = new URLSearchParams(existingQuery);
    URL.delete('page');
    if(URL.get('name') && !searchOptions.name) {
        URL.delete('name');
    }
    else if(searchOptions.name) {
        URL.set('name', searchOptions.name);
    }

    if(URL.get('colors') && !searchOptions.colors) {
        URL.delete('colors');
    }
    else if(searchOptions.colors) {
        URL.set('colors', searchOptions.colors);
    }
    
    if(URL.get('types') && !searchOptions.types) {
        URL.delete('types');
    }
    else if(searchOptions.types) {
        URL.set('types', searchOptions.types);
    }

    if(URL.get('subtypes') && !searchOptions.subtypes) {
        URL.delete('subtypes');
    }
    else if(searchOptions.subtypes) {
        URL.set('subtypes', searchOptions.subtypes);
    }

    if(URL.get('sets') && !searchOptions.sets) {
        URL.delete('sets');
    }
    else if(searchOptions.sets) {
        URL.set('sets', searchOptions.sets);
    }


    URL.set('page', 1);
    return URL.toString();
}

test('writesname to query', assert => {
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


test('adds colors', assert => {
    //arrange
    const searchOptions = {
        name: 'Jill',
        colors: 'blue,black'
    };
    const existingQuery = 'name=Jace&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jill&colors=blue%2Cblack&page=1';
    //assert
    assert.equal(result, expected);
});

test('adds colors, no name', assert => {
    //arrange
    const searchOptions = {
        name:'',
        colors: 'blue,black'
    };
    const existingQuery = 'name=Jill&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'colors=blue%2Cblack&page=1';
    //assert
    assert.equal(result, expected);
});

test('adds types', assert => {
    //arrange
    const searchOptions = {
        name:'Jace',
        colors: 'blue,black',
        types: 'Creature'
    };
    const existingQuery = 'name=Jill&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&colors=blue%2Cblack&types=Creature&page=1';
    //assert
    assert.equal(result, expected);
});

test('adds subtypes', assert => {
    //arrange
    const searchOptions = {
        name:'Jace',
        colors: null,
        types: 'Creature',
        subtypes: 'Vampire'
    };
    const existingQuery = 'name=Jill&colors=blue,black&types=Creature&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&types=Creature&subtypes=Vampire&page=1';
    //assert
    assert.equal(result, expected);
});

test('adds subtypes', assert => {
    //arrange
    const searchOptions = {
        name:'Jace',
        colors: '',
        types: 'Creature',
        subtypes: 'Vampire',
        sets: 'Tenth Edition'
    };
    const existingQuery = 'name=Jill&colors=blue,black&types=Creature&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&types=Creature&subtypes=Vampire&sets=Tenth+Edition&page=1';
    //assert
    assert.equal(result, expected);
});