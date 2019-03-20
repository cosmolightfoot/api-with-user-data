const test = QUnit.test;

QUnit.module('replace colors');

import insertManaSymbols from '../src/functions/insert-mana-symbols.js';

test('replaces {W} with img for white mana', assert => {
    const card = {
        'manaCost': '{3}{W}{W}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/three-mana.svg"><img src="../../assets/white-mana.svg"><img src="../../assets/white-mana.svg">';
    assert.equal(result, expected);

});

test('replaces {U} with img for blue mana', assert => {
    const card = {
        'manaCost': '{3}{U}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/three-mana.svg"><img src="../../assets/blue-mana.svg">';
    assert.equal(result, expected);

});

test('replaces multiple colors', assert => {
    const card = {
        'manaCost': '{W}{U}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/white-mana.svg"><img src="../../assets/blue-mana.svg">';
    assert.equal(result, expected);

});

test('works on text section', assert => {
    const card = {
        'manaCost': '{W}{U}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.text);
    const expected = '<img src="../../assets/white-mana.svg">: Honor Guard gets +0/+1 until end of turn.';
    assert.equal(result, expected);

});

test('converts {R} to red mana image', assert => {
    const card = {
        'manaCost': '{W}{R}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/white-mana.svg"><img src="../../assets/red-mana.svg">';
    assert.equal(result, expected);

});

test('three colors', assert => {
    const card = {
        'manaCost': '{W}{R}{U}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/white-mana.svg"><img src="../../assets/red-mana.svg"><img src="../../assets/blue-mana.svg">';
    assert.equal(result, expected);

});

test('converts {G} to green mana image', assert => {
    const card = {
        'manaCost': '{G}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/green-mana.svg">';
    assert.equal(result, expected);

});

test('converts {B} to black mana image', assert => {
    const card = {
        'manaCost': '{B}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/black-mana.svg">';
    assert.equal(result, expected);

});

test('converts {1} to black mana image', assert => {
    const card = {
        'manaCost': '{1}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/one-mana.svg">';
    assert.equal(result, expected);

});

test('converts {2} to black mana image', assert => {
    const card = {
        'manaCost': '{2}',
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'text': '{W}: Honor Guard gets +0/+1 until end of turn.',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = insertManaSymbols(card.manaCost);
    const expected = '<img src="../../assets/two-mana.svg">';
    assert.equal(result, expected);

});