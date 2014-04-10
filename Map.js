var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

var width = 1060 - margin.left - margin.right;
var height = 800 - margin.bottom - margin.top;
var centered;

var bbVis = {
    x: 100,
    y: 10,
    w: width - 100,
    h: 300
};

var filterWidth = 400 - margin.left - margin.right,
filterHeight = height;

var figureWidth = 0,
figureHeight = height;

var filterVis = d3.select("#filters").append("svg").attr({
    width: filterWidth + margin.left + margin.right,
    height: filterHeight + margin.top + margin.bottom
})

var canvas = d3.select("#vis").append("svg").attr({
    width: width + margin.left + margin.right,
    height: height + margin.top + margin.bottom
    })

var svg = canvas.append("g").attr({
        transform: "translate(" + margin.left + "," + margin.top + ")"
    });

var figureVis = d3.select("#painting").append("svg").attr({
    width: figureWidth + margin.left + margin.right,
    height: figureHeight + margin.top + margin.bottom
})

// when appending nodes, have something like .onclick(". . ., function . . . figureWidth = filterWidth;");