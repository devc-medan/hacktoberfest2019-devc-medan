// Data yang kita punya
var pilots = [
	{
		id: 10,
		name: 'Poe Dameron',
		years: 14
	},
	{
		id: 2,
		name: "Temmin 'Snap' Wexley",
		years: 30
	},
	{
		id: 41,
		name: 'Tallissan Lintra',
		years: 16
	},
	{
		id: 99,
		name: 'Ello Asty',
		years: 22
	}
];

//kita mencari/mengakumulasi total dari nilai tahun
var totalYears = pilots.reduce(function(accumulator, pilot) {
	return accumulator + pilot.years;
}, 0);

//dengan ES6 lebih singkat
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

console.log(totalYears); //82
