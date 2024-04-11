let result = performOperation(getRandomNumber(), getRandomNumber());
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

79,98,22,28,89,23,8,1,63,52,57,69,93,72,26,69,67,23,64 / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
54 * true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const isPalindrome = str => str === str.split("").reverse().join("");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const reverseString = str => str.split("").reverse().join("");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
banana

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomElement = array => array[getRandomIndex(array)];
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const removeDuplicates = array => Array.from(new Set(array));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
apple


const getUniqueValues = array => [...new Set(array)];
grape

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

