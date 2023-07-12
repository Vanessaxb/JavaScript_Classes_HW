// give class cat 3 properties
class Cat {
    constructor(breed, color, age) {
        this.breed = breed;
        this.color = color;
        this.age = age
        this.sound = "Meow" //default value
    }
    talk() {
        console.log(this.sound)
    }

    catInfo() { //! HTMLTemplateElement. Why doesnt print right? Copied from Slide
        // return  this.breed + ' is ' + this.color +' and ' + this.age + ' years old '; //needs a catcher
        console.log(this.breed + ' is ' + this.color +' and ' + this.age + ' years old');        
    }

    isABlackCat(color) {
        if(this.color == 'black') {
        console.log('It\'s a black cat');
    } else {
        console.log('It\'s NOT a black cat');
    }

    }
    
}

const black = new Cat('Samp', 'black', '7');
const orange = new Cat('Vira', 'orange', '2');
// const white = new Cat('Siam', 'white', '10')

console.log(orange);
console.log(black);

orange.talk()
black.talk()
orange.isABlackCat()
black.isABlackCat()
black.catInfo() 
orange.catInfo()
// const catDetails = orange.catInfo(); //return needs a catcher
// console.log(orange.catInfo);
// console.log(catDetails);


//*Constructor

class Pirate {
    constructor(origin, ship, name) {
        this.origin = origin;
        this.ship = ship;
        this.name = name
    }
weapon() {
    console.log(`${this.name} from ${this.origin} attacks with canons`)}
uppercase() {
    console.log(`${this.name.toUpperCase()}`); //why not showing in upper case?
}
pirateDetails() {
    return `Pirate Info: Name: ${this.name} Age: ${this.age}`
}

}

const blackbeard = new Pirate('Bahamas', 'deazone', 'Blackbeard');
const scar = new Pirate('Central', 'salt water', 'Scar');
const terror = new Pirate('South', 'starShip', 'Terror');

const blackPearl = [];
blackPearl.push(blackbeard, scar, terror);
console.log(blackPearl);

for (const pirate of blackPearl) {
    console.log(pirate.name);
    console.log(pirate.origin);
    console.log(pirate.ship);
}

//to see all the values in an array
for (const pirate of blackPearl) {// we get each pirate
    for (const [key, value] of Object.entries(pirate)) // will return an array with all keys and values
    console.log(key, value);
}

blackbeard.weapon()
terror.uppercase()

