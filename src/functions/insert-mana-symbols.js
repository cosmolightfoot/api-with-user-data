export function getSymbols(string) {
  const regExp = /\{(.*?)\}/g;
  if(string) return string.match(regExp);
}

export function makeImageTag(manaCode) {
  const tag = manaCode.slice(1, -1);
  if(tag.includes('/')) {
    return `<img src="../../assets/${tag[0].toLowerCase()}-or-${tag[tag.length - 1].toLowerCase()}-mana.svg">`;
  } else {
    return `<img src="../../assets/${tag.toLowerCase()}-mana.svg">`;
  }
}

export default function insertManaSymbols(cardProperty) {
  const codelist = getSymbols(cardProperty);
  if(!codelist) return cardProperty;
  let outerValue = cardProperty;
  codelist.forEach(code => {
    const innerValue = outerValue.replace(code, makeImageTag(code));
    outerValue = innerValue;
  });
  return outerValue;
}

