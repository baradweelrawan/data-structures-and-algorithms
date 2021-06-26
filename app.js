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
  

 var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
  obj.b(); 
  obj.c(); 