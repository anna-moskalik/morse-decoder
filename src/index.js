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
    exprDecoded = '';
    for (let i=0; i < expr.length; i +=10) {
        let letterEncoded = expr.slice (i, i+10);
        let letterMorse = '';
        if (letterEncoded === '**********') {
            exprDecoded += ' ';
        } else {
            letterMorse += letterEncoded.replace (/11/g, '-').replace (/10/g, '.').replace (/00/g, '');
            exprDecoded += MORSE_TABLE[letterMorse];
        }
    }
return exprDecoded;
}

module.exports = {
    decode
}