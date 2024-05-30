/* 1. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.
Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, 
deposit some money, and withdraw a portion of it. */

class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }
}

const account1 = new BankAccount("123456", 1000);
const account2 = new BankAccount("789012", 2000);

account1.deposit(500);
account2.deposit(1000);

account1.withdraw(200);
account2.withdraw(500);

console.log("Final balance for account 1:", account1.balance);
console.log("Final balance for account 2:", account2.balance);

/* 2.    Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include
a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an
additional property for the number of doors. Override the display method to include the number of doors. */

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    display() {
        console.log(`Car: ${this.year} ${this.make} ${this.model}, Doors: ${this.numberOfDoors}`);
    }
}

const vehicle1 = new Vehicle("Toyota", "Camry", 2020);
const car1 = new Car("Honda", "Civic", 2019, 4);

vehicle1.display();
car1.display();

/* 3. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class 
and calculate its area and perimeter. */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(5, 8);

const area = rectangle1.calculateArea();
const perimeter = rectangle1.calculatePerimeter();

console.log("Rectangle Area:", area);
console.log("Rectangle Perimeter:", perimeter);

/* 4.  Write a JavaScript program to create a class called "Person" with properties for name, age and country.
Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const person1 = new Person("John", 30, "USA");
const person2 = new Person("Emily", 25, "Canada");

console.log("Details of Person 1:");
person1.displayDetails();

console.log("\nDetails of Person 2:");
person2.displayDetails();