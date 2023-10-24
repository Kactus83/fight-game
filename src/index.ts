import { Army } from "./models/Army";
import { Fighter } from "./models/Fighter";
import { FightingService } from "./services/FightingService";

// Create some fighters
const fighter1 = new Fighter("Warrior1", 100, 10);
const fighter2 = new Fighter("Warrior2", 90, 12);
const fighter3 = new Fighter("Warrior3", 95, 11);
const fighter4 = new Fighter("Warrior4", 110, 9);

// Create two armies
const army1 = new Army("Army1", [fighter1, fighter2]);
const army2 = new Army("Army2", [fighter3, fighter4]);

// Initialize the fighting service
const fightingService = new FightingService();

// Start the fight
fightingService.fight(army1, army2);
