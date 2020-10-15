# emoji-uuid

A simple uuid to emoji encoder and decoder

# Installation

`npm install emoji-uuid`

To use encoding and decoding:

```javascript
import { encode, decode } from 'emoji-uuid';
console.log(encode('uuid-goes-here')); //prints "🤐🤐😚🥰🍑😘😝😍🤫🍑😗😍🤭😍"
console.log(decode('🤐🤐😚🥰🍑😘😝😍🤫🍑😗😍🤭😍')); //prints "uuid-goes-here"
```

## Demo

you can also try the this utility without having to install it by accessing a NodeJS API <a href="https://emoji-uuid.azurewebsites.net/">here</a> Instructions to use this API can be found at <a href="https://github.com/sudo-vaibhav/emoji-uuid-api">https://github.com/sudo-vaibhav/emoji-uuid-api</a>
