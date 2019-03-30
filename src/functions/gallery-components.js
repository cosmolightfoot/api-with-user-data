import { addRemoveFavorite } from './add-remove-favorite.js';
import insertManaSymbols from './insert-mana-symbols.js';
function listMultipleTypes(typeArray) {    
    
    if(typeArray === 'N/A') {
        return typeArray;
    }
    else if(typeArray === 'Colorless') {
        return typeArray;
    }
    else {
        let typeString = typeArray[0];
        for(let i = 1; i < typeArray.length; i++) {
            typeString += ', ' + typeArray[i];
        }
        return typeString ? typeString : 'N/A';
    }
}


export function makeCardHtml(card) {
    const flavorText = card.flavor ? card.flavor : 'No Flavor Text.';
    const concactSubtypes = listMultipleTypes(card.subtypes);
    const subtypes = card.subtypes ? concactSubtypes : 'None';
    const concactTypes = listMultipleTypes(card.types);
    const manaCost = insertManaSymbols(card.manaCost);
    const text = insertManaSymbols(card.text);
    const types = card.subtypes ? concactTypes : 'N/A';
    const concactColors = listMultipleTypes(card.colors);
    const imageLocation = card.imageUrl || '../../assets/card-back.jpeg';
    const colors = card.colors ? concactColors : 'Colorless';
    const powerString = card.power + '/' + card.toughness;
    let powerTough;
    if(
        (card.power === 'undefined' && card.toughness === 'undefined') ||
        (!card.power || !card.toughness)) {
        powerTough = 'N/A';
    }
    else {
        powerTough = powerString;
    }

    const html = /*html*/`
    <li class="card-item">
        <img class="card-pic" src="${imageLocation}">
        <div class="info-wrapper">
            <h1 class="card-title">${card.name}</h1>
            <p class="card-text">${text}</p>
            <p class="card-flavor">${flavorText}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Types:</th>
                        <td>${types}</td>
                        <th>Set:</th>
                        <td title="${card.setName}">${card.setName}</td>
                        <th>Cost:</th>
                        <td class="card-cost">${manaCost}</td>
                        <th>Rarity:</th>
                        <td>${card.rarity}</td>
                    </tr>
                    <tr>
                        <th>Subtypes:</th>
                        <td>${subtypes}</td>
                        <th>Color:</th>
                        <td>${colors}</td>
                        <th>CMC:</th>
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
        const cardPic = dom.querySelector('.card-pic');
        const cardNode = dom.querySelector('.card-item');
        addRemoveFavorite(favoriteStar, cardNode, card);
        // const isEnlarged = false;
        cardPic.addEventListener('click', ()=> {
            let enlargedPic = document.querySelector('.enlarged');
            const clickedCardClasses = cardPic.getAttribute('class');
            // isEnlarged = true;
            if(!enlargedPic) {
                cardPic.classList.add('enlarged');
                enlargedPic = document.querySelector('.enlarged');
            }
            else if(clickedCardClasses.includes('enlarged')) {
                enlargedPic.classList.remove('enlarged');
            }
            else {
                enlargedPic.classList.remove('enlarged');
                cardPic.classList.add('enlarged');
                enlargedPic = document.querySelector('.enlarged');
            }
        });
        cardListNode.appendChild(dom);
    });
}

function clearList() {
    while(cardListNode.children.length) {
        cardListNode.lastElementChild.remove();
    }
}

