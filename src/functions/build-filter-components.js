import { types, subtypes, setNames } from '../../data/filter-data.js';

export function makeOptionHtml(type) {
    const lowerType = type.toLowerCase();
    const html = `    
    <option value="${lowerType}">${type}</option>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadSearchForm() {
    const filterByTypeNode = document.getElementById('filter-type');
    const filterBySubtypeNode = document.getElementById('filter-subtype');
    const filterBySetNode = document.getElementById('filter-set');

    types.forEach(type => {
        const typeDom = makeOptionHtml(type);
        filterByTypeNode.appendChild(typeDom);
    });
    
    subtypes.forEach(subtype => {
        const subtypeDom = makeOptionHtml(subtype);
        filterBySubtypeNode.appendChild(subtypeDom);
    });
    
    setNames.forEach(setName => {
        const setNameDom = makeOptionHtml(setName);
        filterBySetNode.appendChild(setNameDom);
    });


    
}