class Fighter{
    constructor(fighterName, playerNum,percentage=0){
        // console.log("hello from the fighter class!");
        this.name = fighterName;
        this.playerNum = playerNum;
        this.percentage = percentage;
        this.isShielding = false;
    }

    attack(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} attacked ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 10;
                console.log(`${this.name} attacked ${otherPlayer.name} and dealt ${damage}% damage!`);
                otherPlayer.percentage += damage;
                otherPlayer.isKilled();
            }
        }
        else console.log("damn you trying to break the code!!");
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 25;
                console.log(`${this.name} performed a special on ${otherPlayer.name} and dealt ${damage}% damage!`);
                otherPlayer.percentage += damage;
                otherPlayer.isKilled();
            }
        }
        else console.log("damn you trying to break the code!!");
    }

    shield(){
        this.isShielding = true;
    }

    isKilled(){
        if(this.percentage > 100){
            console.log(`${this.name} just died at ${this.percentage}% oh no!!!`);
            this.percentage = 0;
            this.isShielding = false;
            return true;
        }
        return false;
    }

}

module.exports = Fighter;

// let mewtwo = new Fighter("Mewtwo",1);

// let ness = new Fighter("Ness", 2);

// mewtwo.attack(ness);
// ness.special(mewtwo);
// ness.shield();
// mewtwo.special(ness);
// mewtwo.special(ness);
// mewtwo.special(ness);
// mewtwo.special(ness);
// mewtwo.special(ness);

// console.log(mewtwo);
// console.log(ness);