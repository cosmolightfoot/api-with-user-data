export function objectToArray(object) {
    const key = Object.keys(object);
    return key.map(key => object[key]);
}