/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function doMath(firstNumber, socondNumber, thirdNumber) {
    return firstNumber + socondNumber + thirdNumber
}

console.log(doMath(3, 4, 5))
console.log(doMath(11, 3, 9))


/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

const mergeWords = (stringOne, stringTwo) => stringOne + stringTwo;
console.log(mergeWords("abra", "cadabra"))

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function wordsAndCharacter (word, character){
    return character + word + character
}
console.log(wordsAndCharacter("bril", "*"))
console.log(wordsAndCharacter("beep", "_"))
console.log(wordsAndCharacter("kaas", "Q"))


/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function combiningWords (wordOne, wordTwo, wordThree){
    return wordOne + wordTwo + wordThree
}
console.log(combiningWords("abra", "cadabra",""))
console.log(combiningWords("a", "b", "c"))
/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"
const groetIedereen = (groet, array, uitroepteken) => groet + array + uitroepteken;
let array1= " Nick, Nova, Mitchel, Arjen"
array2 = " Piet, Henk"
array3 = " A, B, C, D, E, F"
console.log(groetIedereen("Hoi", array1 , "!" ))
console.log(groetIedereen("Hoi", array2 , "!" ))
console.log(groetIedereen("Hoi", array3 , "!" ))
