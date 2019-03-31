import { writePageToQuery } from './query-functions.js';
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');
const totalResultsNode = document.getElementById('total-results');
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');





export function updatePaging(totalResults, searchOptions) {
    let currentPage = searchOptions.page || 1;
    totalResultsNode.textContent = totalResults;
    currentPageNode.textContent = currentPage;
    const totalPages = 1 + Math.floor(totalResults / 100);
    totalPagesNode.textContent = totalPages;
    previousButtonNode.disabled = currentPage === 1;
    nextButtonNode.disabled = currentPage === totalPages;

    previousButtonNode.addEventListener('click', () => {
        currentPage--;
        updateQuery();
    });

    nextButtonNode.addEventListener('click', () => {
        currentPage++;
        updateQuery();
    });
    
    
    function updateQuery() {
        const existingQuery = window.location.hash.slice(1);
        const newQuery = writePageToQuery(existingQuery, currentPage);
        console.log('new query', newQuery);
        window.location.hash = newQuery;
    }
}

















