export function writeSearchToQuery(existingQuery, searchOptions) {
  const URL = new URLSearchParams(existingQuery);
  URL.delete('page');
  if(URL.get('name') && !searchOptions.name) {
    URL.delete('name');
  }
  else if(searchOptions.name) {
    URL.set('name', searchOptions.name);
  }

  if(URL.get('colors') && !searchOptions.colors) {
    URL.delete('colors');
  }
  else if(searchOptions.colors) {
    URL.set('colors', searchOptions.colors);
  }
    
  if(URL.get('types') && !searchOptions.types) {
    URL.delete('types');
  }
  else if(searchOptions.types) {
    URL.set('types', searchOptions.types);
  }

  if(URL.get('subtypes') && !searchOptions.subtypes) {
    URL.delete('subtypes');
  }
  else if(searchOptions.subtypes) {
    URL.set('subtypes', searchOptions.subtypes);
  }

  if(URL.get('setName') && !searchOptions.setName) {
    URL.delete('setName');
  }
  else if(searchOptions.setName) {
    URL.set('setName', searchOptions.setName);
  }


  URL.set('page', 1);
  return URL.toString();
}

export function writePageToQuery(existingQuery, newPageNumber) {
  const URL = new URLSearchParams(existingQuery);
  URL.set('page', newPageNumber);

  return URL.toString();
}

export function readFromQuery(existingQuery) {
  const URL = new URLSearchParams(existingQuery);
  let searchOptions = {
    name: URL.get('name'),
    colors: URL.get('colors'),
    types: URL.get('types'),
    subtypes: URL.get('subtypes'),
    setName: URL.get('setName'),
    page: URL.get('page')
  };
  return searchOptions;
}
