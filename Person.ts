import assert from 'assert';

/*
Tu vas devoir écrire une classe Person, permettant de modéliser une personne. Chaque instance de la classe Person aura deux attributs, name et age.
Le constructeur de Person devra initialiser les attributs name et age à partir des paramètres qui lui sont passés.

La classe Person disposera également de deux méthodes, tellMyName et tellMyAge, qui afficheront respectivement : 
I am <name> et I am <age> years old (remplacer <name> et <age> respectivement par les valeurs des attributs name et age).

Enfin, pour tester ta classe, tu devras instancier deux personnes ayant pour noms et âges respectifs "John" et 40, "Mary"
et 35, et appeler les méthodes tellMyName et tellMyAge sur chacune de ces instances de Person.
*/

class Person
{ 
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) 
    {
        this._name = name;
        this._age = age;
    }

    public tellMyName(): string
    {
        return `I am ${this._name}`;
    }

    public tellMyAge(): string
    {
        return `I am ${this._age} years old`;
    }

}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);
console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
assert.equal(person1.tellMyName(), 'John');
assert.equal(person1.tellMyAge(), 40);
assert.equal(person2.tellMyName(), 'Mary');
assert.equal(person2.tellMyAge(), 35);


