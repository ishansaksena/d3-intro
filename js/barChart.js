$(function () {
    // As discussed in the video lectures, width and height here are that of the visualization,
    // not of the svg canvas.
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // The axes should work as they are.
    var x = d3.scaleBand()
        .range([0, width], .1);

    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y)
        .ticks(10, "%");

    var svg = d3.select("#bar-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/letters.tsv", type, function (error, data) {
        if (error) throw error;

        x.domain(data.map(function (d) { return d.letter; }))
            .paddingInner(0.1)
            .paddingOuter(0.5);
        y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

        // Still setting up the axes. 
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");

        // Let's show the bars.
        // 1. "Enter" a rect for each data point. 
        // 2. Every rect should have the class bar.
        // 3. D3 will calculate how wide your bars have to be. Look up x.bandwidth()
        // 4. We already set x and y scales. Read through what we did above. 
        //    Setting up the x and y scales above, makes things a lot easier here. 
        //    Set the x attribute and to x(d.letter).
        //    Set the y attribute to y(d.frequency).
        //    These map nominal and quantitative values in the data set to 
        //    positions in our canvas.  
        // 5. As discussed in lecture, we draw from the top left. 
        //    This is tricky. Take your time to figure out what we should set the height to. 
        //    Hint: You'll have to use height of the canvas from above and the y value. 
        svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) { return x(d.letter); })
    .attr("width", x.bandwidth())
    .attr("y", function (d) { return y(d.frequency); })
    .attr("height", function (d) { return height - y(d.frequency); });
        

        // Once we're done with this, we'll move can play with basic animations.
        // If you're done with the above look up d3 transitions. 
    });

    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }
})