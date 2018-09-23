app.controller('RepoController', ['$scope', 'githubUser', '$routeParams', 
	function($scope, githubUser, $routeParams) {
		githubUser.getRepos($routeParams.id.toLowerCase())
			.then(function(data){
				$scope.repos = data;
			}, function(err){					
				console.log(err);
			})
		$scope.repoSortOrder = "+name";	
}]);