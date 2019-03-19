const test = QUnit.test;

QUnit.module('replace colors');

function insertManaSymbols(cardproperty) {
    let manaString = cardproperty;
    if(cardproperty.includes('{W}')) {
        manaString = manaString.replace('{W}', '<img src="../../assets/white-mana.png">');
    }
    
    if(cardproperty.includes('{U}')) {
        manaString = manaString.replace('{U}', '<img src="../../assets/blue-mana.png">');
    }
    
    if(cardproperty.includes('{R}')) {
        manaString = manaString.replace('{R}', '<img src="../../assets/red-mana.png">');
    }
    
    if(cardproperty.includes('{G}')) {
        manaString = manaString.replace('{G}', '<img src="../../assets/green-mana.png">');
    }
    
    if(cardproperty.includes('{B}')) {
        manaString = manaString.replace('{B}', '<img src="../../assets/black-mana.png">');
    }
    
    if(cardproperty.includes('{1}')) {
        manaString = manaString.replace('{1}', '<img src="../../assets/one-mana.png">');
    }
    
    if(cardproperty.includes('{2}')) {
        manaString = manaString.replace('{2}', '<img src="../../assets/two-mana.png">');
    }

    return manaString;
}

test('replaces {W} with img for white mana', assert => {
    const card = {
        'manaCost': '{3}{W}',
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
    const expected = '{3}<img src="../../assets/white-mana.png">';
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
    const expected = '{3}<img src="../../assets/blue-mana.png">';
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
    const expected = '<img src="../../assets/white-mana.png"><img src="../../assets/blue-mana.png">';
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
    const expected = '<img src="../../assets/white-mana.png">: Honor Guard gets +0/+1 until end of turn.';
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
    const expected = '<img src="../../assets/white-mana.png"><img src="../../assets/red-mana.png">';
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
    const expected = '<img src="../../assets/white-mana.png"><img src="../../assets/red-mana.png"><img src="../../assets/blue-mana.png">';
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
    const expected = '<img src="../../assets/green-mana.png">';
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
    const expected = '<img src="../../assets/black-mana.png">';
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
    const expected = '<img src="../../assets/one-mana.png">';
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
    const expected = '<img src="../../assets/two-mana.png">';
    assert.equal(result, expected);

});