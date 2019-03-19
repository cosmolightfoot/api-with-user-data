const test = QUnit.test;

QUnit.module('replace colors');

function insertManaSymbols(cardproperty) {
    let manaString = cardproperty;
    if(cardproperty.includes('{W}')) {
        manaString = cardproperty.replace('{W}', '<img src="../../assets/white-mana.png">');
    }
    
    if(cardproperty.includes('{U}')) {
        manaString = cardproperty.replace('{U}', '<img src="../../assets/blue-mana.png">');
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