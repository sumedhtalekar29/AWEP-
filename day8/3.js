let arr = [];


let arr = [1, 2, 3];
let arr = ["A", "B", "C"];
let arr = [1.1, 2.2, 3.3];


let arr = [1, "A", 3.14, true];

let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];


let arr = ["Tejas", "Sumedh", "Omkar", "Sandesh", "Akshay"];

let firstItem = arr[0]; 
let anyItem = arr[3]; 


let arr =  ["Tejas", "Sumedh", "Omkar", "Sandesh", "Akshay"];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); 
}


let arr =  ["Tejas", "Sumedh", "Omkar", "Sandesh", "Akshay"];
arr.push("Sanam");

arr.pop();

arr[0] = "Tejasss";


let arr =  ["Tejas", "Sumedh", "Omkar", "Sandesh", "Akshay"];; 
arr.splice(2, 0, "sanam");
let arr =  ["Tejas", "Sumedh","sanam", "Omkar", "Sandesh", "Akshay"];

arr.splice(4, 2);


let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); 
}