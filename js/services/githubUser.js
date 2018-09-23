app.factory('githubUser', ['$http', function($http) {
  
	var getUser = function(username) {
		return $http.get('https://api.github.com/users/' + username)
		.then(function(response) {
			return response.data;
			})	  	
	}

	var getRepos = function(username){
    var reposLink = `https://api.github.com/users/${username}/repos`;

		return $http.get(reposLink)
      .then(function(response){
        return response.data;
      });
    };

    return {
      getUser: getUser,
      getRepos: getRepos
    };	
}])