class Animal {
    name: string;
    distanceInMeters: number;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        this.distanceInMeters = distanceInMeters;
        // console.log(this.name + " moved " + distanceInMeters + "m.");
        alert(this.name + " moved " + distanceInMeters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number = 5) {
        // console.log("Slithering...");
        alert("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number = 45) {
        // console.log("Galloping...");
        alert("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move(34);
tom.move(100);
