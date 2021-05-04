const Fighter = require('./Fighter');

class Link extends Fighter{
    constructor(playerNum){
        // console.log("hello from the Link class!");
        super("Link", playerNum);
        this.bombOut = false;
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(this.bombOut){
                //throw the bomb
                this.bombOut = false;

                if(Math.floor(Math.random() * 2) === 0){
                    //bomb missed
                    console.log(`${this.name} threw a bomb at ${otherPlayer.name} but the bomb missed!`);
                }
                else{
                    //bomb hit!
                    const damage = 50;
                    console.log(`${this.name} threw a bomb at ${otherPlayer.name} but and dealt ${damage}%!`);
                    otherPlayer.percentage += damage;
                    otherPlayer.isKilled();
                }
            }
            else{
                this.bombOut = true;
                console.log(`${this.name} pulled a bomb out and is ready to throw!`);
            }
        }
    }
}

class Pikachu extends Fighter{
    constructor(playerNum){
        super("Pikachu", playerNum);
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 15;
                console.log(`${this.name} shoots lightning at ${otherPlayer.name} and deals ${damage}% damage!`);
                otherPlayer.isKilled();
                otherPlayer.percentage += damage;
                console.log(`${this.name} shoots lightning AGAIN at ${otherPlayer.name} and deals ${damage}% damage! how quick!!!!`);
                otherPlayer.isKilled();
                otherPlayer.percentage += damage;
            }
        }
        else console.log("damn you trying to break the code!!");
    }
}

class Samus extends Fighter{
    constructor(playerNum){
        super("Samus", playerNum);
        this.charged = false;
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(!this.charged){
                this.charged = true;
                console.log(`${this.name} is chargin up!`);
            }
            else{
                console.log(`${this.name} fired her charged blast at ${otherPlayer.name}!`);
                otherPlayer.percentage += 75;
            }
            
        }
    }
}

class Kirby extends Fighter{
    constructor(playerNum){
        super("Kirby", playerNum);
        this.ability = "None";
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(this.ability === "None"){
                console.log(`${this.name} stole ${otherPlayer.name}'s ability!`)
                this.ability = otherPlayer.name;
            }
            else if(this.ability === "Samus"){
                console.log(`${this.name} fired a beam at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Link"){
                console.log(`${this.name} fired an arrow at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Pikachu"){
                console.log(`${this.name} fired a lightning bolt at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Kirby"){
                console.log(`the universe exploded!!! what happens now?`);
                35/0;
            }
        }
    }
}

let link = new Link(1);
let pika = new Pikachu(2);
let kirby = new Kirby(3);

kirby.special(link);
link.special(pika);
link.special(pika);
pika.special(link);
kirby.special(pika);

console.log(pika);
console.log(link);