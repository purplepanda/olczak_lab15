var app = angular.module("madLibs", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/mlinput', {
      controller: 'inputCtrl',
      templateUrl: 'partials/mlinput.html'
    })
    .when('/mloutput', {
      controller: 'outputCtrl',
      templateUrl: 'partials/mloutput.html'
    })
});
