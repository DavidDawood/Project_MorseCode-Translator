import * as morseTest from "./morse.js";
const morseKey = {
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
};
const morseKeyInvert = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
};
describe("Test cases for the morse code project", () => {
    it("should return an object with all morse keys reversed with keys and values", () => {
        expect(morseTest.SwitchMorse(morseKey)).toStrictEqual(morseKeyInvert);
    });
    it("should correctly convert morse code", () => {
        expect(morseTest.TranslateMorse(morseKey, "A", true)).toBe(".-");
        expect(morseTest.TranslateMorse(morseKey, "F", true)).toBe("..-.");
        expect(morseTest.TranslateMorse(morseKey, "Ada", true)).toBe(
            ".- -.. .-",
        );
        expect(morseTest.TranslateMorse(morseKey, "Ada Baba", true)).toBe(
            ".- -.. .-  -... .- -... .-",
        );
    });
    it("Should return a letter only error when attempting to parse non-alphabetics", () => {
        expect(() =>
            morseTest.TranslateMorse(morseKey, "Abx2341bc 41", true),
        ).toThrowError("Please use letters only");
        expect(() =>
            morseTest.TranslateMorse(morseKey, "Dav1d__a", true),
        ).toThrowError("Please use letters only");
        expect(() =>
            morseTest.TranslateMorse(morseKey, "%)#%(A(34", true),
        ).toThrowError("Please use letters only");
    });
    it("Should return a unknown morse key error when the user attempts to parse a morse code that is not correct", () => {
        expect(() =>
            morseTest.TranslateMorse(morseKeyInvert, "......", false),
        ).toThrowError("Unknown morse code key");
        expect(() =>
            morseTest.TranslateMorse(
                morseKeyInvert,
                "..  ... . .. . . . ..",
                false,
            ),
        ).toThrowError("Unknown morse code key");
        expect(() =>
            morseTest.TranslateMorse(morseKeyInvert, "ab d .. .-", false),
        ).toThrowError("Unknown morse code key");
        expect(() =>
            morseTest.TranslateMorse(morseKeyInvert, "..--a", false),
        ).toThrowError("Unknown morse code key");
        expect(() =>
            morseTest.TranslateMorse(morseKeyInvert, "-..-..", false),
        ).toThrowError("Unknown morse code key");
    });
});
