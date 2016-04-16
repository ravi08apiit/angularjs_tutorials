'use strict';

app.directive('barGraph', function(){
	return{
		restrict: 'E',
		template: '<div id="d3_placeholder"></div',
		scope: {
			width : '=',
			height: '=',
			data: '=',
			scaleSize : '=scale'
		},
		link: function(scope, element, attr){
			var dataArray = scope.data,
				width = scope.width,
				height = scope.height,
				scaleSize = scope.scaleSize;

			var scaleWidth = d3.scale.linear()
								.domain([0, scaleSize])
								.range([0, width]);

			var axis = d3.svg.axis()
						 .ticks(10)
						 .scale(scaleWidth);

			var color = d3.scale.linear()
						  .domain([0, scaleSize])
						  .range(['red', 'blue']);

			var canvas = d3.select('#d3_placeholder')
			   .append('svg')
			   .attr('width', width)
			   .attr('height', height)
			   .append('g')
			   .attr('transform', 'translate(20, 0)');

			var bars = canvas.selectAll('rect')
							.data(dataArray)
							.enter()
								.append('rect')
								.attr('width', function(d){return scaleWidth(d.marks)})
								.attr('height', 30)
								.attr('fill', function(d){return color(d.marks)})
								.attr('y', function(d, i){return i*40});	

			canvas.selectAll('text')
		      	.data(dataArray)
		      	.enter()
		      		.append('text')
		      		.attr('fill', 'white')
		      		.attr('x', 20)
		      		.attr('y', function(d, i) {return (i*40 + 20)})
		      		.text(function(d){return d.name});
			    

			canvas.append('g')
				  .attr('transform', 'translate(0, 200)')
				  .call(axis);
		}
	}
})

	.directive('circleAnimation', function(){
		return {
			template: '<div id="d3_container_exit"></div>',
			restrict: 'E',
			link: function(){
				var datArray = [10];

				var canvas = d3.select('#d3_container_exit')
							   .append('svg')
							   .attr('width', 450)
							   .attr('height', 300);

				var circle1 = canvas.append('circle')
								   .attr('cx', 50)
								   .attr('cy', 100)
								   .attr('r', 30);

				var circle2 = canvas.append('circle')
								   .attr('cx', 50)
								   .attr('cy', 200)
								   .attr('r', 30);

			    canvas.selectAll('circle')
			    	  .data(datArray)
			    	  .attr('fill', 'red')
			    	  .exit()    	  		
							.attr('fill', 'green');

				circle1.transition()
					   .attr('cx', 200)
					   .duration(1500)
					   .each('end', function(){ d3.select(this).attr('fill', 'blue')})
					   .transition()
					   .attr('cy', 200);
					   

				circle2.transition()
					   .attr('cx', 200)
					   .delay(1000)
					   .duration(1500)
					   .transition()
					   .attr('cy', 100)
					   .each('start', function(){ d3.select(this).attr('fill', 'yellow')});
			}
		}
		
	})