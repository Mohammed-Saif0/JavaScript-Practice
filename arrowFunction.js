

// using arrow function for single return and single parameter
const a = param => param*param


//using unlimited arguments in an arrow function
const b = (...args) =>{
    for(let i=0;i<args.length;i++){
        console.log(args[i])
    }
}

b(1,2,3,4,5,6,7,8,9)


