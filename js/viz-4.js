// 4
// Let's try it with real data

$(function () {
    // Load data
    // Here data contains the contents of the csv
    d3.csv("data/cereal.csv", function (error, data) {

        // change string (from CSV) into number format
        data.forEach(function (d) {
            d.Calories = +d.Calories;
            d["Protein (g)"] = +d["Protein (g)"];

            // Uncomment this to see the data. 
            // console.log(d);
        });

        // Width and height of the visualization.
        var width = 600, height = 400, margin = 20;

        // Calculate the highest x and y values. 
        var xMax = d3.max(data, function (d) { return +d.Calories });
        var yMax = d3.max(data, function (d) { return d["Protein (g)"] });

        // setup x 
        var xValue = function (d) { return d.Calories; }, // data -> value
            xScale = d3.scaleLinear()
                .domain([0, xMax])
                .range([0, width]), // value -> display
            xMap = function (d) { return xScale(xValue(d)); }; // data -> display

        // setup y
        var yValue = function (d) { return d["Protein (g)"]; }, // data -> value
            yScale = d3.scaleLinear()
                .domain([0, yMax])
                .range([height, 0]), // value -> display
            yMap = function (d) { return yScale(yValue(d)); }; // data -> display

        // setup fill color
        var cValue = function (d) { return d.Manufacturer; },
            color = d3.scaleOrdinal(d3.schemeCategory10);

        // Select the element from the HTML DOM. 
        var svg = d3.select("#from-data");
        svg.attr("width", width + margin).attr("height", height + margin);

        // draw dots
        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", 'blue');
    });
})
