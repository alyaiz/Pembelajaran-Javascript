const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const firstName = profile.firstName
  const lastName = profile.lastName
  const age = profile.age
   
  console.log(firstName, lastName, age)
   
  /* output:
  John Doe 18
  */

 /* const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName, lastName, age } = profile;
   
  console.log(firstName, lastName, age);
   
  /* output:
  John Doe 18
  */

  /*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  let firstName = "Dimas";
  let age = 20;
   
  // menginisialisasi nilai baru melalui destructuring object
  ({ firstName, age } = profile);
   
  console.log(firstName);
  console.log(age);
   
  /* output:
  John
  18
  */

  /*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
   
  const { firstName, age, isMale } = profile;
   
  console.log(firstName)
  console.log(age)
  console.log(isMale)
   
  /* output:
  John
  18
  undefined
  */

  /*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
   
  const { firstName, age, isMale = false } = profile;
   
  console.log(firstName)
  console.log(age)
  console.log(isMale)
   
  /* output:
  John
  18
  false
  */

  /*const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/

/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/

/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);
 
/* output:
Nugget
*/

/*const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

/*let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

/*const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
undefined
*/

/*const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/