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
    // write your solution here


    const words = expr.split('**********')
    let letters = [];
    for (i in words) {
        letters.push([])
        let letter = 0
        for (let j = 1; j < words[i].length; j += 10) {
            letters[i][letter] = words[i].slice(j - 1, j + 9)
            letter++
        }
    }

    let strEng = ''
    for (word in letters) {
        let wordEng = ''
        for (letter of letters[word]) {
            const letterX = letter.split('')
            let morseCode = []
            let last = letterX.pop()
            let current
            while (letterX.length) {
                current = letterX.pop()

                if (current === '0') {
                    break;
                }
                if (last === '1') {
                    morseCode.unshift('-')
                } else {
                    morseCode.unshift('.')
                }
                last = letterX.pop()
            }
            wordEng = wordEng + MORSE_TABLE[morseCode.join('')]
        }
        strEng += wordEng
        if (word != letters.length - 1) {
            strEng += ' '
        }
    }

    return strEng
}



module.exports = {
    decode
}