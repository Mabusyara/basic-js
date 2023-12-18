const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(text, key) {
    if (!(typeof text === 'string' && typeof key === 'string')) throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyPointer = 0;
    for (let i = 0; i < text.length; i += 1) {
      if (alphabet.includes(text[i].toUpperCase())) {
        let dpos = alphabet.indexOf(key[keyPointer].toUpperCase());
        let letterPosition = alphabet.indexOf(text[i].toUpperCase())
        result += alphabet[dpos + letterPosition];
        keyPointer += 1;
        if (keyPointer === key.length) keyPointer = 0;
      } else {
        result+= text[i];
      }
    }
    if (!this.isDirect) result = result.split('').reverse().join('');
    return result;
  }
  decrypt(text, key) {
    if (!(typeof text === 'string' && typeof key === 'string')) throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyPointer = 0;
    for (let i = 0; i < text.length; i += 1) {
      if (alphabet.includes(text[i])) {
        let dpos = alphabet.indexOf(key[keyPointer].toUpperCase());
        let letterPosition = alphabet.indexOf(text[i], 26)
        result += alphabet[letterPosition - dpos];
        keyPointer += 1;
        if (keyPointer === key.length) keyPointer = 0;
      } else {
        result+= text[i];
      }
    }
    if (!this.isDirect) result = result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};