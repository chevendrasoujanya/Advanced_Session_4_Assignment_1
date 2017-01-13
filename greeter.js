//First Question
var greeter = (function () {
    function greeter(name) {
        this.name = name;
    }
    greeter.prototype.greet = function () {
        return "Hi " + this.name + ", Welcome to the world of Typescript";
    };
    return greeter;
}());
var myObj = new greeter("Team");
var result = myObj.greet();
console.log(result);
var car = (function () {
    function car() {
    }
    car.prototype.start = function () {
        console.log("Driving started....");
    };
    car.prototype.drive = function () {
        console.log("Driving");
    };
    car.prototype.getPosition = function () {
        console.log("I am near to Bangalore");
    };
    return car;
}());
var carObj = new car();
carObj.start();
carObj.drive();
carObj.getPosition();
var helicopter = (function () {
    function helicopter(name) {
        this.name = name;
    }
    helicopter.prototype.fly = function () {
        console.log("My Vehicle " + this.name + " is Flying");
    };
    return helicopter;
}());
var helicopterObj = new helicopter("Luphthansa");
helicopterObj.fly();
var flyingCar = (function () {
    function flyingCar(name) {
        this.name = name;
    }
    flyingCar.prototype.start = function () {
        console.log("Flying Car Flying started....");
    };
    flyingCar.prototype.drive = function () {
        console.log("Flying Car Flying");
    };
    flyingCar.prototype.getPosition = function () {
        console.log("I am near to Bangalore");
    };
    flyingCar.prototype.fly = function () {
        console.log("My Vehicle " + this.name + " is Flying");
    };
    return flyingCar;
}());
var flyingCarObj = new flyingCar("Tiago");
flyingCarObj.start();
flyingCarObj.drive();
flyingCarObj.getPosition();
flyingCarObj.fly();
