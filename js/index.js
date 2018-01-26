// Basics of javascript
// A variable in javascript
var thisIsANumber = 5;
var thisIsABoolean = false;
var thisIsAString = "Hiya!";



// Arrays in Javascript
var data = [1, 2, 3];

// Determine how many observations are in the dataset using the `length` property
var num_obs = data.length;

// Add a new observation into the array of data using the `push` method
data.push(4); // data is now [1, 2, 3, 4]

// Use the filter methods to determine which numbers are greater than 2
var greater_than_two = data.filter(function(d){return d>2 });
// Note: data is unchanged, and filter took a `function` as it's parameter. 

var threeLarger = data.map(function(num){
    // This function is called on each individual value in the array.
    return num + 3;
});



// A function in javascript
function beBoundless() {
    console.log("This is how you print stuff in JS");
}



// An object in javascript, key-value pairs with different types. 
var person = {
    name:'steve',
    favorites:{
      music:'bluegrass',
      foods:['pizza', 'salad', 'yogurt']
    }
  };
  
  // Access object values using their key-values
  person.name; // returns 'steve'
  person['name']; // also returns 'steve'
  person.favorites; // returns the full `favorites` objects
  person.favorites.foods; // returns ['pizza', 'salad', 'yogurt']
  person.favorites.foods[1]; // returns 'salad', the first element in the 'foods' array

// ********************************************************************************

// 1
// jQuery calls all code in $() when the page is done loading. 
$(function() {
    console.log("The page loaded with jquery :)")
})

// ********************************************************************************

// 2 
// Let's append one element to the SVG element.
$(function() {
    // Select the element from the HTML DOM. 
    var svg = d3.select("#one-element");

    // Append the element to the svg. 
    svg.append('circle') // append a new circle, returning the circle
    .attr('cx', 50) // x position of the center of the circle
    .attr('cy', 50) // y position of the center of te circle
    .attr('r', 30) // Radius of te circle
    .attr('fill', 'red') // Fill color
    .attr('stroke', 'black') // Border of the circle
    .attr('stroke-width', 5); // Width of the border
    
})

// ********************************************************************************

// 3 Let's visualize dummy data with a scatterplot
$(function() {
    // Dummy data
    var data = [0, 1, 2, 3, 4, 5]

    // Select the element from the HTML DOM. 
    var svg = d3.select("#dummy-data");

    // Append the element to the svg. 
    

    // 
})

// ********************************************************************************

// 4
// Let's try it with real data