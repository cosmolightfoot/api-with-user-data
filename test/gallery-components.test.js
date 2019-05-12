const test = QUnit.test;

QUnit.module('Tests Pertaining to Building the Gallery');

import { makeCardHtml, pagingButtonsTemplate } from '../src/functions/gallery-components.js';

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
            <div class="info-wrapper">
                <h1 class="card-title">Mesmeric Sliver</h1>
                <p class="card-text">All Slivers have "When this permanent enters the battlefield, you may fateseal 1." (To fateseal 1, its controller looks at the top card of an opponent's library, then they may put that card on the bottom of that library.)</p>
                <p class="card-flavor">No Flavor Text.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Types:</th>
                            <td>Creature</td>
                            <th>Set:</th>
                            <td title="Future Sight">Future Sight</td>
                            <th>Cost:</th>
                            <td class="card-cost"><img src="../../assets/three-mana.svg"><img src="../../assets/blue-mana.svg"></td>
                            <th>Rarity:</th>
                            <td>Common</td>
                        </tr>
                        <tr>
                            <th>Subtypes:</th>
                            <td>Sliver</td>
                            <th>Color:</th>
                            <td>Blue, Red</td>
                            <th>CMC:</th>
                            <td>4</td>
                            <th>Power/Toughness:</th>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            <span class="favorite-star">☆</span>
        </li>
        `;

    
  assert.htmlEqual(result, expected);
});



test('generates paging buttons html', assert => {
  const result = pagingButtonsTemplate();
  const expected = /*html*/ `
        <li id="paging-section">
            <button id="previous-button">Previous</button>
            <button id="next-button">Next</button>
        </li>
    `;

  assert.htmlEqual(result, expected);
});
