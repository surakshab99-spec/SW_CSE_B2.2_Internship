const numbers=[1,2,3,4,5];
const mixed=[1,"suraksha"];
console.log(numbers);
console.log(mixed);

//using array constructor
const arr1= new Array(1,2,3);
const arr2= new Array(5);

console.log(arr1);
console.log(arr2);

console.log(arr1.length);
arr1.length=2;
console.log(arr1);
arr1.length=5;

//aading removing: push(),pop(),unshift(),shift(),splice()
arr1.splice(2,1);
console.log(arr1);
arr1.splice(1,0,"s","a");


console.log("slice() and spread (...)");
const nums1=[10,20,30,40,50];
console.log(nums1);
const part=nums1.slice(1,4);
console.log(part);
const copy=nums1.slice(); //full shallow copy
console.log(copy);

console.log("Spread Operator");
const a = [1,2,30,45];
console.log(a);
const b = [...a,3,4]; // shallow copy
console.log(b);
const copy2=[...a];
console.log(copy2);

console.log("Looping over Arrays");
const arr5 = [111,222,333,444,555,666];
// for loop
for (let i = 0; i < arr5.length; i++) {
    console.log(i,arr5[i]);    
}

// for ... of
console.log("for ... of");
for (const value of arr5){
    console.log(value);    
}

console.log("for Each");
arr5.forEach((value, index)=>{
    console.log(index,value);
})

// Searching in arrays
console.log("Searching in arrays");
const myArray = [99,88,77,66,55,66];
console.log(myArray.indexOf(66));
console.log(myArray.lastIndexOf(66));
console.log(myArray.includes(555));


// find()
// findIndex()
const users = [
    {id:1,name:"Rakesh"},
    {id:2,name:"Bipin"}
];

const user = users.find(student=>student.id === 2);
console.log(user);
const index = users.findIndex(student=>student.name === "Bipin");
console.log(index);



console.log("Transforming Arrays 🌟");
const nums3=[10,20,30,40,50];

console.log("Map");
const double = nums3.map(n=>n*2);
console.log(double);

console.log("filter");
const greaterThan30=nums3.filter(n=>n>30);
console.log(greaterThan30);

console.log("reduce");
const sumOfArray=nums3.reduce((acc,curr)=>acc+curr,0);
console.log(sumOfArray);