/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini
// Buat array evenNumber untuk menampung bilangan genap
const evenNumber = [];

// Gunakan for loop untuk mengisi array dengan bilangan genap
for (let i = 1; i <= 100; i++) {
  // Cek apakah bilangan i adalah bilangan genap
  if (i % 2 === 0) {
    evenNumber.push(i); // Tambahkan bilangan genap ke dalam array
  }
}

// Sekarang, array evenNumber berisi bilangan genap dari 1 hingga 100
console.log(evenNumber);