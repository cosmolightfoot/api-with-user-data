import { auth, favoritesByUserRef } from '../firebase/firebase.js';

function listMultipleTypes(typeArray) {
    let typeString = typeArray[0];
    for(let i = 1; i < typeArray.length; i++) {
        typeString += ', ' + typeArray[i];
    }
    return typeString;
}


export function makeCardHtml(card) {
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
        <span class="favorite-star">☆</span>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const cardListNode = document.getElementById('card-list');

export function loadGallery(cardArray) {
    clearList();
    cardArray.forEach(card => {
        const dom = makeCardHtml(card);
        const favoriteStar = dom.querySelector('.favorite-star');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCardRef = userFavoritesRef.child(card.id);
        favoriteStar.addEventListener('click', () => {
            userFavoriteCardRef.set({
                id: card.id,
                name: card.name || 'undefined',
                cmc: card.cmc || 'undefined',
                colors: card.colors || 'undefined',
                type: card.type || 'undefined',
                setName: card.setName || 'undefined',
                subtypes: card.subtypes || 'undefined',
                rarity: card.rarity || 'undefined',
                text: card.text || 'undefined',
                flavor: card.flavor || 'undefined',
                manaCost: card.manaCost || 'undefined',
                imageUrl: card.imageURL || 'undefined',
                power: card.power || 'undefined',
                toughness: card.toughness || 'undefined'
            });
        });
        cardListNode.appendChild(dom);
    });
}

function clearList() {
    while(cardListNode.children.length) {
        cardListNode.lastElementChild.remove();
    }
}

