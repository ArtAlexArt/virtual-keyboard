const keys = [
  // row1
  {
    Backquote: [['ё', 'Ё', 'Ё', 'ё'], ['`', '~', '`', '~'], 192],
    Digit1: [['1', '!', '1', '!'], ['1', '!', '1', '!'], 49],
    Digit2: [['2', '"', '2', '"'], ['2', '@', '2', '@'], 50],
    Digit3: [['3', '№', '3', '№'], ['3', '#', '3', '#'], 51],
    Digit4: [['4', ';', '4', ';'], ['4', '$', '4', '$'], 52],
    Digit5: [['5', '%', '5', '%'], ['5', '%', '5', '%'], 53],
    Digit6: [['6', ':', '6', ':'], ['6', '^', '6', '^'], 54],
    Digit7: [['7', '?', '7', '?'], ['7', '&', '7', '&'], 55],
    Digit8: [['8', '*', '8', '*'], ['8', '*', '8', '*'], 56],
    Digit9: [['9', '(', '9', '('], ['9', '(', '9', '('], 57],
    Digit0: [['0', ')', '0', ')'], ['0', ')', '0', ')'], 48],
    Minus: [['-', '_', '-', '_'], ['-', '_', '-', '_'], 189],
    Equal: [['=', '+', '=', '+'], ['=', '+', '=', '+'], 187],
    Backspace: [['Backspace', 'Backspace', 'Backspace', 'Backspace'], ['Backspace', 'Backspace', 'Backspace', 'Backspace'], 8]
  }, // row2
  {
    Tab: [['Tab', 'Tab', 'Tab', 'Tab'], ['Tab', 'Tab', 'Tab', 'Tab'], 9],
    KeyQ: [['й', 'Й', 'Й', 'й'], ['q', 'Q', 'Q', 'q'], 81],
    KeyW: [['ц', 'Ц', 'Ц', 'ц'], ['w', 'W', 'W', 'w'], 87],
    KeyE: [['у', 'У', 'У', 'у'], ['e', 'E', 'E', 'e'], 69],
    KeyR: [['к', 'К', 'К', 'к'], ['r', 'R', 'R', 'r'], 82],
    KeyT: [['е', 'Е', 'Е', 'е'], ['t', 'T', 'T', 't'], 84],
    KeyY: [['н', 'Н', 'Н', 'н'], ['y', 'Y', 'Y', 'y'], 89],
    KeyU: [['г', 'Г', 'Г', 'г'], ['u', 'U', 'U', 'u'], 85],
    KeyI: [['ш', 'Ш', 'Ш', 'ш'], ['i', 'I', 'I', 'i'], 73],
    KeyO: [['щ', 'Щ', 'Щ', 'щ'], ['o', 'O', 'O', 'o'], 79],
    KeyP: [['з', 'З', 'З', 'з'], ['p', 'P', 'P', 'p'], 80],
    BracketLeft: [['х', 'Х', 'Х', 'х'], ['[', '{', '[', '{'], 219],
    BracketRight: [['ъ', 'Ъ', 'Ъ', 'ъ'], [']', '}', ']', '}'], 221],
    Backslash: [['\\', '/', '\\', '/'], ['\\', '|', '\\', '|'], 220],
    Delete: [['Del', 'Del', 'Del', 'Del'], ['Del', 'Del', 'Del', 'Del'], 46]
  }, // row3
  {
    CapsLock: [['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], 20],
    KeyA: [['ф', 'Ф', 'Ф', 'ф'], ['a', 'A', 'A', 'a'], 65],
    KeyS: [['ы', 'Ы', 'Ы', 'ы'], ['s', 'S', 'S', 's'], 83],
    KeyD: [['в', 'В', 'В', 'в'], ['d', 'D', 'D', 'd'], 68],
    KeyF: [['а', 'А', 'А', 'а'], ['f', 'F', 'F', 'f'], 70],
    KeyG: [['п', 'П', 'П', 'п'], ['g', 'G', 'G', 'g'], 71],
    KeyH: [['р', 'Р', 'Р', 'р'], ['h', 'H', 'H', 'h'], 72],
    KeyJ: [['о', 'О', 'О', 'о'], ['j', 'J', 'J', 'j'], 74],
    KeyK: [['л', 'Л', 'Л', 'л'], ['k', 'K', 'K', 'k'], 75],
    KeyL: [['д', 'Д', 'Д', 'д'], ['l', 'L', 'L', 'l'], 76],
    Semicolon: [['ж', 'Ж', 'Ж', 'ж'], [';', ':', ';', ':'], 186],
    Quote: [['э', 'Э', 'Э', 'э'], ["'", '"', "'", '"'], 222],
    Enter: [['Enter', 'Enter', 'Enter', 'Enter'], ['Enter', 'Enter', 'Enter', 'Enter'], 13]
  }, // row4
  {
    ShiftLeft: [['Shift', 'Shift', 'Shift', 'Shift'], ['Shift', 'Shift', 'Shift', 'Shift'], 16],
    KeyZ: [['я', 'Я', 'Я', 'я'], ['z', 'Z', 'Z', 'z'], 90],
    KeyX: [['ч', 'Ч', 'Ч', 'ч'], ['x', 'X', 'X', 'x'], 88],
    KeyC: [['с', 'С', 'С', 'с'], ['c', 'C', 'C', 'c'], 67],
    KeyV: [['м', 'М', 'М', 'м'], ['v', 'V', 'V', 'v'], 86],
    KeyB: [['и', 'И', 'И', 'и'], ['b', 'B', 'B', 'b'], 66],
    KeyN: [['т', 'Т', 'Т', 'т'], ['n', 'N', 'N', 'n'], 78],
    KeyM: [['ь', 'Ь', 'Ь', 'ь'], ['m', 'M', 'M', 'm'], 77],
    Comma: [['б', 'Б', 'Б', 'б'], [',', '<', ',', '<'], 188],
    Period: [['ю', 'Ю', 'Ю', 'ю'], ['.', ' > ', '.', '>'], 190],
    Slash: [['.', ',', '.', ','], ['/', '?', '/', '?'], 191],
    ArrowUp: [['▲', '▲', '▲', '▲'], ['▲', '▲', '▲', '▲'], 38],
    ShiftRight: [['Shift', 'Shift', 'Shift', 'Shift'], ['Shift', 'Shift', 'Shift', 'Shift'], 16]
  }, // row5
  {
    ControlLeft: [['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 17],
    MetaLeft: [['Win', 'Win', 'Win', 'Win'], ['Win', 'Win', 'Win', 'Win'], 91],
    AltLeft: [['Alt', 'Alt', 'Alt', 'Alt'], ['Alt', 'Alt', 'Alt', 'Alt'], 18],
    Space: [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], 32],
    AltRight: [['Alt', 'Alt', 'Alt', 'Alt'], ['Alt', 'Alt', 'Alt', 'Alt'], 18],
    ArrowLeft: [['◄', '◄', '◄', '◄'], ['◄', '◄', '◄', '◄'], 37],
    ArrowDown: [['▼', '▼', '▼', '▼'], ['▼', '▼', '▼', '▼'], 40],
    ArrowRight: [['►', '►', '►', '►'], ['►', '►', '►', '►'], 39],
    ControlRight: [['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 17]
  }];

const sp = ['caseDown', 'caseUp', 'caseShift', 'caseShiftCapsLock'];

const myAudio = [];

for (let i = 1; i < 10; i += 1) {
  const audio = new Audio();
  audio.src = `src/assets/media/${i}.mp3`;
  myAudio.push(audio);
}

let lang = localStorage.getItem('lang') || 'en';

let curPos = 0;
let curPosNew = curPos;

