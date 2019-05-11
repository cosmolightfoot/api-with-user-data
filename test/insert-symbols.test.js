
const test = QUnit.test;

QUnit.module('insert symbols alternative');

function getSymbols(string) {
  const regexp = /\{(.*?)\}/g;
  return string.match(regexp);
}



test('gets list of symbol tags using regex', assert => {
  const string = '{B}{B}{B}fjkvnalkjfer{12}sdkwekjcn{B/U}kscneucn{2/G}';
  const result = getSymbols(string);
  const expected = ['{B}', '{B}', '{B}', '{12}', '{B/U}', '{2/G}'];
  assert.deepEqual(result, expected);
});

test('converts mana symbol into correct URL', assert => {
  const string = '{B}';
  const result = makeFilePath(string);
  const expected = 
  assert.deepEqual(result, expected);
});
