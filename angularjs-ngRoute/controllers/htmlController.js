app.controller('htmlController', ['$scope', function(){
	var self = this;
	self.title = 'HTML5 Tutorial';
	self.localtion = {};


	self.imageUrl = '/images/htmlLogo.jpg'
	self.getLocaltion = function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		}
	};

	function showPosition(position){
		self.localtion.latitude = position.coords.latitude;
		self.localtion.longitude = position.coords.longitude;
	}	

	function showError(error) {
	    switch(error.code) {
	        case error.PERMISSION_DENIED:
	            self.localtion.error = "User denied the request for Geolocation."
	            break;
	        case error.POSITION_UNAVAILABLE:
	            self.localtion.error = "Location information is unavailable."
	            break;
	        case error.TIMEOUT:
	            self.localtion.error = "The request to get user location timed out."
	            break;
	        case error.UNKNOWN_ERROR:
	            self.localtion.error = "An unknown error occurred."
	            break;
	    }
	}
}]);