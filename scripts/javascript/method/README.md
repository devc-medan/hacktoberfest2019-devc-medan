
# Method

instance method adalah fungsi yang merupakan bagian dari kelas, dan bertindak atas instance kelas itu. contohnya kelas `BankAccount`:

```javascript
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
   }
}
```


kita dapat membuat instance dari kelas ini :
`const newAccount = new BankAccount('Will Alexander', 500);`

maka kita dapat membuat sebuah fungsi di dalam kelas untuk membuat format balance.

```javascript
showBalance() {
    console.log('Balance: ' + this.balance + ' EUR');
}
```


Ini berarti kita dapat menggunakan notasi titik pada instance newAccount untuk memanggil metode showBalance ()

```javascript
const newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance(); // prints 'Balance: 500 EUR' to the console`
```

### Menggunakan this Keyword

Kata kunci `this` digunakan untuk mengakses properti dan method di dalam objek.

pada contoh diatas keyword `this.balance` berarti property balance dari objek newAccount.

### Static methods
Berbeda dari instance method karena mereka tidak terkait dengan instance kelas, tetapi ke kelas itu sendiri. 
Kita tidak perlu menambahkan konstruktor ke kelas, karena tidak akan membuat instance (turunan). Digunakan untuk mencetak pesan biasa, mengembalikan nilai berdasarkan argumen yang dikirimkan.