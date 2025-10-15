// two type of data type in js 
// primitive
//     "int, str, float, undidined, null"
// non-primitive
//     "object, array"

// console.log("Hello World");
// let a = 9  //intiger
// var b = 19.8 //flot
// console.log(a)

// const student = {
//     age: 19,
//     fname: "Rahul",
//     cgpa: 7.5,
//     isPass: true
// };
// student["age"] = student["age"] + 20
// console.log(student["age"]);

// // day 1 project 1
// // creating an object listed on amzon 

// const product ={
//     isname: "Ball Pem",
//     ratting: 4,
//     price: 250,
//     isDeal: true,
// };
// console.log(product)

// // project 2

// const profile ={
//     nameIs: "Shradha Khapra",
//     Idname: "shradhakhapra",
//     followers: "569k",
//     post: 195,
//     following: 4,
//     Nich: "Technical guid",


// };

// console.log(profile["Idname"]);


// //Task 1
// let marks = [72, 85, 90, 66, 49];
// let total = 0;
// for (let m of marks) total += m;
// console.log("Average:", total/marks.length);


// DAY 2

// let a = 5;
// let b = 6;
// console.log("a = ",a)
// let c = a ** b
// a -= 4;
// console.log(a)
// console.log(c);

// logical operaters
// let a = 5;
// let b = 6;

// let cod1 = a < b;
// let cod2 = a === 5;

// console.log("cod1 && cod2 =", cod1 === cod2);
//  Conditional statement

// let  age = 18;
// if(age <= 18){
//     console.log("You can vote")
// }

// MOD 
// let mode = "light";
// let color;

// if(mode === "dark"){
//     color ="black";
// } else{
//     color = "white";
// }

// console.log(color);

// let age = 1;

// if(age >= 18){
//     console.log("Can vote");
// }else{
//     console.log("Can't vote");
// }

// let n = 882;
// if(n % 2 === 0){
//     console.log(n, " is even");
// }else{
//     console.log(n, " is odd");
// // }
// let mode = "yellow";
// let color;
// if(mode === "dark"){
//     color = "Black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if(mode === "gold"){
//     color = "gold";
// }else{
//     color = "White";
// }

// console.log(color);
// tarnary operater 
// let age = 16;

// let result = age >= 18 ? "adult":"Teenager";
// console.log(result);
// let num = prompt("Enter the number");

// if(num%5 === 0){
//     console.log(num," is multiple of 5");
// }else{
//     console.log(num," is not multiple of 5");
// }

// task of the day

// let num = prompt("Enter your number");

// if(num >= 80 && num <= 100){
//     console.log("Your grade is A");
// }else if(num >= 70 && num <= 89){
//     console.log("Your grade is B");
// }else if(num >= 60 && num <= 69){
//     console.log("Your garde is C");
// }else if(num >= 50 && num <= 59){
//     console.log("Your grade is D");
// }else {
//     console.log("Your grade is F");
// }

// {{{    LOOPS   }}}

// FOR LOOP
// for(let count = 1; count <= 5; count++){
//     console.log("Hey dear")
// }

// Calculate the sum of 1 to 5 number

// let sum = 0;
// let n = prompt("n is ")
// for(i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);


// for(let i = 2; i <= 20; i++){
//     console.log("i is = ", i);
// }

// WHILE LOOP
// let i = 1;
// while(i <= 5){
//     console.log("Your college");
//     i++;
// }

// DO WHILE LOOP
// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// } while( i <= 6);

// FOR OF LOOP
// let str = "AKash Singh";

// let size = 0;
// for(let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("String size is ", size);

// FOR IN LOOP
// let student = {
//     name: "Rahul Sharma",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log("key = ", key, ", value is ", student[key]);
// 

// for(let num = 1; num <= 20; num++){
//     if(num%2 === 0){
//         console.log("num = ", num);
//     }
    
// }

// let gamenuber = 25;
// let usernum = prompt("Gusse the number : ");

// while(usernum != gamenuber){
//     usernum = prompt("You entered wrong number, Gusee again : ");
// }
// console.log("Congrate you WIN ");7665




// STRING


// Template litrals
// This are also string but difined by back tiks ` str `
// let str = `Akash singh chouhan`;

// let apple = {
//     color : "red",
//     price : 40
// };

// console.log("The price of ", apple.color ,"apple is ", apple.price);
// by template litrals we can also write and it same like f string in python 
// let output = `The cost of ${apple.color} apple is ${apple.price}`;
// console.log(output);

// STRING METHODS
// let str = "akash singh chouhan";
// let nstr = str.toLowerCase();
// let ustr = str.toUpperCase();
// console.log(ustr);

// let str = "    Yammy  food   ";
// console.log(str.trim());//remove space from end and start

// STRING SLCING 
// let str = "012345678";
// console.log(str.slice(0,6));

// strin concat
// let str1 = "Akash ";
// let str2 = "Singh";
// // console.log(str1+str2); //its also true
// let result = str1.concat(str2);
// console.log(result);


// REPLACE  // str.replace(searchvel,newVel)
// let str = "hello";
// let str2 = "amanna reddy";
// console.log(str.replace("h","y"));
// console.log(str2.replaceAll("r","b"));
// let str = "akash";
// console.log(str.charAt(1));
// let a = prompt("Enter your name");
// let username = "@" + a + a.length;
// console.log(username);



// ARRAY
//array are collection of object

// let marks = [23,45,67,22];
// console.log(marks);
// let arr = [23,54,78,90];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// let cities = ["Dehli","pune","indore","datiya"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }// for all latter capitalize

// let cities = ["new dehli","pune","indore","datiya"];

// for(let city of cities){
//     let cap = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
//     console.log(cap);
// }
// for multi word like new dehli

