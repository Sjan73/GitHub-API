var app = angular.module('GithubApiApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
      .when("/user", {
        templateUrl: "views/user.html",
        controller: "UserController"
      })
      .when("/user/:id", {
        templateUrl: "views/repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo: "/user"});
});