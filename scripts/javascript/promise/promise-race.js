let peserta1 = new Promise(resolve => setTimeout(resolve, 30, "Peserta 1."));
let peserta2 = new Promise(resolve => setTimeout(resolve, 20, "Peserta 2."));
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, "Peserta 3."));
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, "Peserta 4."));
let peserta5 = new Promise(resolve => setTimeout(resolve, 90, "Peserta 5."));

Promise.race([peserta1, peserta2, peserta3, peserta4, peserta5])
  .then(val => console.log("Balapan selesai,Pemenangnya adalah:", val))
  .catch(err => console.log("Balapan dihentikan karena : ", err));
