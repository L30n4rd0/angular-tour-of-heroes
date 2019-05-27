import { Animal } from './animal'

export class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number = 5) {
        // console.log("Slithering...");
        alert("Slithering...");
        super.move(distanceInMeters);
    }
}