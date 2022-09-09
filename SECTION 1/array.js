// array ca contain multiple data types 
// 2. arrays are dynamic  -can change size 
// 3. array supports indexing and slicing.
// 4. ]

const nums = [ 1,2,3,4,5,6,7,8,9,true, 'nice,asad'];
console.log(nums);

const fruits =[ 'apple', 'banana', 'orange', ]
console.log(fruits);


// Indexing

console.log(fruits[2]);


// slicing multiple elements

console.log(fruits.slice(1,4));
console.log(fruits.slice(1,4));

// Adding elements to array
fruits.push('cherry');
console.log(fruits);

// Removing elements from array


   // 1. pop() - remove last element

console.log(fruits.pop());
console.log(fruits);


// 2. splice()- removes elements from array

fruits.splice(2,2)
console.log(fruits);


//  traversing Arrays
const numbers = [45,23,67,89,90,43,73];
for (let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}
for (let n of numbers){
    console.log(n);
}

// for each is function of array

 console.log('---forEach---');
 numbers.forEach((a,i)=>{ console.log(a,i);});