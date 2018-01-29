// 1

// jQuery is library that simplifies client side javascript. 
// It makes a lot of tasks less verbose.
// We imported it in the HTML Headers and we can use it across different js files. 

// jQuery calls all code in $() when the page is done loading. 
$(function () {
    console.log("The page loaded with jquery :)")
})

// It is especially useful for making changes to the HTML, adding on click listeners and so on...

$(document).ready(function () {
    // this refers to window.document
    console.log("The document was loaded :)");

    // $() is shorthand for this. 

    $("h1").click(function () {
        // this refers to the DOM element with the id introduction
        console.log("Clicked");
        $(this).css("background-color: blue");
        alert("You clicked on the introduction :)");
    });
});

// If it's been a while, read on here to learn more about jquery.
// https://www.tutorialspoint.com/jquery/jquery-basics.htm

// Move on to viz-2 :)