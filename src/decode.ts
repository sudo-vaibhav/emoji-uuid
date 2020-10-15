import { inverted } from './mapping';
export default (emojis: string): string => {
    const id = [...emojis].map(emoji => {
        return inverted[emoji];
    });
    return id.join('');
};
