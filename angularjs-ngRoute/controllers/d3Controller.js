app.controller('d3Controller', ['$scope', function(){
	var self = this;

	self.title = 'Data Driven Diagram Tutorial (D3JS)';
	self.showBarGraph = false;

	self.barGraph = {
		width : 500,
		height : 300,
		data: [{'name':'Ravi', 'marks': 80}, 
			   {'name':'Anish', 'marks': 60},
			   {'name':'Pankaj', 'marks': 50},
			   {'name':'Siddharth', 'marks': 20},
			   {'name':'Sudhakar', 'marks': 40}],
		scaleMeter : 100
	}
	
}]);