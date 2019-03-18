import { auth, favoritesByUserRef } from '../firebase/firebase.js';

function listMultipleTypes(typeArray) {    
    let typeString = typeArray[0];
    for(let i = 1; i < typeArray.length; i++) {
        typeString += ', ' + typeArray[i];
    }
    return typeString ? typeString : 'N/A';
}


export function makeCardHtml(card) {
    const flavorText = card.flavor ? card.flavor : 'No Flavor Text.';
    const concactSubtypes = listMultipleTypes(card.subtypes);
    const subtypes = card.subtypes ? concactSubtypes : 'None';
    const types = listMultipleTypes(card.types);
    const concactColors = listMultipleTypes(card.colors);
    const imageLocation = card.imageUrl || '../../assets/card-back.jpeg';
    const colors = card.colors ? concactColors : 'Colorless';
    const powerString = card.power + '/' + card.toughness;
    const powerTough = (card.power && card.toughness) ? powerString : 'N/A';
    
    const html = /*html*/`
    <li class="card-item">
        <img class="card-pic" src="${imageLocation}">
        <div>
            <h1 class="card-title">${card.name}</h1>
            <p class="card-text">${card.text}</p>
            <p class="card-flavor">${flavorText}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Types:</th>
                        <td>${types}</td>
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
        const cardNode = dom.querySelector('.card-item');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCardRef = userFavoritesRef.child(card.id);
        userFavoriteCardRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }
                
                function addFavorite() {
                    isFavorite = true;
                    favoriteStar.textContent = '★';
                    favoriteStar.classList.add('favorite');
                    cardNode.classList.add('favorite-card');
                }

                function removeFavorite() {
                    isFavorite = false;
                    favoriteStar.textContent = '☆';
                    favoriteStar.classList.remove('favorite');
                    cardNode.classList.remove('favorite-card');
                }
                favoriteStar.addEventListener('click', () => {
                    console.log('card', card);
                    console.log('card.types', card.types);

                    userFavoriteCardRef.set({
                        id: card.id,
                        name: card.name || 'undefined',
                        cmc: card.cmc || 'undefined',
                        colors: card.colors ? card.colors : 'Colorless',
                        types: card.types ? card.types : 'N/A',
                        setName: card.setName || 'undefined',
                        subtypes: card.subtype ? card.subtype : 'N/A',
                        rarity: card.rarity || 'undefined',
                        text: card.text || 'undefined',
                        flavor: card.flavor || 'undefined',
                        manaCost: card.manaCost || 'undefined',
                        imageUrl: card.imageUrl || 'undefined',
                        power: card.power || 'undefined',
                        toughness: card.toughness || 'undefined'
                    });
                    addFavorite();
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

