// Create a class Animal that has:
// name
// type - carnivore/herbivore/omnivore
// age
// size
// eat - a method that checks if the input is an Animal.
// If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name).
// If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
// If the input is not an animal just write: The animal (this animal name) is eating (the input).
// isEaten = default false

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
        }

        eat(input) {
            if(input.constructor === Animal && this.type === "herbivore") {
                console.log(`The animal ${this.name} is a ${this.type} and does not eat other animals`)
            } else if(input.constructor === Animal && this.type !== "herbivore" && input.size < this.size*2) {
                input.isEaten = true;
                console.log(`The animal ${this.name} ate the ${input.name}`);
            } else if(input.constructor === Animal && input.size >= this.size*2 && this.type !== "herbivore") {
                console.log(`The animal ${this.name} tried to eat the ${input.name} but it was to large`)
            } else if(input.constructor !== Animal) {
                console.log(`The animal is eating ${input}`);
            }
        }
    }
 
    let tiger = new Animal("tiger", "carnivore", 12, 3.5);
    let rabbit = new Animal("rabbit", "herbivore", 3, 0.4);
    let dog = new Animal("dog", "omnivore", 7, 1.3);
    tiger.eat(rabbit);
    rabbit.eat(tiger);
    dog.eat(tiger);
    rabbit.eat("carrot");
    console.log(rabbit);
   


