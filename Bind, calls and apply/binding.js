const a = {
    fname :"Mohammed",
    lname:"Saif"
}

function printFullName(age,hometown){
    console.log(this.fname +" "+this.lname +" is "+age+" years old "+hometown);
}



//usage of apply ,call, and bind method, where first argument will be passed as this 
printFullName.apply(a,[39])
printFullName.call(a,23)
const myFun  = printFullName.bind(a)
myFun()

// polyfill of bind method by me
Function.prototype.myBind = function(...args){
    const fun = this
    let params = args.slice(1)
    return function(...args2){
        fun.call(args[0],...params,...args2)
    }
}

const myFun = printFullName.myBind(a,5,"Bangalore")
myFun()


