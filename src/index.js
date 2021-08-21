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
    let i = 0;
    let subStrArr = [];
    let resultStr = "";

    while(i < expr.length){
    let subStr = expr.substr(i, 10);
     subStrArr.push(subStr);
     i += 10;
    };
    for (let i = 0; i < subStrArr.length; i++){
        let spaces = subStrArr[i].replace(/\W+/g, " ");
        let dashes = spaces.replace(/11/g, "-");
        let dots = dashes.replace(/10/g, ".");
        let zeros = dots.replace(/0+/g, "");
        subStrArr[i] = zeros;
        if(subStrArr[i] !== " "){
            resultStr += MORSE_TABLE[subStrArr[i]];
        } else {
            resultStr += subStrArr[i];
        }
    }
    return resultStr;
}

module.exports = {
    decode
}