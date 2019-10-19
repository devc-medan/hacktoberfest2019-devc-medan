/**
 * 1.combine two array
 */
let a = [1, 2, 3];
let b = [4, 5, 6];

let newArray = [...a, ...b];
console.log(newArray); // [1, 2, 3, 4, 5, 6]

let anotherEx = [...a, ...b, 7, 8, 9];
console.log(anotherEx); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 2.Object.assign()
 */
let obj1 = {
    name: "A",
    value: 10
};
let newObj1 = obj1;
newObj1.name = "B";

console.log(obj1); // {name: "B", value: 10}
console.log(newObj1); // {name: "B", value: 10} 

let obj2 = {
    name: "A",
    value: 10
};
let newObj2 = {
    ...obj2
};
newObj1.name = "B";

console.log(obj2); // {name: "A", value: 10}
console.log(newObj2); // {name: "B", value: 10} 


// 3.Object.assign() and change one of our object

let user = {
    name: "Cakra Danu Sedayu",
    dob: "19 Oct 1999",
    status: false
}

let newUserObject = {
    ...user,
    status: true
}
console.log(newUserObject); // { name: "Cakra Danu Sedayu", dob: "19 Oct 1999", status: true }