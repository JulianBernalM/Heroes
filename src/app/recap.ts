// TypeScript concepts:
// Declarar variable, puede ser string o numero:

const username: string | number = 'Julian Bernal';

// Declarar funcion:

const sum = (a: number, b: number) => {
  return a + b;
}
sum(5,8);

// Orientado a objetos, declaracion de clase:
// Los atributos pueden ser publicos o privados en este caso son publicos:

export class Person {
  age: number;
  lastName: string;

  constructor (age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName
  }
}
const persona = new Person(34, 'Bernal');
persona.age
