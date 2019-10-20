
//contoh tanpa arrow function

function funcName(params) {
    return params + 3;
  }
 funcName(3);
 // 6


 //contoh dengan arrow function

let funcName = (params) => params + 3
funcName(3);
// 6


//contoh mapping array dengan arrow function

let kucings = [
    'Siam',
    'Anggora',
    'Garong',
    'Persia'
  ];
  
  console.log(kucings.map(kucing => kucing.length));
  // Array [4, 7, 6, 6]
  