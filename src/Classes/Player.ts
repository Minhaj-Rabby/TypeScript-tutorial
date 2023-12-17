import { IsPlayer } from "../Interfaces/IsPlayer";
export class Player implements IsPlayer {
    name: string;
    private age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`Player ${this.name} from ${this.country} age ${this.age}`);
    }
}