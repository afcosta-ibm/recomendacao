var app = angular.module("app", []);

app.controller("ClassificationCtrl", function($scope, $http) {

    $scope.urgency = '';
    $scope.severity = '';
    $scope.relevance = '';

    $scope.classify = function() {

      var request = {
        method: 'POST',
        url: 'http://denounces-classifier-api.mybluemix.net/api/v1/denounces-classifier/urgency',
        headers: {
                  'Content-Type':'application/json'
                },
         data: { text : $scope.denounces}
      }

      $http(request).then(
        function success(response) {
          $scope.urgency = response.data.classification;
          console.log(response.data.classification);
          console.log( "Success - response: " + JSON.stringify(response));
        }, function error(response) {
          console.log( "Error - response: " + JSON.stringify(response));
        });

        request.url = 'http://denounces-classifier-api.mybluemix.net/api/v1/denounces-classifier/severity';

        $http(request).then(
        function success(response) {
          $scope.severity = response.data.classification;
          console.log(response.data.classification);
          console.log( "Success - response: " + JSON.stringify(response));
        }, function error(response) {
          console.log( "Error - response: " + JSON.stringify(response));
        });

        request.url = 'http://denounces-classifier-api.mybluemix.net/api/v1/denounces-classifier/relevance';

        $http(request).then(
        function success(response) {
          $scope.relevance = response.data.classification;
          console.log(response.data.classification);
          console.log( "Success - response: " + JSON.stringify(response));
        }, function error(response) {
          console.log( "Error - response: " + JSON.stringify(response));
        });


    }

});
