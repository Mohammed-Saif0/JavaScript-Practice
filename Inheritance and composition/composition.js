
function monster(name){
    return {
        name : ()=>{console.log(`${name} is the monster`)}
    }
}

function attackerAndWalker(name){
    return {
        ...monster(name),
        attack : ()=>{console.log(`${name} attacked`)},
        walk : ()=>{console.log(`${name} walked`)}
    }
}

function swimmingMonster(name){
    return{
        ...monster(name),
        ...attackerAndWalker(name),
        swim : ()=>{console.log(`${name} swam`)}
    }
}


function flyingMonster(name){
    return{
        ...monster(name),
        ...attackerAndWalker(name),
        fly : ()=>{console.log(`${name} flew`)}
    }
}


function swimmingAndFlyingMonster(name){
    return{
        ...monster(name),
        ...attackerAndWalker(name),
        ...swimmingMonster(name),
        ...flyingMonster(name)
    }
}


let res = swimmingAndFlyingMonster('Snake');

res.name()