//Here I managed with this form by pushing form data to an array and then joining it to form the address. 
//But I need to still turn this into a JSON object which I can use in other forms
//my approach would be to create a "var dataobject to which var address is pushed and after the API data returns this is also added as two properties.   scope variables then access dataobject.property"

app.controller('TestCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $scope.addresslist = [];
        
  $scope.clickMe = function(add) {
  $scope.addresslist.push ($scope.street, $scope.housenumber, $scope.postalcode,  $scope.city );
  var address = $scope.addresslist.join(" ");
  
  // The geocoding api is very flexible, and returns location information for partial matches of many types.  The full app should therefore try to increase the precision by adding additional
  // fields and limiters like country, or eliminating responses considered partial matches.  There are also several different types of error responses.  Here, I give do a ng-show/hide  message if the ZERO_RESULTS status 
  //is returned, but in a full app all possible errors should be accounted for.  
  
  $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyClSFmxnFLT_3AASt8rEZdnfP0-EABwQ2g')
    .then(function(_results){
       $scope.statusResult = _results.data.status;
       $scope.queryResults = _results.data.results;
       $scope.latitude = $scope.queryResults[0].geometry.location.lat;
       $scope.longitude = $scope.queryResults[0].geometry.location.lng;
       
       
     
         });
    };
        
}]);
    
        