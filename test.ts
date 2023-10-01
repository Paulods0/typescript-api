class Person {
  private name: string
  private age: number
  private address: string

  constructor(name: string, age: number, address: string) {
    this.address = address
    this.name = name
    this.age = age
  }

  public introduceYourSelf(): string {
    return (
      "Hello, my name is" +
      this.getName() +
      "I'm" +
      this.getAge() +
      "years old and I live in" +
      this.getAddress()
    )
  }

  getName(): string {
    return this.name
  }
  setName(newName: string) {
    this.name = newName
  }
  getAge(): number {
    return this.age
  }
  setAge(newAge: number) {
    this.age = newAge
  }
  getAddress(): string {
    return this.address
  }
  setAddress(newAddress: string) {
    this.address = newAddress
  }
}

const person01 = new Person("Paulo", 23, "Luanda-Angola")

// const personName = person01.getName()
person01.introduceYourSelf()
