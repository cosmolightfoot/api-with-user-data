import { writeSearchToQuery } from '../functions/query-functions.js';

const filterForm = document.getElementById('filter-cards');


filterForm.addEventListener('submit', event => {
    event.preventDefault();
    loadFilter();
});

filterForm.addEventListener('change', loadFilter);

function loadFilter() {
    const formData = new FormData(filterForm);
    const colors = getColors(formData);
    const searchOptions = {
        name: formData.get('card-name'),
        colors: colors,
        types: formData.get('card-type'),
        subtypes: formData.get('card-subtype'),
        setName: formData.get('card-set')
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchOptions);
    window.location.hash = newQuery;
}

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

    if(colorCount === 1) {
        colorString += trueColors[0];
    }
    else if(colorCount > 1) {
        for(let i = 0; i < trueColors.length - 1; i++) {
            colorString += trueColors[i] + ',';
        }
        colorString += trueColors[trueColors.length - 1];
    }
    return colorString;
}