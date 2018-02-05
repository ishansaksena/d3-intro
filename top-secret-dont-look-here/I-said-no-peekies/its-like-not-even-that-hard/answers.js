// Bar chart solution.
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) { return x(d.letter); })
    .attr("width", x.bandwidth())
    .attr("y", function (d) { return y(d.frequency); })
    .attr("height", function (d) { return height - y(d.frequency); });

// Transitions solution. 

// Interactivity code. 