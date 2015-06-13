function cartCotroller($scope){
	$scope.items = [
		{'title':'Ball', 'quantity':'2', 'price': '10'},
		{'title':'Bat', 'quantity':'2', 'price': '50'},
		{'title':'Wicket', 'quantity':'3', 'price': '20'}
	];
	$scope.remove = function (index){
		$scope.items.splice(index, 1);
	};
	$scope.addStock = function () {
		$scope.items.push(getItem());
		clearItem();
	};
	var getItem = function(){
		return {
			'title': $scope.title, 
			'quantity': $scope.quantity,
			'price': $scope.price
		}
	};
	var clearItem = function (){
		$scope.title = "";
		$scope.quantity = "";
		$scope.price = "";
	}
}