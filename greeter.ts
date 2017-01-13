//First Question
class greeter {
    name: string;
    constructor(name:string) {
        this.name = name;
    }

    greet(): string {
        return "Hi " + this.name + ", Welcome to the world of Typescript";
    }
}

let myObj = new greeter("Team");
let result = myObj.greet();
console.log(result); 

//Second Question
interface Drivable {
    start();
    drive();
    getPosition();
}

class car implements Drivable {
    start() {
        console.log("Driving started....");
    }
    drive() {
        console.log("Driving");
    }

    getPosition() {
        console.log("I am near to Bangalore");
    }
}

let carObj = new car();
carObj.start();
carObj.drive();
carObj.getPosition();

//Third Question
interface Flyable {
    fly();
}

class helicopter implements Flyable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fly() {
        console.log("My Vehicle " + this.name +" is Flying");    
    }
}

let helicopterObj = new helicopter("Luphthansa");
helicopterObj.fly();

class flyingCar implements Drivable, Flyable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    start() {
        console.log("Flying Car Flying started....");
    }
    drive() {
        console.log("Flying Car Flying");
    }

    getPosition() {
        console.log("I am near to Bangalore");
    }

    fly() {
        console.log("My Vehicle " + this.name +" is Flying");    
    }
}

let flyingCarObj = new flyingCar("Tiago");
flyingCarObj.start();
flyingCarObj.drive();
flyingCarObj.getPosition();
flyingCarObj.fly();