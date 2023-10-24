import { Army } from "../models/Army";
import { Fighter } from "../models/Fighter";

interface IFightingService {
  fight(army1: Army, army2: Army): void;
}

class FightingService implements IFightingService {
  fight(army1: Army, army2: Army): void {
    console.log(`The battle between ${army1.name} and ${army2.name} begins.`);
    while (army1.fighters.length > 0 && army2.fighters.length > 0) {
      const fighter1 = army1.fighters[0];
      const fighter2 = army2.fighters[0];

      this.executeRound(fighter1, fighter2);

      if (fighter1.health <= 0) {
        console.log(`${fighter1.name} from ${army1.name} has been defeated.`);
        army1.fighters.shift();
      }
      if (fighter2.health <= 0) {
        console.log(`${fighter2.name} from ${army2.name} has been defeated.`);
        army2.fighters.shift();
      }
    }

    if (army1.fighters.length > 0) {
      console.log(`${army1.name} has won the battle.`);
    } else {
      console.log(`${army2.name} has won the battle.`);
    }
  }

private executeRound(fighter1: Fighter, fighter2: Fighter): void {
    console.log(`${fighter1.name} attacks ${fighter2.name}.`);
    const damage = fighter1.power;
    fighter2.health -= damage;
    console.log(`${fighter2.name} takes ${damage} damage. ${fighter2.name}'s health is now ${fighter2.health}.`);

    if (fighter2.health > 0) {
        console.log(`${fighter2.name} attacks ${fighter1.name}.`);
        const damage = fighter2.power;
        fighter1.health -= damage;
        console.log(`${fighter1.name} takes ${damage} damage. ${fighter1.name}'s health is now ${fighter1.health}.`);
    }
}
}

export { IFightingService, FightingService };
