const test = QUnit.test;

QUnit.module('replace colors');

function insertManaSymbols(cardproperty) {
    let manaString = cardproperty;
    if(cardproperty.includes('{W}')) {
        manaString = manaString.replace('{W}', '<img src="../../assets/white-mana.svg">');
    }
    
    if(cardproperty.includes('{U}')) {
        manaString = manaString.replace('{U}', '<img src="../../assets/blue-mana.svg">');
    }
    
    if(cardproperty.includes('{R}')) {
        manaString = manaString.replace('{R}', '<img src="../../assets/red-mana.svg">');
    }
    
    if(cardproperty.includes('{G}')) {
        manaString = manaString.replace('{G}', '<img src="../../assets/green-mana.svg">');
    }
    
    if(cardproperty.includes('{B}')) {
        manaString = manaString.replace('{B}', '<img src="../../assets/black-mana.svg">');
    }
    
    if(cardproperty.includes('{1}')) {
        manaString = manaString.replace('{1}', '<img src="../../assets/one-mana.svg">');
    }
    
    if(cardproperty.includes('{2}')) {
        manaString = manaString.replace('{2}', '<img src="../../assets/two-mana.svg">');
    }
    
    if(cardproperty.includes('{3}')) {
        manaString = manaString.replace('{3}', '<img src="../../assets/three-mana.svg">');
    }
    
    if(cardproperty.includes('{4}')) {
        manaString = manaString.replace('{4}', '<img src="../../assets/four-mana.svg">');
    }
    
    if(cardproperty.includes('{5}')) {
        manaString = manaString.replace('{5}', '<img src="../../assets/five-mana.svg">');
    }
    
    if(cardproperty.includes('{6}')) {
        manaString = manaString.replace('{6}', '<img src="../../assets/six-mana.svg">');
    }
    
    if(cardproperty.includes('{7}')) {
        manaString = manaString.replace('{7}', '<img src="../../assets/seven-mana.svg">');
    }
    
    if(cardproperty.includes('{8}')) {
        manaString = manaString.replace('{8}', '<img src="../../assets/eight-mana.svg">');
    }
    
    if(cardproperty.includes('{9}')) {
        manaString = manaString.replace('{9}', '<img src="../../assets/nine-mana.svg">');
    }
    
    if(cardproperty.includes('{10}')) {
        manaString = manaString.replace('{10}', '<img src="../../assets/ten-mana.svg">');
    }
    
    if(cardproperty.includes('{11}')) {
        manaString = manaString.replace('{11}', '<img src="../../assets/eleven-mana.svg">');
    }
    
    if(cardproperty.includes('{12}')) {
        manaString = manaString.replace('{12}', '<img src="../../assets/twelve-mana.svg">');
    }
    
    if(cardproperty.includes('{13}')) {
        manaString = manaString.replace('{13}', '<img src="../../assets/thirteen-mana.svg">');
    }
    
    if(cardproperty.includes('{14}')) {
        manaString = manaString.replace('{14}', '<img src="../../assets/fourteen-mana.svg">');
    }
    
    if(cardproperty.includes('{15}')) {
        manaString = manaString.replace('{15}', '<img src="../../assets/fifteen-mana.svg">');
    }
    
    if(cardproperty.includes('{16}')) {
        manaString = manaString.replace('{16}', '<img src="../../assets/sixteen-mana.svg">');
    }
    
    if(cardproperty.includes('{17}')) {
        manaString = manaString.replace('{17}', '<img src="../../assets/seventeen-mana.svg">');
    }
    
    if(cardproperty.includes('{18}')) {
        manaString = manaString.replace('{18}', '<img src="../../assets/eighteen-mana.svg">');
    }
    
    if(cardproperty.includes('{19}')) {
        manaString = manaString.replace('{19}', '<img src="../../assets/nineteen-mana.svg">');
    }
    
    if(cardproperty.includes('{20}')) {
        manaString = manaString.replace('{20}', '<img src="../../assets/twenty-mana.svg">');
    }
    
    if(cardproperty.includes('{U/B}')) {
        manaString = manaString.replace('{U/B}', '<img src="../../assets/blue-or-black-mana.svg">');
    }
    
    if(cardproperty.includes('{U/R}')) {
        manaString = manaString.replace('{U/R}', '<img src="../../assets/blue-or-red-mana.svg">');
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
    const expected = '{3}<img src="../../assets/white-mana.svg">';
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
    const expected = '{3}<img src="../../assets/blue-mana.svg">';
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