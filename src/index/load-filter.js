import { writeSearchToQuery } from '../functions/query-functions.js';

const filterForm = document.getElementById('filter-cards');


filterForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterForm);
    const colors = getColors(formData);
    const searchOptions = {
        name: formData.get('card-name'),
        colors: colors
    };
});

function getColors(formData) {
    const getColors = [
        formData.get('white'),
        formData.get('blue'),
        formData.get('green'),
        formData.get('red'),
        formData.get('black')
    ];
    let colorCount = 0;
    const trueColors = [];
    let colorString = '';
    getColors.forEach(color => {
        if(color) {
            colorCount++;
            trueColors.push(color);
        }
    });

    if(colorCount === 1 ) {
        colorString += trueColors[0];
    }
    else if(colorCount > 1) {
        for(let i = 0; i < trueColors.length - 1; i++) {
            colorString += trueColors[i] + ',';
        }
        colorString += trueColors[trueColors.length -1];
    }
    return colorString;
}