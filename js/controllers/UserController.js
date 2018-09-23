app.controller('UserController', ['$scope', 'githubUser', '$timeout', 
	function($scope, githubUser, $timeout) {
		$scope.isVisible = false;
		$scope.search = function(username) {
		    $timeout(function(){
				githubUser.getUser(username).then(function(data){
					$scope.user = data;
					}, function(err){					
						console.log(err);
					});
				$scope.isVisible = true;
			}, 1000);			
	    };

	    $scope.clearSearch = function () {
        	$scope.username = '';
        	$scope.isVisible = false;
        	$scope.user = {};
    	};	    
}]);