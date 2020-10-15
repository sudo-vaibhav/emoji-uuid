import { map } from './mapping';
export default (id: string): string => {
    const emojis = id.split('').map(character => {
        return map[character];
    });
    return emojis.join('');
};
