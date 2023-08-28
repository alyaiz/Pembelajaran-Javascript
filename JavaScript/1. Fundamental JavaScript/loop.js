for(let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  /* output
  0
  1
  2
  3
  4
  */

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
  console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/

//while

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

//do-while

let j = 1;

do {
  console.log(j);
  i++;
} while (i <= 100);

//infinite

//for
for(let i = 1; i <= 5; i=1) {
    console.log(i);
  }

//while
let k = 1;
 
while (k <= 5) {
  console.log(k);
}