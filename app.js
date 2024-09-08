//a. Data types
//String:
let color = "Red";
let name = "Velt";

//Number:
let length = 16;
let width = 20;

//Booleans:
let x = true;
let y = false;

//Object:
const baby = {firstName:"Ry", lastName:"Pewpew"};
const babyko = ["Me", "You", "Weee"];


//b. Arithmetic and Logical Operators
//Addition
let add = 1 + 6;

//Subtraction
let sub = 6 - 4;

//Multiplication
let mul = 12 * 2;

//Division
let div = 10 / 2;

//Exponentiation
let exp = 5 ** 2;

//Modulu
let mod = 10 % 2;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 90;
if(number >= 89 ){
    lovely = "Crushback yarn";
}else{
    lovely = "Ayyy di yarn Crushback";
}
console.log(lovely);

//ii. Switch
let z = 2 % 2;
switch (z){
    case 0:
        yeah = "Even"
        break;
    case 1:
        yeah = "Odd"
        break;
    default:
        yeah = "No Value"
}
console.log(yeah);

//d. Loops
//i. For
for(let b = 0; b < 5; b++){
    console.log(b);
}

//ii. For in
const frenny = ["jade", "Velt", "Sabal"];
let fren = "";
for(let c in frenny){
    fren += frenny[c];
    console.log(frenny);
}

//iii. For of
const names = ["Sal", "Troy", "Velt"];
let namo = "";
for(let m of names){
    namo += m;
    console.log(m);
}

//iv. For while
let j = 0;
while(j < 10){
    j++;
    console.log(j);
}

//e. Functional Programming
//i. Odd or even
let o = 0;
while(o < 5){
    o++;
    let l = o % 2;
    switch (l){
        case 0:
            pew = "Even"
            break;
        case 1:
            pew = "Odd"
            break;
        default:
            pew = "No Value"
    }
    console.log(o + ". " + o + " is " + pew);
}

//ii. determine prime numbers
let numss =34;
if(numss == 0 || numss == 1){
    let flag = true;
}
for(let p = 2; p <= numss / 2; p++){
    if (numss % p == 0){
        flag = true;
        break;
    }
}
if(!flag){
    console.log(numss + " is prime");
}else{
    console.log(numss + " is not prime");
}

//iii. determine a string if it is a palindrome

function isPalindrome(purrr) {
    let j = purrr.length - 1
    for (let i = 0; i < purrr.length / 2; i++) {
        if (purrr[i] != purrr[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let purrr1 = "racecar";
let purrr2 = "nitin";
let purrr3 = "Rama";

console.log(isPalindrome(purrr1));
console.log(isPalindrome(purrr2));
console.log(isPalindrome(purrr3));