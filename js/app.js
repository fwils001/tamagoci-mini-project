class Pet {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
eat() {
    alert("Yum yum!")
}
sleep() {
    console.log(this.sleepiness);
    alert("Yawn! I'm so tired!")
}  
    
excite(){
    alert("Hee hee!")
}   

getOlder(){
    alert("It's my birthday!")
}
}

const tomagotchi = new Pet("", 0, 0, 0, 0)
console.log(tomagotchi)

tomagotchi.eat();
tomagotchi.sleep();
tomagotchi.excite();
tomagotchi.getOlder();

