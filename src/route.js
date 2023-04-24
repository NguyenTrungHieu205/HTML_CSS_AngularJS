var myWed = angular.module('myModule', ['ngRoute']);
myWed.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/trangChu",{
        templateUrl: "./pages/trangChu.html",
        controller: dienThoaiController,
    })
    .when("/sanPham",{
        templateUrl: "./pages/sanPham.html",
        controller: dienThoaiController,
    })
    .when("/gioiThieu",{
        templateUrl: "./pages/gioiThieu.html"
    })
    .when("/suKien",{
        templateUrl: "./pages/suKien.html"
    })
    .when("/dangNhap",{
        templateUrl: "./pages/dangNhap.html",
        controller: dangNhapController,
    })
    .when("/quenMatKhau",{
        templateUrl: "./pages/quenMatKhau.html",
        controller: dangNhapController,
    })
    .when("/dangKy",{
        templateUrl: "./pages/dangKy.html",
        controller: dangNhapController,
    })
    .when("/trangCuaToi",{
        templateUrl: "./pages/trangCuaToi.html",
        controller: dangNhapController,
    })
    .when("/gioHang",{
        templateUrl: "./pages/gioHang.html"
    })
    .when("/quanLySP",{
        templateUrl: "./pages/quanLySanPham.html",
        controller: dienThoaiController,
    })
    .when("/quanLyTL",{
        templateUrl: "./pages/quanLyTheLoai.html",
        controller: dienThoaiController,
    })
    .when("/dentail/:id",{
        templateUrl: "./pages/dentailSanPham.html",
        controller: dienThoaiController,
    })
    .when("/sanPhamDaMua",{
        templateUrl: "./pages/sanPhamDaMua.html",
        controller: dienThoaiController,
    })
    .when("/muaNgay/:id",{
        templateUrl: "./pages/muaNgay.html",
        controller: dienThoaiController,
    })
   
    .otherwise({
        redirectTo: "/trangChu",
    })
});