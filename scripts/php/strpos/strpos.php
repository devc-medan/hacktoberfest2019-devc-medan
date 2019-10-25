<?php

//variabel array yg berisi daftar hari kerja
$listOfDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//Pengubahan array menjadi string agar dapat dicari
$arrayToString = implode(',', $listOfDay);

//variabel pencarian dengan nilai 0 dan 1
$findWordTrueFalse01 = strpos($arrayToString, date('D')) ? true : false;

//variabel pencarian dengan posisi karakter ditemukan
$findWordWithPosition = strpos($arrayToString, date('D'));

//menampilkan hasil ke layar
echo 'Daftar hari pencarian'.$arrayToString.'<br>';
echo 'Hasil pencarian berdasarkan hari berjalan, jika ada bernilai 1,
    jika tidak bernilai 0 : '.$findWordTrueFalse01.'<br>';
echo 'Hasil pencarian dengan posisi karakter yg ditemukan : '.$findWordWithPosition.'<br>';