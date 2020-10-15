import decode from '../src/decode';

describe('Testing Decode', () => {
    it('should take in a uuid and emit a string of emojis', () => {
        expect(decode('🤐🤐😚🥰🍑😘😝😍🤫🍑😗😍🤭😍')).toEqual('uuid-goes-here');
    });
});
