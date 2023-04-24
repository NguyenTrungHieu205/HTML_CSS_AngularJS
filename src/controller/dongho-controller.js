window.dongHoController = function ($scope, $http) {
    $scope.mangDongHo = [];
  //   Lấy dữ liệu từ db.json
      $http.get(dongHoAPI).then(function (response) {
          console.log(response.data);
          $scope.mangDongHo = response.data;
      });
  };