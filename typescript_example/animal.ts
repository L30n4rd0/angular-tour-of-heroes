export class Animal {
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