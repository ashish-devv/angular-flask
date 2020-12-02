var url = "http://127.0.0.1:5000/result?regno=";
var app = angular.module("mymodule", []);

app.config([
  "$interpolateProvider",
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol("{a");
    $interpolateProvider.endSymbol("a}");
  },
]);

app.controller("contro", ($scope, $http) => {
  console.log(url);
  $scope.up = function () {
    $http.get(`${url}${$scope.reg}`).then(
      (response) => {
        //console.log("😎✔");
        console.log(response);
        console.log(response.data[1]);
        $scope.data = response.data[0];
        $scope.cgpa = response.data[1];
        if (response.data.length == 2) {
          $scope.show = true;
        } else {
          $scope.show = false;
        }
      },
      (fail) => {
        console.log("👿");
        console.log(fail);
      }
    );
  };
});
