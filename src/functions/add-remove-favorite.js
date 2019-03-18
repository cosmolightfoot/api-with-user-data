import { auth, favoritesByUserRef } from '../firebase/firebase.js';

export function addRemoveFavorite(favoriteStar, cardNode, card) {
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
                if(!isFavorite){
                    userFavoriteCardRef.set({
                        id: card.id,
                        name: card.name || 'undefined',
                        cmc: card.cmc || 'undefined',
                        colors: card.colors[0] ? card.colors : 'Colorless',
                        types: card.types ? card.types : 'N/A',
                        setName: card.setName || 'undefined',
                        subtypes: card.subtype ? card.subtype : 'N/A',
                        rarity: card.rarity || 'undefined',
                        text: card.text || 'undefined',
                        flavor: card.flavor || 'No Flavor Text',
                        manaCost: card.manaCost || 'undefined',
                        imageUrl: card.imageUrl || '../../assets/card-back.jpeg',
                        power: card.power || 'undefined',
                        toughness: card.toughness || 'undefined'
                    });
                    addFavorite();
                }
                else {
                    removeFavorite();
                    userFavoriteCardRef.remove();
                }
            });
        });
}