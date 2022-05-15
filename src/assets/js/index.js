/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
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

const sp = [ 'caseDown', 'caseUp', 'caseShift', 'caseShiftCapsLock'];

const myAudio = [];

for (let i = 1; i < 10; i += 1) {
  const audio = new Audio();
  audio.src = `src/assets/media/${i}.mp3`;
  myAudio.push(audio);
}

let lang = localStorage.getItem('lang') || 'en';

let curPos = 0;
let curPosNew = curPos;

const setSelectionRange = (input, selectionStart, selectionEnd) => {
  //   if (input.setSelectionRange) {
  input.focus();
  input.setSelectionRange(selectionStart, selectionEnd);
  //   }
  // else if (input.createTextRange) {
  //     const range = input.createTextRange();
  //     range.collapse( true );
  //     range.moveEnd( 'character', selectionEnd );
  //     range.moveStart( 'character', selectionStart );
  //     range.select();
  // }
};

const setCaretToPos = (input, pos) => setSelectionRange(input, pos, pos);

const keyboard = {
  elements: {
    main: null,
    textarea: null,
    keysContainer: null,
    keys: null,
    capsLock: null,
    shiftLeft: null,
    ShiftRight: null
  },

  properties: {
    capsLock: false, shift: false
  },

  init() {
    const header = document.createElement('h1');
    header.innerHTML = 'RSS Virtual Keyboard';
    header.classList.add('title');

    const info1 = document.createElement('p');
    info1.innerText = 'Клавиатура создана в ОС: Windows';
    info1.classList.add('info');

    const info2 = document.createElement('p');
    info2.innerText = 'Для переключения языка комбинация: CtrlLeft + Alt';
    info2.classList.add('info');

    const textarea = document.createElement('textarea');
    curPos = textarea.selectionStart;
    textarea.classList.add('body--textarea', 'textarea');
    textarea.id = 'textarea';

    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('wrapper');
    this.elements.main.appendChild(header);
    this.elements.main.appendChild(textarea);
    this.elements.textarea = textarea;
    this.elements.main.appendChild(info1);
    this.elements.main.appendChild(info2);

    const keyboardTemp = document.createElement('div');
    keyboardTemp.classList.add('body--keyboard', 'keyboard', 'keyboard--hidden');
    this.elements.main.appendChild(keyboardTemp);

    this.elements.keysContainer = document.createElement('div');
    this.elements.keysContainer.classList.add('keyboard__keys');

    this.elements.keysContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
    keyboardTemp.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < keys.length; i += 1) {
      const divRow = document.createElement('div');
      divRow.classList.add('keyboard__row', 'row');

      for (const key in keys[i]) {
        const div = document.createElement('div');
        div.classList.add('keyboard__key', 'key', key, keys[i][key][2]);

        const butRus = document.createElement('span');
        butRus.classList.add('rus');

        const butEng = document.createElement('span');
        butEng.classList.add('eng');

        sp.map((el, ind) => {
          const sp1 = document.createElement('span');
          sp1.innerText = keys[i][key][0][ind];
          sp1.classList.add(el, 'hidden');
          sp1.addEventListener('click', (e) => this.keyMouseClick(e));
          butRus.appendChild(sp1);
          const sp2 = document.createElement('span');
          sp2.innerText = keys[i][key][1][ind];
          sp2.classList.add(el, 'hidden');
          sp2.addEventListener('click', (e) => this.keyMouseClick(e));
          butEng.appendChild(sp2);
          return { butRus, butEng };
        });

        lang === 'en' ? butEng.children[0].classList.remove('hidden') : butRus.children[0].classList.remove('hidden');

        div.appendChild(butRus);
        div.appendChild(butEng);
        divRow.appendChild(div);
      }
      fragment.appendChild(divRow);
    }
    return fragment;
  },

  changeHidden(indF) {
    const ind = lang === 'en' ? 1 : 0;
    this.elements.keys.forEach((el) => {
      const elt = el.children[ind];
      for (let i = 0; i < elt.childElementCount; i += 1) elt.children[i].classList.add('hidden');
      if (indF > -1) elt.children[indF].classList.remove('hidden');
    });
  },

  keyMouseClick(e) {
    const butKey = e.target;
    const key = butKey.outerText;
    const keyCode = Number(e.target.parentElement.parentElement.classList[3]);
    const code = e.target.parentElement.parentElement.classList[2];
    let evt = null;
    keyCode === 16
      ? evt = new KeyboardEvent('keydown', {
        keyCode, which: keyCode, code, key, shiftKey: true
      })
      : evt = new KeyboardEvent('keydown', {
        keyCode, which: keyCode, code, key
      });
    document.dispatchEvent(evt);

    setTimeout(() => {
      evt = new KeyboardEvent('keyup', {
        keyCode, which: keyCode, code, key
      });
      document.dispatchEvent(evt);
    }, 350);
  }
};

let ctrl = false;
document.addEventListener('keydown', (e) => {
  let sound = 3;
  const codekey = e.code;
  let { key } = e;

  if (codekey === 'ControlLeft') {
    key = '';
    ctrl = true;
  }

  if (codekey === 'AltLeft' || codekey === 'AltRight') {
    key = '';
    if (ctrl === true) {
      keyboard.changeHidden(-1);
      lang = lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', lang);
      keyboard.properties.capsLock
        ? keyboard.changeHidden(2)
        : keyboard.changeHidden(0);
      ctrl = false;
    }
  }

  e.preventDefault();
  const butKey = document.querySelector(`.${codekey}`);
  // console.log(butKey)
  if (butKey) {
    if (key) key = butKey.innerText;
    butKey.style.cssText = 'transform: translate(3px, 3px);border-radius:17px; background-color:  #b7e10f;';
    butKey.click();
  }

  if (codekey === 'CapsLock') {
    key = '';
    sound = 4;
    if (keyboard.properties.capsLock) {
      butKey.classList.remove('active');
      keyboard.properties.capsLock = false;
    } else {
      butKey.classList.add('active');
      keyboard.properties.capsLock = true;
    }
    keyboard.properties.capsLock
      ? keyboard.properties.shift
        ? keyboard.changeHidden(3)
        : keyboard.changeHidden(2)
      : keyboard.changeHidden(0);
  }

  if (['ShiftLeft', 'ShiftRight', 'Shift'].includes(codekey)) {
    key = '';
    sound = 4;
    if (!keyboard.properties.shift) {
      butKey.classList.add('active');
      keyboard.properties.shift = true;
    }
    keyboard.properties.capsLock ? keyboard.changeHidden(3) : keyboard.changeHidden(1);
  }

  if (['Backspace', 'Delete', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'Tab', 'AltRight'].includes(codekey)) {
    key = '';
    sound = 7;
  }

  const { textarea } = keyboard.elements;

  switch (codekey) {
    case 'Backspace':
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      if (curPos !== 0) {
        if (curPos === textarea.value.length && curPos !== 0) {
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
          setCaretToPos(textarea, curPos - 1);
        } else {
          const cache = textarea.value.slice(curPos);
          textarea.value = textarea.value.slice(0, curPos)
            .substring(0, textarea.value.slice(0, curPos).length - 1) + cache;
          setCaretToPos(textarea, curPos - 1);
        }
      }
      textarea.focus();
      break;
    case 'Delete':
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      if (curPos !== textarea.value.length) {
        const cache = textarea.value.slice(curPos + 1);
        textarea.value = textarea.value.slice(0, curPos)
          .substring(0, textarea.value.slice(0, curPos).length + 1) + cache;
        setCaretToPos(textarea, curPos);
      }
      textarea.focus();
      break;

    case 'ArrowLeft':
      key = '';
      sound = 7;
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      if (curPos !== 0) setCaretToPos(textarea, curPos - 1);
      textarea.focus();
      break;
    case 'ArrowRight':
      key = '';
      sound = 7;
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      if (curPos !== textarea.value.length) setCaretToPos(textarea, curPos + 1);
      textarea.focus();
      break;
    case 'ArrowUp':
      key = '';
      sound = 7;
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      curPosNew = curPos;
      if (textarea.value.length) {
        const rows = textarea.value.split('\n');
        let i = 0;
        curPosNew = 0;
        while (i < rows.length) {
          if (curPos > curPosNew + rows[i].length + 1) curPosNew += rows[i].length + 1;
          else {
            i ? (curPos - curPosNew < rows[i - 1].length)
              ? curPosNew = curPos - 1 - rows[i - 1].length
              : curPosNew -= 1 : curPosNew = curPos - rows[0].length - 1;
            i = rows.length;
          }
          i += 1;
        }
        setCaretToPos(textarea, curPosNew);
      }
      textarea.focus();
      break;
    case 'ArrowDown':
      key = '';
      sound = 7;
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      curPosNew = curPos;
      if (textarea.value.length) {
        const rows = textarea.value.split('\n');
        let i = 0;
        curPosNew = 0;
        while (i < rows.length) {
          if (curPos >= curPosNew + rows[i].length + 1) curPosNew += rows[i].length + 1;
          else {
            (i + 1) < rows.length
              ? (curPos - curPosNew <= rows[i + 1].length)
                ? curPosNew = curPos + rows[i].length + 1
                : curPosNew += rows[i].length + rows[i + 1].length + 1
              : curPosNew = curPos + rows[i].length;
            i = rows.length;
          }
          i += 1;
        }
        setCaretToPos(textarea, curPosNew);
      }
      textarea.focus();
      break;
    default:
      if (codekey === 'Tab') key = '\t';
      if (codekey === 'Space') key = ' ';
      if (codekey === 'Enter') key = '\n';
      myAudio[sound].currentTime = 0;
      myAudio[sound].play();
      curPos = textarea.selectionStart;
      if (curPos === textarea.value.length) {
        textarea.value += key;
      } else {
        const cache = textarea.value.slice(curPos);
        textarea.value = textarea.value.slice(0, curPos) + key + cache;
      }
      textarea.focus();
      if (key) setCaretToPos(textarea, curPos + 1);
      break;
  }
});

document.addEventListener('keyup', (e) => {
  const butKey = document.querySelector(`.${e.code}`);
  butKey.style.cssText = 'transform: translate(0px, 0px)';

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (keyboard.properties.shift) {
      butKey.classList.remove('active');
      keyboard.properties.shift = false;
    }
    keyboard.properties.capsLock
      ? keyboard.changeHidden(2)
      : keyboard.changeHidden(0);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
