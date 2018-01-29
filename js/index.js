// This is a review of javascript :)

// This is a comment. 

/* 
    So is this, but across multiple lines. 
    
    D3 files can be pretty long so
    try to document your code thoroughly. 
*/



// Variables in javascript
var thisIsANumber = 5;
var thisIsABoolean = false;
var thisIsAString = "Hai!";



// Arrays in Javascript
var data = [1, 2, 3];

// Determine how many observations are in the dataset using the `length` property
var num_obs = data.length;

// Add a new observation into the array of data using the `push` method
data.push(4); // data is now [1, 2, 3, 4]

// Use the filter methods to determine which numbers are greater than 2
var greater_than_two = data.filter(function (d) {
    return d > 2;
});
// Note: data is unchanged, and filter took a `function` as it's parameter. 

var threeLarger = data.map(function (num) {
    // This function is called on each individual value in the array.
    return num + 3;
});

console.log(data);
console.log(greater_than_two);
console.log(threeLarger);


// A function in javascript
function beBoundless() {
    console.log("This is how you print stuff in JS");
}
beBoundless();

// Taking in arguments is as simple as this :)
function beBoundlessest(num) {
    for (i = 0; i < num; i++) {
        console.log("we can print multiple times toooooo");
    }
}
beBoundlessest(5);



// An object in javascript, key-value pairs with different types. 
var person = {
    name: 'steve',
    favorites: {
        music: 'bluegrass',
        foods: ['pizza', 'salad', 'yogurt']
    }
};

// Access object values using their key-values
person.name; // returns 'steve'
person['name']; // also returns 'steve'
person.favorites; // returns the full `favorites` objects
person.favorites.foods; // returns ['pizza', 'salad', 'yogurt']
person.favorites.foods[1]; // returns 'salad', the first element in the 'foods' array

/* 
    This is all you need to get started. 
    We'll learn more javascript as we go. 
    
    Move on to the files viz-1 ...
*/
