const test = QUnit.test;

QUnit.module('query functions');

import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/functions/query-functions.js';

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

test('adds sets', assert => {
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

test('clears query', assert => {
    //arrange
    const searchOptions = {
        name:null,
        colors: '',
        types: null,
        subtypes: '',
        sets: ''
    };
    const existingQuery = 'name=Jill&colors=blue,black&types=Creature&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'page=1';
    //assert
    assert.equal(result, expected);
});

test('null array', assert => {
    //arrange
    const searchOptions = {};
    const existingQuery = 'name=Jill&colors=blue,black&types=Creature&page=1';
    //act
    const result = writeSearchToQuery(existingQuery, searchOptions);
    const expected = 'page=1';
    //assert
    assert.equal(result, expected);
});


test('writes page to query', assert => {
    //arrange
    const searchOptions = {
        name: 'Jace',
        colors: 'Blue',
        types: null,
        subtypes: '',
        sets: '',
        page: 2
    };
    const existingQuery = 'name=Jace&colors=Blue&page=1';
    //act
    const result = writePageToQuery(existingQuery, searchOptions);
    const expected = 'name=Jace&colors=Blue&page=2';
    //assert
    assert.equal(result, expected);
});



test('creates searchOptions Object from query', assert => {
    //arrange
    const existingQuery = 'name=Jace&colors=Blue,Black&types=Planeswalker&subtypes=banana&sets=hammock&page=1';
    //act
    const result = readFromQuery(existingQuery);
    const expected = {
        name: 'Jace',
        colors: 'Blue,Black',
        types:  'Planeswalker',
        subtypes: 'banana',
        sets: 'hammock',
        page: 1
    };
    //assert
    assert.deepEqual(result, expected);
});


test('creates searchOptions Object from query', assert => {
    //arrange
    const existingQuery = 'name=Jace&colors=Blue,Black&subtypes=banana&sets=hammock&page=1';
    //act
    const result = readFromQuery(existingQuery);
    const expected = {
        name: 'Jace',
        colors: 'Blue,Black',
        types: null,
        subtypes: 'banana',
        sets: 'hammock',
        page: 1
    };
    //assert
    assert.deepEqual(result, expected);
});
