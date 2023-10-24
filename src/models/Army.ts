import { Fighter } from "./Fighter";

export class Army {
    constructor(
        public name: string,
        public fighters: Fighter[]
    ) {}
}