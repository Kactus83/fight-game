import { Army } from "./models/Army";
import { Fighter } from "./models/Fighter";
import { FightingService } from "./services/FightingService";

const army1 = new Army("Army1", []);
const army2 = new Army("Army2", []);
const fightingService = new FightingService();

function addFighter(armyName: string) {
    const name = prompt("Enter fighter name:");
    const health = prompt("Enter fighter health:");
    const power = prompt("Enter fighter power:");

    // Check if the values are not null
    if (name && health && power) {
        const newFighter = new Fighter(name, parseInt(health), parseInt(power));
        if (armyName === "army1") {
            army1.fighters.push(newFighter);
        } else if (armyName === "army2") {
            army2.fighters.push(newFighter);
        }
    }
}

function startFight() {
    const result = fightingService.fight(army1, army2);
    const resultElement = document.getElementById("result");

    // Check if the element exists
    if (resultElement) {
        resultElement.innerHTML = `Result: ${result}`;
    }
}

(window as any).addFighter = addFighter;
(window as any).startFight = startFight;

const startFightButton = document.getElementById("startFight");

// Check if the element exists
if (startFightButton) {
    startFightButton.addEventListener("click", startFight);
}
