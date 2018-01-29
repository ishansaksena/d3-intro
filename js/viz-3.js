// 3 
// Let's visualize dummy data with a scatterplot
$(function () {
    // Dummy data
    var data = [
        { id: 1, x: 10, y: 20 },
        { id: 2, x: 20, y: 30 },
        { id: 3, x: 30, y: 40 },
        { id: 4, x: 10, y: 60 },
        { id: 5, x: 20, y: 70 },
        { id: 6, x: 30, y: 80 },
        { id: 7, x: 40, y: 20 },
        { id: 8, x: 50, y: 30 },
        { id: 9, x: 60, y: 40 }
    ];
    // Let's say we want to display the x and y values as a scatterplot.

    // Select the element from the HTML DOM. 
    var svg = d3.select("#dummy-data");

    // Store the data-join in a variable `circles`
    var circles = svg.selectAll('circle') // select all circles in the svg
        .data(data, function (d) { return d.id }); // bind the data to your selection

    // Append a circle element for each observation that added the data. 
    // These will now be stored in the `circles` array.
    circles.enter()
        .append('circle')
        .attr('r', 5) // set a constant radius of 5
        .attr('cx', function (d) { return d.x }) // specify the x attribute
        .attr('cy', function (d) { return d.y }); // specify the y attribute  
});