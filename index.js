// MVP
// Create a user interface that allows the user to either input some English text or some Morse Code

// Create JS functions that would allow the user to:

// translate their English text into Morse Code
// Morse Code into English text
// Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

// Make sure to separate pure JS functions and DOM manipulation

// Add unit testins for each of the pure function that your translator uses (each function should have at least 4 tests, think of edge case, wrong inputs, etc ...)

import { morseKeys, TranslateMorse, SwitchMorse } from "./morse.js";

let isEnglish = true;
const text1 = document.getElementById("textareaOne");
const text2 = document.getElementById("textareaTwo");
const leftHeader = document.getElementById("leftBox");
const rightHeader = document.getElementById("rightBox");
const reverseBtn = document.getElementById("reverseBtn");
const errorText = document.getElementById("error");

reverseBtn.addEventListener("click", ReverseAndUpdate);
text1.addEventListener("input", UpdateTranslation);

function UpdateTranslation() {
    try {
        let translation = TranslateMorse(text1.value, isEnglish);
        text2.value = translation;
        errorText.innerHTML = "";
    } catch (e) {
        errorText.innerHTML = e.message;
    }
    // translation is currently in arrays per word, there will be a double space gap per space, gaps between morse is already done
}
function ReverseAndUpdate() {
    // switch text, and then reverse the morse keys, no translation is neccessary as they will equal the same anyways once the keys are switched
    isEnglish = !isEnglish;
    let temporary = text1.value;
    text1.value = text2.value;
    text2.value = temporary;

    let temporaryHead = leftHeader.innerHTML;
    leftHeader.innerHTML = rightHeader.innerHTML;
    rightHeader.innerHTML = temporaryHead;

    SwitchMorse();
}
