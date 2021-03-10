import { map } from '../src/mapping';

const uniqueCharacters = new Set();

describe('Testing uniqueness', () => {
    Object.keys(map).forEach(key => {
        uniqueCharacters.add(key);
    });
    it('should take in mapping, add keys to a set and compare size', () => {
        expect(Object.keys(map).length).toEqual(uniqueCharacters.size);
    });
});
