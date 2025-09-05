// Javascript basics - types, control flows, arrays, strings, variables, loops, conditions

// Variables in js

// Number
var num = 12;
console.log(num);

var num1 = 1.3444;
console.log(num);

//string
var str = "hello world";
console.log(str);

// template literals
let backtick = "hey its thursday";
let greetings = `Today , ${backtick}`;
console.log(greetings);

//concatenation
let first = "Think school";
let second = "quality, consistency, communication";
console.log(first + " " + second);

let student = "Priya got ";
let marks = 9;
let percent = 100;
let total = `${student}${marks / percent}`;
console.log(total);

// number vs string
let n = 1233;
let s = "123";
let p = 90;
let a = "it is a string";
console.log(n + s);
console.log(n + p);
console.log(p + a);
console.log(s + a);

const myStr = "universe";
const myInteger = Number(myStr);
console.log(typeof myInteger); //Number
console.log(myInteger); // Nan

var notNum = "23";
var total1 = Number(notNum); // Number() function converst string into number also '+' operator
console.log(typeof total1);
var result = +notNum;
console.log(typeof result);

var str = "neha";
var result = String(str);
console.log("last =", typeof result);

// String methods-------------------------------------------------------
//'.length' property
var totalCharacter = "hey its progresive day"; //it also counts white space
console.log(totalCharacter.length);

var totalCharInArray = ["one", "two", "three", "four"];
console.log(totalCharInArray.length);

var retriveChar = totalCharacter[10]; // it start from index 0
var retriveChar1 = totalCharacter[1];

console.log(retriveChar1);

//includes() method : it returns a boolean value true or false
const includeInParameter = "Mozilla fire fox";
console.log(includeInParameter.includes("illa"));

//includes() has two special method - startsWith() endsWith()
var startingChar = "magicInUniverse";
console.log(startingChar.startsWith("m"));
console.log(startingChar.endsWith("s"));

//indexOf method
var findIndexInLargeChar =
  "today is a very progressive day practising javascript";
console.log("index of ", findIndexInLargeChar.indexOf("very"));
console.log("index of ", findIndexInLargeChar.indexOf("very", 1));

//slice() method : extract substring from string

var subString = "it having two parameter start extracting and end extracting";
console.log(subString.slice(4, 19)); //ending extrcting is exclusive
console.log(subString.slice(8));

//toLowerCase()
var lowerCaseString = "COFFEE TAETS GOOD";
console.log(lowerCaseString.toLowerCase());

var upperCaseStr = "znfwelhfcvn";
console.log(upperCaseStr.toUpperCase());

//replace() : we give two parameter one is we want to repalce and another we replace with
var replaceSubstr = "neha and neha is greate and  learner";
var updatedStr = replaceSubstr.replace("neha", "siya"); // it changes only one occurences
console.log(updatedStr);
console.log(replaceSubstr.replace("neha", "jiva"));

// replaceAll() : it changes all occourances
const changeAll = "said to be a giver to be become";
console.log(changeAll.replaceAll("to", "be", "so", "no"));
console.log(changeAll.replaceAll("be", "cannot"));

//Arrays -----------------------------------------------------------------------
const arraying = ['string', 123, true, 0.33, 'we can add all data types in array']
console.log(arraying);

let nestedArray = [1, 'all', ['fruit', 'idli', 'vada']];
console.log(nestedArray);
console.log(nestedArray.length);  //length

//access and modifying

let accessTheElement = ['sharp', 'like', 'a', 'naive'];
console.log(accessTheElement[8]); //undefined
console.log(accessTheElement[3]);

accessTheElement[3] = 'swaord'
console.log(accessTheElement)

//access nested array
let accessNested = ['fruits', ['mango',  'banana']]
console.log(accessNested[1][0])

//push() : adding one or more element at the end of the array
let addNewElement = ['start', 'interval', 'stop'];
addNewElement.push('ok', 'done', 12)
console.log(addNewElement);

// unshift() : add item in start of array
let startOfArray = ['myname', 'define', 'growth'];
startOfArray.unshift('neha', 'name');
console.log(startOfArray)
console.log(startOfArray.unshift('hey')) // it returns length

//pop() : remove last item from array
let dropLast = [1, 2, 3, 'end'];
console.log(dropLast.pop()); // return the last element

//shift() : removes first item from array
let removeOne = ['change', 'nohting', 'is', 'permannat'];
console.log(removeOne.shift());

//splice() : 2 parameter in it one is to if know the index where you can remove from and second is to how much item you want to remove
let removeItems = ['quality', 'quantity', 'consistancy', 'equality', 'assurance'];
console.log(removeItems.splice(2, 5)) // returns removed items

// for..of  : accessing every items
 const birds = ['parrot', 'crock', 'rabbit']
 for(const i of birds){
    // console.log(i);
 }
for(const i of birds){
 console.log(1 , i)
}

//map() : something change in each item of array
function valueByten(number){
    return number*2
}
let dobut = [1,2,3,4,5,6,7,8,9]
let answer = dobut.map(valueByten)
console.log(answer)

//conditions ------------------------------------------------------------------
//if else

    if(1 == '1'){
        console.log('yes')
    }
    else{
        console.log('no')
    }

    let checkMatch = 2
    if(checkMatch % 2 == 0){
        console.log('even')
    }
    else{
        console.log('odd')
    }

// for loop

let bag = 2
for(let i = 0; i<10; i++){
    bag *= 2
}
console.log(bag);

let z = " "
for(let i = 0; i<5; i++){
    z += "*"
}
console.log(z)