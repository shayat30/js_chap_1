// function myfunction() { //redundancy -> means= repeat
//     console.log("hello");
// }
// myfunction();//invoke -> means = bolana
// myfunction();

// function myfunction(msg) { 
//    // parameter -> input
//     console.log(msg);
// }
// myfunction("i love you");// -> argument

// function add(x,y) {
//     console.log(x+y);
// }
// add(3,4);
// add(8,4);


// function sum(x,y) {
//     a = x + y;
//     return a;
// }
// let val = sum(3,4);
// console.log(val);

// arrow function.............
// let arrowFunction = (a,b)=>{
//     console.log(a + b);
// }
//single line 
// let printHello = () => console.log("hello");

//question......
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a"||
//             char === "e"||
//             char === "i"||
//             char === "o"||
//             char === "u"
//         ){
//             count++
//         }
//     }
//     console.log(count);
// }
// foreachfunction.....
let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })
arr.forEach((val) =>{
    console.log(val);
})