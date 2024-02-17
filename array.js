// let marks = [10,20,30,40,50];
// console.log(marks);
// //console.log((marks.length));

// let frName = ["sam","azhar","shamsad","raju","ravi"];
// console.log(frName);

// let marks = [10,20,30,40,50];
// marks[0] = 11;
// console.log(marks);

//.................................inmutable..-nonmutable................

// const marks = ["sam","alam","nabi","imran","jannat"];
// marks[0] = "shamsad";
// console.log(marks);

// let names = "sikandar";
// names [0]= "ravi";
// console.log(names);

//.........................................loops-iterable...................
//for loop
// let heros = ["rock", "jhon", "brock","shahruhk","father"];
// // for(let index=0; index<heros.length;index++){
// //     console.log(heros[index]);
// // }

// //for of
// for(let man of heros){
//     console.log(man);
// }

//for of 
// let cities = ["kolkata","mumbai","ranchi","delhi","pune",]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

//.................practice-question..........
//average marks

// let marks = [50,60,33,34,90];
// let sum = 0 ;

// for (let val of marks){
//     sum += val
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//.................practice-question..........

let items = [250, 370, 550, 299, 699];

// let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items [i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }


// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

//..............arrays-method.... two-type -ka hota hai- (1-change)(2-new-array).......
// push():add to end
// let foodItems = ["potato","apple","mango","litchi",];
// foodItems.push("chips","cake"),
// console.log(foodItems);

// pop(): delete from end & return
// let foodItems = ["potato","apple","mango","litchi",];
// console.log(foodItems);
// let deleteditem = foodItems.pop();
// console.log(foodItems);
// tostring(): converts array to string

// let foodItems = ["potato","apple","mango","litchi",];
// let numbers = [10,2,3,4];
// console.log(foodItems.toString());
// console.log(numbers);
// console.log(numbers.toString());

//..............array-methods.........
//concat(): joins multiple arrays& returns result
// let marvelHeroes = ["thor", "spiderman","ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeros = ["saktiman","krish"];
// let hero = marvelHeroes.concat(dcHeroes,indianHeros);
// console.log(hero);

//unshift(): add to start
// let marvelHeroes = ["thor", "spiderman","ironman"];
// marvelHeroes. unshift("antman")
// console.log(marvelHeroes);

// shift():delete from start& return
// let marvelHeroes = ["thor", "spiderman","ironman"];
// marvelHeroes.shift();
// console.log(marvelHeroes);


// ............arrays-methods............
//slice():returs a piece of the array
//slice(startidx,endidx)
// let marvelHeroes = ["thor", "spiderman", "ironman","alam","khan"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));

//splice():change original array(add,remove,replace)
//splice(startidx,delcount,newEl1)
// let number = [1,2,3,4,5,6,7];
// console.log(number);
// number.splice(2,2,99,100);
// console.log(number);

//add
// let number = [1,2,3,4,5,6,7];
// console.log(number);
// number.splice(2,0,99,);
// console.log(number);

//deleted
// let number = [1,2,3,4,5,6,7];
// console.log(number);
// number.splice(2,1,);
// console.log(number);

//replace
// let number = [1,2,3,4,5,6,7];
// console.log(number);
// number.splice(2,1,99);
// console.log(number);

//question




