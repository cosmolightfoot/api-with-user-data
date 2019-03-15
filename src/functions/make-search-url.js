export function makeSearchURL(searchOptions) {
    const baseURL = 'https://api.magicthegathering.io/v1/cards';
    if(!searchOptions) {
        return baseURL;
    }
    const url = new URL(baseURL);
    if(searchOptions.name) {
        url.searchParams.set('name', searchOptions.name);
    }
    if(searchOptions.colors) {
        url.searchParams.set('colors', searchOptions.colors);
    }
    if(searchOptions.types) {
        url.searchParams.set('types', searchOptions.types);
    }
    if(searchOptions.subtypes) {
        url.searchParams.set('subtypes', searchOptions.subtypes);
    }
    if(searchOptions.setName) {
        url.searchParams.set('setName', searchOptions.setName);
    }
    if(searchOptions.page) {
        url.searchParams.set('page', searchOptions.page);
    }
    return url.toString();
}