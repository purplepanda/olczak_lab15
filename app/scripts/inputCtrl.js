app.controller("inputCtrl", function($scope, $location, wordFactory) {
  $scope.submitWords = function(madLib) { // Submits words to madLibsFactory
    wordFactory.saveObject(madLib);
    $location.path("ml1Output"); // Goes to output page
  }
});
