export let morseKeys = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "",
};

export const SwitchMorse = () => {
    morseKeys = Object.entries(morseKeys).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
};

export const TranslateMorse = (stringText, isEnglish) => {
    // split each character, fit it into an array, search for its value, and then translate it, place it back into a

    // different methods of splitting is needed as for letters, its every letter but with morse code its with every space
    if (isEnglish) {
        // go for each letter, place in a string, every word is an array, sort it out with a loop later on

        let wordArr = String(stringText).split(" ");
        wordArr = wordArr
            .map((currentLetter) => {
                return currentLetter
                    .split("") // split every character into an array
                    .map((x) => {
                        if (morseKeys[x.toUpperCase()] !== undefined)
                            return morseKeys[x.toUpperCase()]; // convert it to the morse key
                        throw new Error("Please use letters only");
                    })
                    .join(" "); // rejoin the string into its array with a gap per letter in the string array (per word)
            }, [])
            .join("  ");
        return wordArr;
    } else {
        let wordArr = String(stringText).split("  ");

        wordArr = wordArr
            .map((currentLetter) => {
                return currentLetter
                    .split(" ") // split every character into an array
                    .map((x) => {
                        if (morseKeys[x] !== undefined)
                            return morseKeys[x].toLowerCase(); // convert it to the morse key
                        throw new Error("Unknown morse code key");
                    })
                    .join(""); // rejoin the string into its array except this time with a gap per letter and a double per word
            }, [])
            .join(" ");
        return wordArr;
    }
};

export default SwitchMorse;
