class Person {
  constructor (name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }  

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}