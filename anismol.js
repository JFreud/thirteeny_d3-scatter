svg = document.getElementById("svgfield");

var body = [1.35, 465, 36.33, 27.66, 1.04, 187.1, 521, 10, 3.3, 529, 207, 62, 6.8, 35, 0.12, 0.023, 2.5, 55.5, 100, 52.16, 0.122, 192];
var brain = [465, 423, 119.5, 115, 5.5, 419, 655, 115, 25.6, 680, 406, 1320, 179, 56, 1, 0.4, 12.1, 175, 157, 440, 3, 180];
var max_body = 540;
var max_brain = 1350;

var radius = '2';


var draw_scatterplot = function() {
    for (i = 0; i < body.length; i++){
	var c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	c.setAttribute('r', radius);
	c.setAttribute('fill', 'black');
	svg.appendChild(c);
    }

    var points_x = d3.selectAll('circle').data(body);
    points_x.attr('cx', function(d){return (d / max_body * 500)});

    var points_y = d3.selectAll('circle').data(brain);
    points_y.attr('cy', function(d){return (500 - (d / max_brain * 500))});
}

draw_scatterplot();
