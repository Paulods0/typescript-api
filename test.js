"use strict";
class Person {
    constructor(name, age, address) {
        this.address = address;
        this.name = name;
        this.age = age;
    }
    introduceYourSelf() {
        return ("Hello, my name is" +
            this.getName() +
            "I'm" +
            this.getAge() +
            "years old and I live in" +
            this.getAddress());
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    getAddress() {
        return this.address;
    }
    setAddress(newAddress) {
        this.address = newAddress;
    }
}
const person01 = new Person("Paulo", 23, "Luanda-Angola");
// const personName = person01.getName()
person01.introduceYourSelf();
