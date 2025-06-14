let studentNames = ["Nabiha", "Laiba", "Ayesha", "Aliza"];
console.log(studentNames);


let mixedArray = ["Laiba", 42, [1, 2, 3], { schoolName: "SIES" }];
console.log(mixedArray);
// Output: ["Laiba", 42, [1, 2, 3], { schoolName: "SIES" }]


console.log(studentNames[0]); // Output: "Prakash"
console.log(studentNames[1]); // Output: "Ashish"

for (let name of studentNames) {
    console.log(name);
}
// Output: ["Nabiha", "Laiba", "Ayesha", "Aliza"];


studentNames.push("Arisha");
console.log(studentNames);
// Output: ["Nabiha", "Laiba", "Ayesha", "Aliza", "Arisha"]


/////
let arr1 = [1, 2, 3];
let arr2 = arr1; // Shallow copy

console.log('ARR1:', arr1); // Output: [1, 2, 3]
console.log('ARR2:', arr2); // Output: [1, 2, 3]

// Modify arr2
arr2.push(4);

console.log('Updated ARR2:', arr2); // Output: [1, 2, 3, 4]
console.log('Updated ARR1:', arr1); // Output: [1, 2, 3, 4]


///
function func() {
    // Original array
    var arr = [34, 234, 567, 4];
 
    // Pushing the elements
    console.log(arr.push(23,45,56));
    console.log(arr);
}
func();

////

// Taking input as an array A
// having some elements.
var A = [ 1, 2, 3, 4, 5 ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = A.includes(3)

// Printing result of includes().
console.log(a);




////

// Taking input as an array A
// having some elements.
var name = [ 'gfg', 'cse', 'geeks', 'portal' ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = name.includes('cat')

// Printing result of includes()
console.log(a);



//split and join

// JavaScript Program to illustrate split() function
 
function func() {
    //Original string
    var str = 'Geeks for Geeks'
    var array = str.split("for");
   console.log(array);
}
func();



///

function func() { 
      var a = [ 1, 2, 3, 4, 5, 6 ]; 
      console.log(a.join()); 
}  
func();


///

const arr = [1, 2, 3, 4, 5];
console.log(...arr);


///
const user1 = {
    name: 'Jen',
    age: 22,
};
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
  
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)


////

var names = ["alpha", "beta", "gamma", "delta"];
 
var firstName = names[0];
var secondName = names[1];
 
console.log(firstName);//"alpha"
console.log(secondName);//"beta"


///
const user = {
  namee: 'John Doe',
  address: {
    city: 'New York',
    country: 'USA'
  }
};
const { namee, address: { city, country } } = user;
console.log(namee); // John Doe
console.log(city); // New York
console.log(country); // USA


///
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const userr = {
  name: 'John Doe',
  age: 30
};

displayUser(userr); // Name: John Doe, Age: 30