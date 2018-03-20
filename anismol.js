svg = document.getElementById("svgfield");

var body = [1.35, 465, 36.33, 27.66, 1.04, 187.1, 521, 10, 3.3, 529, 207, 62, 6.8, 35, 0.12, 0.023, 2.5, 55.5, 100, 52.16, 0.122, 192];
var brain = [465, 423, 119.5, 115, 5.5, 419, 655, 115, 25.6, 680, 406, 1320, 179, 56, 1, 0.4, 12.1, 175, 157, 440, 3, 180];
var max_body = 540;
var max_brain = 1350;

var radius = '4';


var draw_scatterplot = function() {
    for (i = 0; i < body.length; i++){
	var c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	c.setAttribute('r', radius);
	c.setAttribute('fill', 'black');
	svg.appendChild(c);
    }

    var points_x = d3.selectAll('circle').data(body);
    points_x.attr('cx', function(d){return (50 + d / max_body * 400)});

    var points_y = d3.selectAll('circle').data(brain);
    points_y.attr('cy', function(d){return (450 - (d / max_brain * 400))});

    var rect = d3.select("svg");
    var height = rect.node().getBoundingClientRect().height
    var width = rect.node().getBoundingClientRect().width
    var padding = 50;
    var xticks = d3.scaleLinear().domain([0.023, 529]).nice().range([padding, height - padding]);
    var yticks = d3.scaleLinear().domain([0.4, 1320]).nice().range([height - padding, padding]);
    var xaxis = d3.axisBottom().scale(xticks);
    var yaxis = d3.axisLeft().scale(yticks);

    rect.append("g").attr("transform", "translate(0," + 452 + ")").call(xaxis);
    rect.append("g").attr("transform", "translate("+ padding + ", 0)").call(yaxis);

    rect.append("text").attr("x", width / 2).attr("y", height - 30).attr("dy", "1em").style("text-anchor", "middle").text("Body Weight (kg)");
    rect.append("text").attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").text("Brain Weight (g)");


}

draw_scatterplot();
