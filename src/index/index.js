import loadHeader from '../functions/header-components.js';
import loadSearchForm from '../functions/build-filter-components.js';
import './load-filter.js';
import { readFromQuery } from '../functions/query-functions.js';
import { loadGallery } from '../functions/gallery-components.js';
import { makeSearchURL } from '../functions/make-search-url.js';


loadHeader();
loadSearchForm();
loadQuery();

window.addEventListener('hashchange', loadQuery);


function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const apiURL = makeSearchURL(searchOptions);
    fetch(apiURL).then(response => response.json()).then(body => {
        loadGallery(body.cards);
        console.log(body.cards);
    });
}