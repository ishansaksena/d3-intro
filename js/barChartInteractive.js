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

    var svg = d3.select("#bar-chart-interactive").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = d3.tsv("data/letters.tsv", type, function (error, data) {
        if (error) throw error;

        // We moved everything from here to render. VVV
        // We don't need this function anymore. 
    });

    render(data);

    function render(data) {
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

        // Paste here, what you came up with in barChart.js
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.letter); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.frequency); })
            .attr("height", function (d) { return height - y(d.frequency); }) 
    }

    // Select all, vowels or consonants
    function select(category) {
        // You can also change the data set to reflect if every letter is a vowel or a consonant. 
        var vowels = ['A', 'E', 'I', 'O', 'U'];
        if(category == 'All letters') {
            render(data);
        } else if (category = 'Vowels') {
            data.filter(function(d) {return vowels.includes(data);})
        } else if (category = 'Consonants') {
            data.filter(function(d) {return !vowels.includes(data);})
        }
        render(data, category)
    }

    // Helper function to hcange data type.
    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }
})