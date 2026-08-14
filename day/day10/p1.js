const nums=[9,10,6,7];
const hasodd=nums.some(n=>n%2!==0); // checking conditions in arrays
console.log(hasodd);
//sorting and reversing
console.log("sorting:");
console.log(nums.sort());//works lexographically ..works on string
const nums2=["suraksha","aarya","shri","shubbu","suman","ramesh"];
console.log(nums2.sort());
console.log(nums.sort((a,b)=>a-b));
console.log(nums.sort((a,b)=>b-a));
//joining and splitting

const arr=["a","b","c"];
const str1=arr.join();
console.log(str1);
const str2=arr.join("-");
console.log(str2);
//split string to array
const text="apple,banana,cherry";
console.log(text);
const fruits=text.split(",");
console.log(fruits);
//flatening: removes nesting at one level in array

const nested=[1,2,[3,6],[4,[5,3]]];
const flat1=nested.flat();
console.log(flat1);
const flat2= nested.flat(2);
console.log(flat2);

//flat-map:map then flatten one level
const sentences=["hello world","good morning"];
const words=sentences.flatMap(s=>s.split(" "));
console.log(words);

// skip values
const [x, , z] = [1, 2, 3]; // x = 1, z = 3
// rest elements
const [head, ...rest] = [1, 2, 3, 4]; // head = 1, rest = [2, 3, 4]
// default values
const [p, q = 99] = [5]; // p = 5, q = 99

// . Spread and rest with arrays
// Spread – expand array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]
console.log(combined);

// Useful in function calls:
function sum(x, y, z) {
return x + y + z;
}
const nums3 = [1, 2, 3];
console.log(sum(...nums3)); // 6

// Unique values:
const arr2 = [1,8,2,3,3,4,5,4,6,4,7,8];
const unique = [...new Set(arr2)];
console.log(unique);
