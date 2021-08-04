function display(){
    document.getElementById("demo").innerHTML=document.getElementById("tt").value;	
    //I found this function on stack overflow: https://stackoverflow.com/questions/58750774/ask-user-enter-name-with-javascript-and-html
}

class Pet {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0
        this.dead = false
        this.lifetime = 0
    }

screenMovement() {
    const move = ["flex-start", "flex-end","center"][Math.floor(Math.random()*3)];
    return move;
}
    
getHungry() {
    alert("Feed me!")
    this.hunger++
    const hunger = document.querySelector('#hunger')
    hunger.innerHTML = this.hunger
}

getSleepy() {
    alert("Yawn! I'm so tired!")
    //return this.sleepiness
    this.sleepiness++
}  

getBored() {
    alert("Hee hee!")
    //return this.boredom
    this.boredom++
}   

getOlder(){
    alert("It's my birthday!")
    this.age++
}

getsOlder(amount) {
    for (let i=0; i < amount; i++) {
        this.getOlder()
    }
}
endOfLife() {
    alert("You killed your Tomagotchi! No more pets for you!")
    //$('img').attr("src", )
}

relocate() {
    //$('#image,').css('justify-content', `${this.screenPositions()}`)
    //$('#image,').css('align-items', `${this.screenPositions()}`)
}

transform(){
    //$('img').css('width', '20%');
    //$('img').css('height', '50%');
    if(this.lifetime >= 150) {
    //    $('img').attr('src', 
    }    



/*const catchphrases = [
    'Feed me!',
    'Yawn! I am so tired!',
    'Hee hee!',
    'Today is my birthday!'
]
console.log(catchphrases)

let catchphraseList = document.createElement('div')
catchphraseList.setAttribute('id', 'catchphrases')
for(let i = 0; i < catchphrases.length; i++) {
  let articleTag = document.createElement('article')
    //articleTag.setAttribute('id', catchphrases[i])
    articleTag.innerHTML = `<h1>${catchphrases[i]}</h1>`
    //catchphraseList.appendChild(articleTag)
    //document.body.appendChild(catchphraseList)
    console.log(catchphraseList)
}
*/
}
}
const tomagotchi = new Pet("", 0, 0, 0, 0)
console.log(tomagotchi)


const game = {
    myPet: null,
    intervalID: null,
    time:0,
    lightsOn: false,
    light: false,

    start(name) {
        const newPet2 = new Pet(name);
        this.newPet = newPet2;
       // $('#name').text(this.myPet.name)
        //$('#input name').val('')

        this.startTimer();

    },
    startTimer() {
        this.intervalID = setInterval(() => {
            
            this.time++
            this.newPet.lifetime++
            this.reasonOfDeath = "";
            const timeInMilliseconds = this.time * 1000

            if (timeInMilliseconds % 2000 === 0) {
                this.newPet.relocate();
            }
            if (timeInMilliseconds % 5000 === 0) {
                this.newPet.getHungry();
            }
            if (timeInMilliseconds % 15000 === 0) {
                this.newPet.getBored()
            }
            if (timeInMilliseconds %3000 === 0) {
                this.newPet.getSleepy();
            }
            if (timeInMilliseconds % 6000 === 0) {
                this.newPet.getOlder();
                this.newPet.transform();
                this.time = 0;
            }
            if (this.newPet.hunger>=10) {
                this.myPet.dead = true;
                this.reasonOfDeath = "starved and withered into tomagotchi bones";
            }
            if (this.myPet.sleepiness>=10){
                this.newPet.dead = true;
                this.reasonOfDeath = "pulled too many all-nighters so eyes fell out";     
            }
            if (this.myPet.boredom>=10) {
                this.newPet.dead = true;
                this.reasonOfDeath = "skull shattered from restlessness";
            }
            if (this.newPet.dead) {
                clearInterval(this.intervalID)
                this.newPet.graveyard(this.reasonOfDeath)
            }                      
        }, 100) 
    },  

//tomagotchi.getHungry();
//tomagotchi.endOfLife();
//tomagotchi.sleep();
//tomagotchi.excite();
//tomagotchi.getOlder();
//tomagotchi.transform();
        
