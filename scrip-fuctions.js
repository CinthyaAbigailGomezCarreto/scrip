// funciones en js
function imprimirFun (funcion){
    return `******* Esta es la funcion ${funcion}!!! *******`
}

/*
Sum of Resistors in Series

Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
    for(const i in stack){
        suma += Math.abs(stack[i]);
    }
*/

let funcion = 'Sum of Resistors in Series'
console.log(imprimirFun(funcion));

function sumResitance(stack){
    let suma = 0;
    stack.forEach(e => {suma += Math.abs(e)});
    return `${suma} ohms`;
}

const resis1 = [-1,5,6,3];
const resis2 = [14,3.5,6];
const resis3 = [8,15,100];

console.log(sumResitance(resis1));
console.log(sumResitance(resis2));
console.log(sumResitance(resis3));

/*

Number divided into halves
 
Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

funcion = 'Number divided into halves'
console.log(imprimirFun(funcion));

function numDiv(numero){
    const mitad = numero / 2;
    const arr = [mitad, mitad]  
    return `[${arr.join(", ")}]`;
}

let div1 = 4
let div2 = 10

console.log(numDiv(div1));
console.log(numDiv(div2));

/*
Secret Society

Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

funcion = 'Secret Society'
console.log(imprimirFun(funcion));

function secretName(stack){
    let temp = []
    stack.forEach(e => {temp.push(e[0])}) ;
    temp.sort();
    let result = temp.join("");

    return result;
}

const secret1 = ["Esperanza", "Franco", "Nia"];
const secret2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const secret3 = ['Harry', 'Ron', 'Hermione'];

console.log(secretName(secret1));
console.log(secretName(secret2));
console.log(secretName(secret3));

/*
Online status
Display online status for a list of users. 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` 
should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

funcion = 'Online status'
console.log(imprimirFun(funcion));

function onlineStatus(stack){
    const tam = stack.length;
    let temp = ""

    if (tam == 0){
        temp = "0";
    }
    else if (tam == 1){
        temp = stack[0];
    }
    else if (tam == 2){
        temp = `${stack[0]} and ${stack[1]}`;
    }
    else {
        temp = `${stack[0]}, ${stack[1]} and ${tam-2} more`;
    }
    return `${temp} online`;
}

const online0 = [];
const online1 = ['glassedFer'];
const online2 = ['mockIng99', 'J0eyPunch'];
const online5 = ['mockIng99', 'J0eyPunch', 'glassedFer', 'mockIng99', 'J0eyPunch'];

console.log(onlineStatus(online0));
console.log(onlineStatus(online1));
console.log(onlineStatus(online2));
console.log(onlineStatus(online5));

/*
Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

funcion = 'Array of Multiples'
console.log(imprimirFun(funcion));

function arrayMultiplos(n, l){
    let temp = [];
    for(let i = 1; i < l+1; i++)
    temp.push(i * n);
    let result = temp.join(", ");

    return result;
}

const n1 = 2;
const l1 = 10;
const n2 = 17;
const l2 = 6;

console.log(arrayMultiplos(n1, l1))
console.log(arrayMultiplos(n2, l2))


/*
Positive dominance in Array

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

funcion = 'Positive dominance in Array'
console.log(imprimirFun(funcion));

function positiveDom(arr){
    let posi = 0;
    let tam = arr.length;
    for(let i = 0; i < tam; i++)
    if (arr[i] >= 0)
    posi++;

    return posi > tam / 2;
}

const pos1 = [-1, -3, -5, 4, 6767];
const pos2 = [0, -3, -5, 4, 6767];

console.log(positiveDom(pos1));
console.log(positiveDom(pos2));

/*
Antipodal Average

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2. 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

funcion = 'Antipodal Average'
console.log(imprimirFun(funcion));

function antipodalAverage(arr){
    let tam = arr.length;
    let middle = tam / 2;
    let result = [];
    let arr1 = [];
    let arr2 = [];

    if (tam % 2 == 0){
        arr1 = arr.slice(0, middle);
        arr2 = arr.slice(middle, tam).reverse();
    }
    else{
        middle = parseInt(middle);
        arr1 = arr.slice(0, middle);
        arr2 = arr.slice(middle + 1, tam).reverse();
    }

    for(let i = 0; i < middle; i++)
    result.push((arr1[i] + arr2[i]) / 2);
    
    return `[${result.join(", ")}]`;
}

const aver1 = [1,2,3,5,22,6];
const aver2 = [1,22,3,22,6];

console.log(antipodalAverage(aver1));
console.log(antipodalAverage(aver2));
