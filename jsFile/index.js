"use strict";
// Các kiểu dữ liệu
var trangThai = true;
var tong = 1;
var title = "Nam";
var mangNguoiDung = [112, 3, 5];
var mangKhoaHoc = ["1", 2, true];
var mangThanhVien = ["1", 1]; //tuple
// Arrrow Fucntion
//Nếu ko khai báo 2,3 ở dưới thì sẽ lấy 10 + 20
// const tinhTong = (a: number = 10, b: number = 20) => a + b;
// Ưu tiên hơn: Giá trị mặc định cảu tham số function
// console.log(tinhTong(2, 3));
//Resparameter
// const dispayColors = (...colors: Array<string>) => {
//   return colors.map((color) => {
//     console.log(color);
//   });
// };
// const dispayColors = (...colors: string[]) => {
//   return colors.map((color) => {
//     console.log(color);
//   });
// };
// dispayColors("red", "green");
var tinhTongParams = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var tong = 0;
    numbers.forEach(function (num) {
        tong += num;
    });
    return tong;
};
console.log(tinhTongParams(1, 2, 3, 4, 5));
