// 5
// Let's try a full fledged visualization
$(function () {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    /* 
     * value accessor - returns the value to encode for a given data object.
     * scale - maps value to a visual display encoding, such as a pixel position.
     * map function - maps from data value to display value
     * axis - sets up axis
     */

    var yScale = d3.scaleLinear().range([0, height]);
    var xScale = d3.scaleLinear().range([0, width]);

    // setup x 
    var xValue = function (d) { return d.Calories; }, // data -> value
        xMap = function (d) { return xScale(xValue(d)); }; // data -> display

    // setup y
    var yValue = function (d) { return d["Protein (g)"]; }, // data -> value
        yMap = function (d) { return yScale(yValue(d)); }; // data -> display
    

    // setup fill color
    var cValue = function (d) { return d.Manufacturer; },
        color = d3.scaleOrdinal(d3.schemeCategory10);

    // add the graph canvas to the body of the webpage
    var svg = d3.select("#vis-basic").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the tooltip area to the webpage
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // load data
    d3.csv("data/cereal.csv", function (error, data) {
        
        // change string (from CSV) into number format
        data.forEach(function (d) {
            d.Calories = +d.Calories;
            d["Protein (g)"] = +d["Protein (g)"];
            //    console.log(d);
        });

        // don't want dots overlapping axis, so add in buffer to data domain
        xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);
        yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);

        // Add the X Axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

        // Add the Y Axis
        svg.append("g")
        .call(d3.axisLeft(yScale));

        // draw dots
        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", function (d) { return color(cValue(d)); })
            // Ignore for this tutorial
            .on("mouseover", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d["Cereal Name"] + "<br/> (" + xValue(d)
                    + ", " + yValue(d) + ")")
                    .style("left", (d3.event.pageX + 5) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // draw legend
        var legend = svg.selectAll(".legend")
            .data(color.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; })
    });
})