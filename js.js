class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage) {
        this.health -= damage;
        console.log(this.health + " dealing damage" + this.name);
    }
    hit(enemy, point) {
        enemy.setDamage(point * this.power);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }

}


var fighter2 = new Fighter(document.getElementById('p1').innerHTML, 4, 56);
var improvedFighter = new ImprovedFighter(document.getElementById('p2').innerHTML, 2, 43);
function fighter(fighter2, improvedFighter, point) {
    for (var i = 0; i < point.length; i++) {
            if (fighter2 instanceof ImprovedFighter) {
                fighter2.doubleHit(improvedFighter, point[i]);
            } else {
                fighter2.hit(improvedFighter, point[i]);
            }
        if (improvedFighter.health <= 0) {
            console.log(improvedFighter.name + " You are dead!! your enemy health " + fighter2.health);
            console.log('GAME OVER');

            document.getElementById("p2").disabled="disabled";
                document.getElementById("p1").disabled="disabled";
            break;
        }
        if (improvedFighter.health == 0 && fighter2.health == 0) {
            console.log("draw((");
        }
    }
}


