const test = QUnit.test;

QUnit.module('Tests Pertaining to Building the Gallery');

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function listMultipleTypes(typeArray) {
    let typeString = typeArray[0];
    for(let i = 1; i < typeArray.length; i++) {
        typeString += ', ' + typeArray[i];
    }
    return typeString;
}


function makeCardHtml(card) {
    const flavorText = card.flavor ? card.flavor : 'No Flavor Text.';
    const concactSubtypes = listMultipleTypes(card.subtypes);
    const subtypes = card.subtypes ? concactSubtypes : 'None';
    const concactColors = listMultipleTypes(card.colors);
    const colors = card.colors ? concactColors : 'None';
    const powerString = card.power + '/' + card.toughness;
    const powerTough = (card.power && card.toughness) ? powerString : 'N/A';
    
    const html = /*html*/`
    <li class="card-item">
        <img class="card-pic" src="${card.imageUrl}">
        <div>
            <h1 class="card-title">${card.name}</h1>
            <p class="card-text">${card.text}</p>
            <p class="card-flavor">${flavorText}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Types:</th>
                        <td>${card.types}</td>
                        <th>Set:</th>
                        <td title="${card.setName}">${card.set}</td>
                        <th>Cost:</th>
                        <td>${card.manaCost}</td>
                        <th>Rarity:</th>
                        <td>${card.rarity}</td>
                    </tr>
                    <tr>
                        <th>Subtypes:</th>
                        <td>${subtypes}</td>
                        <th>Color:</th>
                        <td>${colors}</td>
                        <th>Converted Cost:</th>
                        <td>${card.cmc}</td>
                        <th>Power/Toughness:</th>
                        <td>${powerTough}</td>
                    </tr>
                </tbody>    
            </table>
        </div>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}




test('Makes list item html dynamically', assert => {
    const card = {
        'name': 'Mesmeric Sliver',
        'manaCost': '{3}{U}',
        'cmc': 4,
        'colors': [
            'Blue', 
            'Red'
        ],
        'colorIdentity': [
            'U'
        ],
        'type': 'Creature — Sliver',
        'supertypes': [],
        'types': [
            'Creature'
        ],
        'subtypes': ['Sliver'],
        'rarity': 'Common',
        'set': 'FUT',
        'setName': 'Future Sight',
        'text': 'All Slivers have "When this permanent enters the battlefield, you may fateseal 1." (To fateseal 1, its controller looks at the top card of an opponent\'s library, then they may put that card on the bottom of that library.)',
        'number': '53',
        'toughness': '0',
        'imageUrl': 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&type=card'
    };
    const result = makeCardHtml(card);
    const expected = /*html*/`
        <li class="card-item">
            <img class="card-pic" src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136202&amp;type=card">
            <div>
                <h1 class="card-title">Mesmeric Sliver</h1>
                <p class="card-text">All Slivers have "When this permanent enters the battlefield, you may fateseal 1." (To fateseal 1, its controller looks at the top card of an opponent's library, then they may put that card on the bottom of that library.)</p>
                <p class="card-flavor">No Flavor Text.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Types:</th>
                            <td>Creature</td>
                            <th>Set:</th>
                            <td title="Future Sight">FUT</td>
                            <th>Cost:</th>
                            <td>{3}{U}</td>
                            <th>Rarity:</th>
                            <td>Common</td>
                        </tr>
                        <tr>
                            <th>Subtypes:</th>
                            <td>Sliver</td>
                            <th>Color:</th>
                            <td>Blue, Red</td>
                            <th>Converted Cost:</th>
                            <td>4</td>
                            <th>Power/Toughness:</th>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
        `;

    
    assert.htmlEqual(result, expected);
});