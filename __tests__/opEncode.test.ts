import encode from '../src/encode';

describe('Testing Encode', () => {
    it('should take in a uuid and emit a string of emojis', () => {
        expect(encode('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual('😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶🥺😏😒🙄😬🥱🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵⛸🤯🤠🥳😎');
    });
});
