// Data yang kita punya
var officers = [
	{ id: 20, name: 'Captain Piett' },
	{ id: 24, name: 'General Veers' },
	{ id: 56, name: 'Admiral Ozzel' },
	{ id: 88, name: 'Commander Jerjerrod' }
];

// yang kita ingin dapatkan
//   [20, 24, 56, 88]

var officersIds = officers.map(function(officer) {
	return officer.id;
});

console.log(officersIds); //[20, 24, 56, 88]
