class Pet {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0
        this.dead = false;
        this.time
    }

eat() {
    alert("Yum yum!")
    return this.hunger
}

eats() {
    this.hunger--
}

eating(amount) {
    this.hunger-=amount
}

hunger() {
    this.hunger++
}

sleep() {
    alert("Yawn! I'm so tired!")
    return this.sleepiness
}  

sleeps() {
    this.sleepiness--
}

sleeping(amount) {
    this.sleepiness-=amount
}

excite(){
    alert("Hee hee!")
    return this.boredom
}   

excites() {
    this.boredom--
}

exciting(amount) {
    this.boredom-=amount
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
}
function display(){
    document.getElementById("demo").innerHTML=document.getElementById("tt").value;		
}
//I found this function on stack overflow: https://stackoverflow.com/questions/58750774/ask-user-enter-name-with-javascript-and-html

const catchphrases = [
    'Yum yum!',
    'Yawn! I am so tired!',
    'Hee hee!',
    'Today is my birthday!'
]
console.log(catchphrases)

/*let catchphraseList = document.createElement('div')
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

const tomagotchi = new Pet("", 0, 0, 0, 0)
console.log(tomagotchi)


//tomagotchi.eat();
//tomagotchi.sleep();
//tomagotchi.excite();
//tomagotchi.getOlder();

