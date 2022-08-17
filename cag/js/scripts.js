// Declareare si initializare constante
const str = 'test'; // String
const nr = 2; // Number
const bool = true; // Boolean
const empty = null; // Null
const undef = undefined; // Undefined

// Printare constante
console.log('Const String: ', str);
console.log('Const Number: ', nr);
console.log('Const Boolean: ', bool);
console.log('Const Null: ', empty);
console.log('Const Undefined: ', undef);

// Declarare variabile
let str2; // String
let nr2; // Number
let bool2; // Boolean
let empty2; // Null
let undef2; // Undefined

// Printare variabile dupa declarare
console.log('Var String: ', str2);
console.log('Var Number: ', nr2);
console.log('Var Boolean: ', bool2);
console.log('Var Null: ', empty2);
console.log('Var Undefined: ', undef2);

// Initializare variabile
str2 = 'test 2'; // String
nr2 = 5; // Number
bool2 = false; // Boolean
empty2 = null; // Null
undef2 = undefined // Undefined

// Printare variabile dupa initializare
console.log('Var String: ', str2);
console.log('Var Number: ', nr2);
console.log('Var Boolean: ', bool2);
console.log('Var Null: ', empty2);
console.log('Var Undefined: ', undef2);

// Creati o variabila numita sum care sa contina ca valoare o expresie reprezentand suma dintre numerele 10 si 6. Afisati rezultatul.
let sum = 10 + 6;
console.log('sum: ', sum);

// Stocati intr-o variabila numita diff diferenta dintre 20 si 4. Afisati rezultatul.
let diff = 20 - 4;
console.log('diff: ', diff);

// Stocati intr-o variabila numita prod produsul dintre 7 si 8. Afisati rezultatul.
let prod = 7 * 8;
console.log('prod: ', prod);

// Declarati si apoi initializati variabilele x si y cu valoarea 0.
// Folosind operatorii pentru incrementare(++) si decrementare(--), faceti ca x sa aibe valoarea 1, iar y -1.
let x = 0;
let y = 0;
x++;
y--;
console.log('x: ', x);
console.log('y: ', y);

// Incrementati valoarea lui x cu 5. Printati rezultatul.
x += 5;
console.log('x: ', x);

// Decrementati valoarea lui y cu 7. Printati rezultatul.
y -= 7;
console.log('y: ', y);

// Creati o variabila sum2 care sa contina ca valoare o expresie reprezentand suma dintre variabilele sum si diff. Afisati valoarea variabilei.
let sum2 = sum + diff;
console.log('sum2: ', sum2);

// Creati o variabila de tip boolean numite equal, care sa pastreze rezultatul egalitatii dintre variabilele sum si diff. Afisati rezultatul.
let equal = sum === diff;
console.log('equal: ', equal);

// Stocati intr-o variabila comp rezultatul comparatiei: sum >= sum2 Afisati rezultatul.
let comp = sum >= sum2;
console.log('comp: ', comp);

// Folosind operatorul %, stocati in variabila rest restul impartirii la 5 a numarului 17.
let rest = 17 % 5;
console.log('rest: ', rest);

// Stocati intr-o variabila numita even rezultatul expresiei care verifica daca valoarea variabilei prod este un numar par.
let even = prod % 2 === 0;
console.log('even: ', even);

// Stocati intr-o variabila numita odd rezultatul expresiei care verifica daca valoarea variabilei prod este un numar impar.
let odd = prod % 2 !== 0;
console.log('odd: ', odd);

