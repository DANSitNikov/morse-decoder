const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g),
        res = [],
        finish = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j += 2) {
            let str = arr[i][j] + arr[i][j + 1];
            if (str === '10') {
                res.push('.');
            } else if (str === '11') {
                res.push('-');
            }
        }
        res.push(1);
    }

    res = res.join('').split('1');

    for (let i = 0; i < res.length; i++) {
        finish.push(MORSE_TABLE[res[i]]);
    }
    return finish.join('');
}

module.exports = {
    decode
}