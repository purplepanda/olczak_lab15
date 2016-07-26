var app = angular.module("madLibs", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/ml1Input", {
      controller: "inputCtrl",
      templateUrl: "partials/ml1Input.html"
    })
    .when("/ml1Output", {
      controller: "outputCtrl",
      templateUrl: "partials/ml1Output.html"
    });
});
