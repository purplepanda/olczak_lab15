app.controller("outputCtrl", function($scope, wordFactory) {
  $scope.madLibsObject = wordFactory.returnObject();
  console.log($scope.madLibsObject);
});
