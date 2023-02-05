

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

