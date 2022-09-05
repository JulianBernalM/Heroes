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

class Person {
  age: number;
  last_name: string;

  constructor (age: number, last_name: string) {
    this.age = age;
    this.last_name = last_name
  }
}
const nico = new Person(34, 'Bernal');
nico.age
