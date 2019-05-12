import loadHeader from '../functions/header-components.js';
import loadSearchForm from '../functions/build-filter-components.js';
import './load-filter.js';
import { readFromQuery } from '../functions/query-functions.js';
import { loadGallery } from '../functions/gallery-components.js';
import { makeSearchURL } from '../functions/make-search-url.js';
import { updatePaging } from '../functions/paging-components.js';
loadHeader();
loadSearchForm();
loadQuery();

window.addEventListener('hashchange', loadQuery);


function loadQuery() {
  const existingQuery = window.location.hash.slice(1);
  const searchOptions = readFromQuery(existingQuery);
  const apiURL = makeSearchURL(searchOptions);
  fetch(apiURL).then(response => Promise.all([response.json(), response.headers.get('total-count')]))
    .then(responses => {
      loadGallery(responses[0].cards);
      updatePaging(responses[1], searchOptions);
    });
}
