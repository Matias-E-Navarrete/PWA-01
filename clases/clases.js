// Class
class Animal {
    name;
    gender;
    age;

    constructor(name, age, gender) {
      this.age = age;                   //this hace referencial contexto. En este caso a la clase, y dentro de la clase busca la propiedad
      this.gender = gender              // age, gender, name y le asigna el valor que recibe en el constructor cuando instanciamos:
      this.name = name;                 // const animal = new Animal("bigotes", 2, "male"). new Es palabra reservada para instanciar clases
     }

    communicate() {}                    //Método que le da el comportamiento para que se pueda comunicar


}

// Abstract Class

// TODO: Recuerden que en Javascript no podemos utilizar palabras reservadas como
// abstract. EL detalle de que es abstract lo dejo en el archivo typescript
abstract class Animal {
    name;
    gender;
    age;
    constructor(age, gender, name) {
        this.age = age;
        this.gender = gender;
        this.name = name;
     }

    communicate() {

    }
}


// Implements interfaces
/**
 * TODO: Recuerden que las interfaces no se pueden utilizar en javascript mediante la palabra reservada
 * interface debido a que solo se puede hacer con typescript. Para realizarlo en Javascript necesitamos 
 * realizar una serie de pasos complejos. El detalle de lo que es una interface lo dejo en el archivo 
 * typescript
 * 
*/

interface Behavior {
    communicate()
    move()
    eat()

}

class Dog implements Behavior{
    eyes;
    legs;
    tail;
    snout; // Hocico

    constructor(eyes){
        this.eyes = eyes;
    }
}

// Extends class

class Cat extends Animal{
    //...           Al hacer extends recibe las propiedades de Animal: age, name, gender y se pueden instanciar esas propiedas con el metodo super()
    whiskers; //    bigotes esta tenida en cuenta como una cualidad especifica del gato que no tienen todos los animales.

    constructor(age, gender, name, whiskers){
        super(age, gender, name) // super llama al metodo constructor de la "clase padre" Animal (la clase padre es la que va desp de extends)
        this.whiskers;           // y lo que super hace es instanciar esas propiedades y darselas a la instancia de Cat (solo a la instancia Cat)
    }

    //...          Como el gato es una clase hija de Animal, el gato va a tener o heredar los métodos de Animal. Como sucedio con las propiedades

    communicate() {
        console.log('Miau miauuu');
    }
}

