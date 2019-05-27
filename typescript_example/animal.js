"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        this.distanceInMeters = distanceInMeters;
        // console.log(this.name + " moved " + distanceInMeters + "m.");
        alert(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
