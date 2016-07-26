app.controller("inputCtrl", function($scope, $location, wordFactory) {
  $scope.submitWords = function(madLib) { // Submits words to madLibsFactory
    $scope.madLib = madLib;
    wordFactory.saveObject(madLib);
    $location.path("mloutput"); // Goes to output page
  }
});
