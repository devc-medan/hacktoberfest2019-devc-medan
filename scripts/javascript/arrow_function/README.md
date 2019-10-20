
# Arrow Function

Arrow Function adalah salah fitur terbaru dari ES6. 
Dengan Arrow Function, kita dapat menulis syntax function menjadi lebih singkat.

### Tanpa Arrow Function

let hello = function() {
  return "Hello World!";
}

### Dengan Arrow Function

let hello = () => {
  return "Hello World!";
}

### Arrow Function tanpa parameter

let hello = () => "Hello World!";

### Arrow Function dengan parameter

let hello = (val) => "Hello " + val;

### Arrow Function dengan satu parameter

let hello = val => "Hello " + val;