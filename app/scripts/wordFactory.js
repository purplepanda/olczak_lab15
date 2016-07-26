app.factory("wordFactory", function() {
  var emptyObject = {};

  function saveObject(madLib) {
    emptyObject = madLib;
  };

  function returnObject() {
    return emptyObject;
  };

  return {
    saveObject: saveObject,
    returnObject: returnObject
  }

});
