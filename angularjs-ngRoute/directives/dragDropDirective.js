app.directive('dragableElement', function(){
	return {
		restrict:'E',
		template:'<img id="dragLogo" src="{{url}}"/>',
		scope:{
			url: '='
		}, 
		link: function($scope, elem){
			elem.on('dragstart', function dragstart(event){
				event.dataTransfer.setData('text/plain', event.target.id);
			});
		}
	}
});

app.directive('dropable', function(){
	return {
		restrict:'A',
		link: function($scope, elem){
			elem.on('dragover', function dragover(event){
				event.preventDefault();
			});

			elem.on('drop', function drop(event){
				event.preventDefault();
				var data = event.dataTransfer.getData('text');
				event.target.appendChild(document.getElementById(data));
			});
		}
	}
});