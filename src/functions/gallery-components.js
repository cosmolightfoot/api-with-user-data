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
        cardListNode.appendChild(dom);
    });
}

function clearList() {
    while(cardListNode.length) {
        cardListNode.lastElementChild.remove();
    }
}
