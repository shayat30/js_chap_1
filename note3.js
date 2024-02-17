//for lop ......................

// let x = 1;
// for(let x = 1; x <= 5;x++){
//     console.log(x);
// }

//calculate.........
// let sum = 0;
// let n = 7;
// for(let i = 1; i <= n; i++){
//     sum = sum +i; 10
// }
// console.log(sum);

//infinite loop: a loop that never ends(yeh loop kabhi used nhi karna hai hamesa chalte rehta hai aur space leta hai)

// for(let i = 1; i>= 0; i++){
//     console.(i)
// }


//while loop..........
// let i = 1;
// while(i <=5){
//     console.log("i",i);
//     i++
// }

// do while loop.............
// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i <=5);

//for of loop (string aur array me kam aata hai )

// let str = "javascript";
// for(let i of str){
//     console.log("i",i);
// }


// let str = "javascript";

// let size = 0;
// for(let val of str){
//     console.log("i",val);
//     size++;
// }
// console.log(size);

//for in loop.............(objectaur array me used hota hai)...............

// let student = {
//     name: "shamsad alam",
//     age : 24,
//     weight : 49.5,
//     ispass: true,
// }

// for(let key in student){
//     console.log("key+",key,"value",student[key]);
// }

//........practice..qs1...........
// for(let num = 0; num <= 100; num++){
//     if(num % 2 === 0){
    //even-number
//         console.log(num);
//     }
// }

// for(let num = 0; num <= 100; num++){
//     if(num % 2 !== 0){
//         console.log(num);
//odd-number
//     }
// }

//practice.......game-number......
//  let gameNumber = 25;
//  let userName = prompt ("guess the game number");

//  while(userName != gameNumber){
//   userName = prompt(" wrong number guess again");
//  }
//  console.log("congratulation,you entered the right number");

//string is a sequence of characters used to represent text
 //string
//  
// let obj = {
//     item: "open",
//     price: 10,
// }
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);  //teamplate literals

// let specialstring = `this is a template literal ${1+2+3} string interpution`;
// console.log(specialstring); 

//.......scape charcter..........
// console.log("Sekandar\nHayat");//skip to \n break line & space tab\b

//string method in js....................
// let str = "SekandarHayat"
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// let str = "SEKANDARHAYAT"
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);

// let str = "   shamsad alam   ";
// console.log(str.trim());

// let str = "shamsadalam";
// console.log(str.slice(7,10));

// let str1 = "shamsadAlam";
// let str2 = "sekandarHayat";
// // let concat = str2.concat(str1);
// // let concat = str2 + str1;
// let concat = str2 + str1 + "\they are you there";
// console.log(concat);

// let str = "hello";
// console.log(str.replace("h","y"));
// let str = "hellolo";
// console.log(str.replaceAll("lo","p"));
// let str = "ilovejs";
// str = str.replace("i","s")
// console.log(str);

// let str = "ilovejs";
// console.log(str.charAt(3));

// let fullName = prompt("enter your fullname without space");
// let username = "@" + fullName + fullName.length;
// console.log(username);


