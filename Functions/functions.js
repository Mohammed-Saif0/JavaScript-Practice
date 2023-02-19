

//Function statement or Function Declaration

function a(){
    console.log("This is function a (function statement)");
}


//Function Expression

const b = function (){
    console.log("this is function b a (function expression)")
}


//Anonymous Function -> They don't have their own identity , they have to put in some variable or they have to be used as value , else we get invalid synatx error

function (){
    console.log("this is Anonymous Function")
}

// Named function expression (function expression with an function statement)

const c = function xyz(){
    console.log("this is named function")
}

// Parameters and Arguments

function d(parameter){
    console.log(parameter)
}

d(argument)


//First class functions or First class citizen .. this below ability is known as First class functions

function e(param){
    return function(){

    }
}

const f = function(){
    
}

e(function(){

})

e(f)


//function with many paramenter 

function sumOfNumbers(){
    let sum = 0
    for(let i = 0 ;i < arguments.length;i++)
    sum+=arguments[i]

    return sum
}

console.log(sumOfNumbers(1,2,3,4,5,6,7,8,9));


//Self invoking functions
(function(){
    console.log('hello')
})()

// or 
(a = function(x=3){
    console.log('function a value of x is ',x)
})()

a(4)


//Function with default parameters

function a(num = 5){
    console.log(num)
}

a() // displays 5
 



 