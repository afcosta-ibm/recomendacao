var app = angular.module("app", []);

app.controller("ClassificationCtrl", function($scope, $http) {

    $scope.result = {};

    $scope.classify = function() {

      var request = {
        method: 'POST',
        url: 'https://denounces-classifier-api.mybluemix.net/api/v1/denounces-classifier',
        headers: {
                  'Content-Type':'application/json'
                },
         data: { text : $scope.denounces}
      }

      $http(request).then(
        function success(response) {
          $scope.result = response.data;
          console.log(response.data);
          console.log( "Success - response: " + JSON.stringify(response));
        }, function error(response) {
          console.log( "Error - response: " + JSON.stringify(response));
        });

    }

});
