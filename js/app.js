
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
    //alert("Feed me!")
    this.hunger++
    document.querySelector("#hunger").innerHTML = `${this.hunger}`
    
}
    
getSleepy() {
  //  alert("Yawn! I'm so tired!")
    //return this.sleepiness
    this.sleepiness++
    document.querySelector("#sleepiness").innerHTML = `${this.sleepiness}`
    
}

getBored() {
    //alert("Sigh! What is life?")
    //return this.boredom
    this.boredom++
    document.querySelector("#boredom").innerHTML = `${this.boredom}`
   
}   

getOlder(){
  //  alert("It's my birthday!")
    this.age++
    document.querySelector("#age").innerHTML = `${this.age}`
}

endOfLife() {
   // if(this.dead=true) {
    //let grave = document.querySelector("#graveyard")
    //grave.style.width="1200px"

}

relocate() {
    //$('#image,').css('justify-content', `${this.screenPositions()}`)
    //$('#image,').css('align-items', `${this.screenPositions()}`)
}

transform(){
    if(this.age >=1) {
        const img = document.querySelector("#image")
        img.style.width="900px"
    } 
    if(this.age >=2) {
        const img = document.querySelector("#image")
        img.style.width="1200px"
    }
    if(this.age >=5) {
        const img = document.querySelector("#image")
        img.style.width="1500px"
    }
    }   
}

//const tomagotchi = new Pet("", 0, 0, 0, 0)
//console.log(tomagotchi)


const game = {
    newPet: null,
    intervalID: null,
    time:0,
    lightsOn: false,
    light: false,

    start(name) {
        const inputname=document.getElementById('tt')
        const nameDisplay=inputname.value
        this.newPet=new Pet(name);
        //const textName=document.getElementById('name')
        //textName.textContent = this.nameDisplay


        this.startTimer();

    },
    startTimer() {
        this.intervalID = setInterval(() => {
            
            this.time++
            this.newPet.lifetime++
            this.reasonOfDeath = "";
            const timeInMilliseconds = this.time * 10000


            if (timeInMilliseconds % 2000 === 0) {
                this.newPet.relocate();
            }
            if (timeInMilliseconds % 5000 === 0) {
                this.newPet.getHungry();
            }
            if (timeInMilliseconds % 15000 === 0) {
                this.newPet.getBored()
            }
            if (timeInMilliseconds % 3000 === 0) {
                this.newPet.getSleepy();
            }
            if (timeInMilliseconds % 30000 === 0) {
                this.newPet.getOlder();
                this.newPet.transform();
                this.time = 0;
            }
            if (this.newPet.hunger>=10) {
                this.newPet.dead = true;
                this.reasonOfDeath = "it starved and withered into tomagotchi bones";
            }
            if (this.newPet.sleepiness>=10){
                this.newPet.dead = true;
                this.reasonOfDeath = "it pulled too many all-nighters so its eyes fell out";     
            }
            if (this.newPet.boredom>=10) {
                this.newPet.dead = true;
                this.reasonOfDeath = "its skull shattered from restlessness";
            }
            if (this.newPet.dead) {
                alert("Pet has passed away because " + this.reasonOfDeath)
                clearInterval(this.intervalID)
                //this.newPet.graveyard(this.reasonOfDeath)
            }                      
            }, 1000) 
    },  

    feedTomagochi() {
        if(this.newPet.hunger>1){
            this.newPet.hunger--
            const hunger = document.getElementById('#hunger')
            hunger.innerHTML = `hunger: ${this.newPet.hunger}`
        }
    }, 
    
    playPet() {
        if (this.newPet.boredom>1) {
            this.newPet.boredom--
            const boredom = document.getElementById('#boredom')
            boredom.innerHTML = `boredom: ${this.newPet.boredom}`
        }
    },
    lightsOut() {
        if (this.light) {
            if (this.newPet.sleepiness >1) {
                this.newPet.sleepiness--
                const sleepy = document.getElementById('#sleepiness')
                sleepy.innerHTML = `sleepiness: ${this.newPet.sleepiness}`
            }
        } else {
            this.light = true;
        }
    }
}

//EVENT LISTENERS
let form = document.getElementById('nameform')
    form.addEventListener('click', (event) =>{
let submitName = document.getElementById('tt').value;
console.log(document.querySelector("#tomagotchi-name"))
document.querySelector('#tomagotchi-name').innerHTML = `${submitName}`
    game.start(submitName)

    })

let button1 = document.getElementById('feed')
    button1.addEventListener('click', (event) =>{
        let feedPet = document.getElementById('hunger').value;
       // document.querySelector('#buttonPanel').innerHTML = `${feedPet}`
        game.feedTomagochi()

    })
 
let button2 = document.getElementById('turn-off-lights')
    button2.addEventListener('click', (event) =>{
        event.preventDefault();
let sleepPet = document.getElementById('sleepiness').value;
//document.querySelector('#buttonPanel').innerHTML = `${sleepPet}`
        game.lightsOut()

    })

let button3 = document.getElementById('play')
    button3.addEventListener('click', (event) =>{
        event.preventDefault();
let playPet = document.getElementById('boredom').value;
//document.querySelector('#buttonPanel').innerHTML = `${playPet}`
        game.playPet()

    })

    
 
    
