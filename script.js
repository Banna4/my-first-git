// two type of data type in js 
// primitive
//     "int, str, float, undidined, null"
// non-primitive
//     "object, array"

console.log("Hello World");
let a = 9  //intiger
var b = 19.8 //flot
console.log(a)

const student = {
    age: 19,
    fname: "Rahul",
    cgpa: 7.5,
    isPass: true
};
student["age"] = student["age"] + 20
console.log(student["age"]);

// day 1 project 1
// creating an object listed on amzon 

const product ={
    isname: "Ball Pem",
    ratting: 4,
    price: 250,
    isDeal: true,
};
console.log(product)

// project 2

const profile ={
    nameIs: "Shradha Khapra",
    Idname: "shradhakhapra",
    followers: "569k",
    post: 195,
    following: 4,
    Nich: "Technical guid",


};

console.log(profile["Idname"]);


//Task 1
let marks = [72, 85, 90, 66, 49];
let total = 0;
for (let m of marks) total += m;
console.log("Average:", total/marks.length);
