'use strict'
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));

  //Traditional Function:
//   function (a, b){
//     return a + b + 100;
//   }

//   let a = 4;
// let b = 2;
// function (){
//   return a + b + 100;
// }

// Arrow Function :
// (a, b) => a + b + 100;


// let a = 4;
// let b = 2;
// () => a + b + 100;

// (param1, paramN) => {
//     let a = 1;
//     return a + param1 + paramN;
//  }
  

//  var obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//       console.log(this.i, this);
//     }
//   }
  
//   obj.b(); 
//   obj.c(); 

const Animal = function(name, legs) {
    this.name = name;
    this.legs = legs;
    this.eat = function() {
      this.isEating = true;
    }
  }
  Animal.prototype.walk = function() {
    this.isWalking = true;
  }
  
  const Dog = function(name, legs) {
    Animal.call(this, name, legs);
  }
  Dog.prototype = Object.create(Animal.prototype);
  
  let puppy = new Dog('blake', 4);
  puppy.walk();
  puppy.eat();
  console.log(puppy);
  console.log(puppy instanceof Animal);
  console.log(puppy instanceof Dog);