window.dangNhapController = function ($scope, $http, $location) {
  $scope.mangDangKy = [];
  $scope.form_DangKy = {
    id: "",
    ten: "",
    email: "",
    matKhau: "",
    nhapLaiMatKhau: "",
  };
  $http.get(dangKyAPI).then(function (response) {
    console.log(response.data);
    $scope.mangDangKy = response.data;
  });

  $scope.dangKy = function (event) {
    event.preventDefault();
    
    var ten = document.getElementById("ten");
    var email = document.getElementById("email");
    var matkhau = document.getElementById("matkhau");
    var nhapLaiMatKhau = document.getElementById("nhaplai");

    if(ten.value=="" || email.value=="" || matkhau.value=="" || nhapLaiMatKhau.value=="" ){
      alert("Không để trống dữ liệu");
    }else if(matkhau.value.length < 5){
      alert("Mật khẩu phải dài hơn 5 ký tự");
    }else if(matkhau.value != nhapLaiMatKhau.value){
      alert("Mật khẩu không trùng nhau");
    }else{
      $http.post(dangKyAPI, $scope.form_DangKy).then(function (response) {
      $scope.mangDangKy.push(response.data);
      alert("Đăng ký thành công");
    });
    }

    
  };

  $scope.dangNhap = function (event) {
    event.preventDefault();
    var username = $scope.email;
    var password = $scope.matKhau;

    var taikhoan = document.getElementById("taikhoan");
    var matkhau = document.getElementById("matkhau");

    if (taikhoan.value == "" || matkhau.value == "") {
      alert("Tài khoản và mật khẩu không để trống");
    } else {
      var foundUser = null;
      for (var i = 0; i < $scope.mangDangKy.length; i++) {
        if ($scope.mangDangKy[i].email === username) {
          foundUser = $scope.mangDangKy[i];
          break;
        }
      }
      if (foundUser && foundUser.matKhau === password) {
        alert("Đăng nhập thành công!");
        document.getElementById("buttonDN").style.display = "none";
        document.getElementById("loadDN").innerText = foundUser.ten;
        //document.getElementById("name-member").innerText = foundUser.ten;
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác");
      }

      let a = location.href.split("/");
      let b =
        a[0] +
        "/" +
        a[1] +
        "/" +
        a[2] +
        "/" +
        a[3] +
        "/" +
        a[4] +
        "/" +
        "trangChu";
      location.href = b;
    }
  };
  $scope.dangXat = function(event){
    event.preventDefault();
    document.getElementById("loadDN").innerText = "Đăng Nhập";
    // document.getElementById("buttonDN").style.display = "";
    alert("Đăng xuất thành công");
    let a = location.href.split("/");
    let b =
      a[0] +
      "/" +
      a[1] +
      "/" +
      a[2] +
      "/" +
      a[3] +
      "/" +
      a[4] +
      "/" +
      "dangXuat";
    location.href = b;
  }
};
