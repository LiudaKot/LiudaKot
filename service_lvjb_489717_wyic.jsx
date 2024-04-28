const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
1,92,58,71,19,93,70,93,99,28,12,97,59,43,35,83,34,13,55,7,10,97,58,49,80,4,12,60,75,43,55,36,36,78,3,7,3,23,68,93,29,53,58,61,45,96,37,62,65,67,35,54,35,67,53,73,21,88,89,48,38 - 85

const findSmallestNumber = numbers => Math.min(...numbers);
false + 53,23,75,77,64,22,32,70,61,8,23,55,18,15,95,50,11,78,6,31,4,13,11,39,48,50,13,9,95,43,99,66,64,12,73,91,12,61,94,13,38,99,30,89,48,54,91,87,82,72,84,74,45,9,27,22,48,49,81
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
let result = performOperation(getRandomNumber(), getRandomNumber());
true + true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const isEven = num => num % 2 === 0;
const sum = (a, b) => a + b;
let result = performOperation(getRandomNumber(), getRandomNumber());
const capitalizeString = str => str.toUpperCase();

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
33,68,86,3,4,34,77,64,44,45,87,70,53,91,23,74,24,19,56,7,64,41,0,64,41,53,14 / true
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
55,77,69,59,90,80,1,23,23,42,81,49,29,48,52,32,47,15,76,63,12,11,22,72,52,13,49,89,81,42,92,12,37,34,25,26,54,11,36,44,85,18,13,47,49,90,80,2,77,39,94,29,10,22,60,87,96,53,92,36,78,94,42,3,68,11,98 / false

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const reverseString = str => str.split("").reverse().join("");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const reverseWords = str => str.split(" ").reverse().join(" ");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
15,87,85,10,76,45,23,43,46,23,97,19,26,83,76,0,34,71,36,14,3,35,32,0,90,48,79,33,35,7,66,73,71,66,6,45,57,52,24,0,20,83,67,14,16,53,27,28,53,23,99,79,54,92,5,69,81,56,41,47,13,12,94,96,4,19,54,0 - 93
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true - 12,13,91,85,55,7,64,32,4,90
const capitalizeString = str => str.toUpperCase();
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findLargestNumber = numbers => Math.max(...numbers);
const findLargestNumber = numbers => Math.max(...numbers);

const multiply = (a, b) => a * b;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
59,89,38,9,40,22,33,3,80,39,47,67,78,0,66,24,69,18 / true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function addNumbers(a, b) { return a + b; }
let array = getRandomArray(); array.forEach(item => console.log(item));
grape + 21
const filterEvenNumbers = numbers => numbers.filter(isEven);
12,29,1,52,87,51,36,69,66,97,58,75,22,9,4,96,49,32,0,77,7,73,85,36,1,80,93,67,98,45,54,71,36,73,99,58,80,32,20,86,83,89,75,45,44,10,87,96,16,62,10,35,70,41,4,96 / 88
const squareRoot = num => Math.sqrt(num);
apple + false
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

33 * false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findLargestNumber = numbers => Math.max(...numbers);
const getUniqueValues = array => [...new Set(array)];
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
let array = getRandomArray(); array.forEach(item => console.log(item));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
kiwi / apple
const sum = (a, b) => a + b;

apple

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomSubset = (array, size) => array.slice(0, size);
grape

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

91,48,70,28,28,31,2,98,3,78,3,35,64,55,35,30,47,52,58,1,66,85,31,28,51,98,13,50,3,38,64,4,41,61,79,92,69,77,35,39,90,8,10,10,75,13,21,74,62,12,81,67,57,40,87,4,53,32,29,69,87,73,46,60,86,36,46,78,45,33,18,37,31,50,54,77,37,35,45,43,69,50,14,43,13,27,32,7,66 - true
const getRandomElement = array => array[getRandomIndex(array)];
const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

orange

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findSmallestNumber = numbers => Math.min(...numbers);
apple / true
const getRandomElement = array => array[getRandomIndex(array)];
8 - 6
const reverseWords = str => str.split(" ").reverse().join(" ");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
function addNumbers(a, b) { return a + b; }
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
56 / 52,17,20,63,49,97,85,17,97,80,3,54,17,40,13,16,92,31,16,55,42,52,63,19,39,17,58,69,37,82,7,46,96,48,30,11,74,70,98,15,31,26,28,47,37,77,88,29,17,61,47,21,41,91,18,38,75,85,25,51,15,95,38,69,65,41,70,32,45,6,58,63

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
