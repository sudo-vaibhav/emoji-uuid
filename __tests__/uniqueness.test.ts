import { map } from '../src/mapping';

let mySet = new Set();

describe('Testing uniqueness', () => {
    Object.keys(map).forEach(key => {
        mySet.add(key);
    });
    it('should take in mapping, add keys to a set and compare size', () => {
        expect(Object.keys(map).length).toEqual(mySet.size);
    });
});
