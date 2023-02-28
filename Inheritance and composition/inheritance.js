
class Monster{
    constructor(name){
        this.name = name;
    }
    attack(){
        console.log(`${this.name} attacked`);
    }
    walk(){
        console.log(`${this.name} walked`);
    }
}

class swimmingMonster extends Monster{
    swim(){
        console.log(`${this.name} swam`);
    }
}

class flyingMonster extends Monster{
    fly(){
        console.log(`${this.name} flew`);
    }
}



let monster = new flyingMonster('Shakaal')
monster.fly()
monster.attack()