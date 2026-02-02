// Question 1: ipt to print even element present in the array
// let arr=[1,2,3,4,5,6,7];
// arr.forEach(n=>{
//     if(n%2==0){
//         console.log(n);
//     }
// }
// )


// 30 / 01/ 2026

//==>
const obj={name:"Ankit"}; 
// we can not reassigen the object 
// and we can change the value of key inside the object
// console.log(obj.name);
// obj.name="ritche";
// console.log(obj.name);

function greet(name){
    console.log("hello"+name);
    console.log(`hello with bachtics${name}`);
}


greet("Ankit");




//  variable assignable function 

function add(a,b){
    let c=a+b;
    console.log(c);
}

const factorial=function(n){  // special function  why we use 
    //1.hoisting 
    if(n==1 || n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(4));


const fibonacci=function(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

for(i=1; i<7; i++){
console.log(fibonacci(i));
}



// ==> Object ternary oprator

const sales="Toyota";
function Types(name){
    return name==="Honda"?name:"Sorry";

}
const car={mycar:"saturn",getcar:Types("Honda"),special:sales};  // object apossess with 
console.log(car.mycar);
console.log(car.getcar);
console.log(car.special);






// For in and for off loop
const student={name:"Rom",age:21,hobby:"Cricket"};
for(const key in student){
    console.log(key,student[key]);
}


// 6 types of loop in javaScript










