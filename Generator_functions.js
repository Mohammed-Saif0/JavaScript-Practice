//Generator Function 

function * gen(x){
    yield x
    yield 10*2;
    yield x*3;
}

for(const val of gen(10))
    console.log(val)

// const a = gen(10)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)