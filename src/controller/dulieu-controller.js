window.dienThoaiController = function ($scope, $http, $routeParams, $filter) {
  //ĐỒNG HỒ
  $scope.mangDongHo = [];
  //   Lấy dữ liệu từ db.json
  $http.get(dongHoAPI).then(function (response) {
    console.log(response.data);
    $scope.mangDongHo = response.data;
  });

  //SẢN PHẨM
  $scope.mangSanPham = [];
  //   Lấy dữ liệu từ db.json
  $scope.form_sanPham = {
    id: "",
    ten: "",
    gia: "",
    img: "",
    theLoai: "",
  };
  $scope.viTri = -1;
  $http.get(sanPhamAPI).then(function (response) {
    console.log(response.data);
    $scope.mangSanPham = response.data;
  });
  
  $scope.getNameIMG = function () {
    x = document.getElementById("img").value;
    temp = x.split("\\");
    x = temp[temp.length - 1];
    console.log();
    return x;
  };

  $scope.dentail = function (event, index) {
    event.preventDefault();
    let dt = $scope.mangSanPham[index];
    $scope.form_sanPham.ten = dt.ten;
    $scope.form_sanPham.gia = dt.gia;
    $scope.form_sanPham.img = dt.img;
    $scope.form_sanPham.theLoai = dt.theLoai;
    $scope.viTri = index;
  };
  $scope.remove = function (event, index) {
    event.preventDefault();
    let dt = $scope.mangSanPham[index];
    let api = sanPhamAPI + "/" + dt.id;
    $http.delete(api).then(function () {
      $scope.mangSanPham.splice(index, 1);
    });
  };

  $scope.add = function (event) {
    event.preventDefault();
    $scope.form_sanPham.img = $scope.getNameIMG();
    $http.post(sanPhamAPI, $scope.form_sanPham).then(function (response) {
      $scope.mangSanPham.push(response.data);
    });
  };
  $scope.update = function (event) {
    event.preventDefault();
    let dt = $scope.mangSanPham[$scope.viTri];
    let api = sanPhamAPI + "/" + dt.id;
    $http.put(api, $scope.form_sanPham).then(function (response) {
      $scope.mangSanPham[$scope.viTri] = response.data;
    });
  };



  $scope.$on("$routeChangeSuccess", function () {
    if ($routeParams.id) {
      $http
        .get(sanPhamAPI + "/" + $routeParams.id)
        .then(function (response) {
          $scope.sanPham = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  $scope.cart = [];

  $scope.addToCart = function (product) {
    $scope.cart.push(product);
  };

  //THỂ LOẠI
  $scope.mangTheLoai = [];

  $scope.form_TheLoai = {
    id: "",
    tenTheLoai: "",
  };

  $http.get(theLoaiAPI).then(function (response) {
    console.log(response.data);
    $scope.mangTheLoai = response.data;
  });

  $scope.dentailTL = function (event, index) {
    event.preventDefault();
    let dt = $scope.mangTheLoai[index];
    $scope.form_TheLoai.tenTheLoai = dt.tenTheLoai;
    $scope.viTri = index;
  };
  $scope.removeTL = function (event, index) {
    event.preventDefault();
    let dt = $scope.mangTheLoai[index];
    let api = theLoaiAPI + "/" + dt.id;
    $http.delete(api).then(function () {
      $scope.mangTheLoai.splice(index, 1);
    });
  };
  $scope.addTL = function (event) {
    event.preventDefault();
    $http.post(theLoaiAPI, $scope.form_TheLoai).then(function (response) {
      $scope.mangTheLoai.push(response.data);
    });
  };
  $scope.updateTL = function (event) {
    event.preventDefault();
    let dt = $scope.mangTheLoai[$scope.viTri];
    let api = theLoaiAPI + "/" + dt.id;
    $http.put(api, $scope.form_TheLoai).then(function (response) {
      $scope.mangTheLoai[$scope.viTri] = response.data;
    });
  };
  $scope.filter = function (index) {
    let tl = $scope.mangTheLoai[index];
    $scope.searchText = tl.tenTheLoai;
  };

  //GIỎ HÀNG
  $scope.mangGioHang = [];

  $scope.form_GioHang = {
    id : "",
    ten : "",
    gia : ""
  };

  $http.get(gioHangAPI).then(function (response) {
    console.log(response.data);
    $scope.mangGioHang = response.data;
  });

  $scope.add = function (event, index) {
    event.preventDefault();
    let gh = $scope.mangGioHang[index];
    $scope.form_GioHang.id = gh.id;
    $scope.form_GioHang.ten = gh.ten;
    $scope.form_GioHang.gia = gh.gia;

    $http.post(gioHangAPI, $scope.form_GioHang).then(function (response) {
      $scope.mangGioHang.push(response.data);
    });
  };
};
