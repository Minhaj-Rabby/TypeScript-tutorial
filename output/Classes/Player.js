export class Player {
    constructor(n, a, c) {
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
