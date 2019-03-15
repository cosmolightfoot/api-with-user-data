const test = QUnit.test; 


QUnit.module('array to object');

import { objectToArray } from '../src/functions/object-to-array.js';

test('function maps object of users to array of user objects', assert => {
    const testObject = {
        idOne: {
            propertyOne: 'valueOne',
            propertyTwo: 'valueTwo',
            propertyThree: 'valueThree'
        },
        idTwo: {
            propertyOne: 'valueOne',
            propertyTwo: 'valueTwo',
            propertyThree: 'valueThree'
        },
        idThree: {
            propertyOne: 'valueOne',
            propertyTwo: 'valueTwo',
            propertyThree: 'valueThree'
        }
    };

    const result = objectToArray(testObject);
    const expected = [testObject.idOne, testObject.idTwo, testObject.idThree];
    
    assert.deepEqual(result, expected);
});