"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// const tinhTongParams = (...numbers: Array<number>) => {
//   let tong: number = 0;
//   numbers.forEach((num) => {
//     tong += num;
//   });
//   return tong;
// };
// console.log(tinhTongParams(1, 2, 3, 4, 5));
// Spread operator
// let mang1 = [1, 2, 3];
// let mang2 = [4, 5, 6];
// let mang3 = [...mang1, ...mang2];
// console.log(mang3);
// interface sinhvien {
//   name: string;
//   age: number;
// }
// let sv1: sinhvien = {
//   name: "Nam",
//   age: 20,
// };
// let sv2: sinhvien = {
//   name: "Nhi",
//   age: 21,
// };
// let sv3 = {
//   diem: 10,
// };
// sv1 = sv2;
// sv1.name = "asdasdasdasd";
// // console.log(sv1);
// // console.log(sv2);
// // Khi thay đổi thông tin sv1 sv2 cũng sẽ bị thay đổi vì vậy nên ta dùng Spread operator
// let sv4 = { ...sv1, ...sv3 };
// console.log(sv4);
// class NguoiDung {
//   private hoTen: string;
//   public matKhau: string;
//   public taiKhoan: string;
//   constructor(ht: string, mk: string, tk: string) {
//     this.hoTen = ht;
//     this.matKhau = mk;
//     this.taiKhoan = tk;
//   }
//   public getHoten = () => {
//     return this.hoTen;
//   };
//   static say() {
//     alert("Hello");
//   }
// }
// let nguoidung1 = new NguoiDung("Nhan Vi Nam", "123", "nhanvinam99");
// console.log(nguoidung1.getHoten());
// NguoiDung.say();
var NhanVien = /** @class */ (function () {
    function NhanVien(maNV, tenNV, luongCB) {
        this.maNV = maNV;
        this.tenNV = tenNV;
        this.luongCB = luongCB;
    }
    NhanVien.prototype.TinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var TruongPhong = /** @class */ (function (_super) {
    __extends(TruongPhong, _super);
    function TruongPhong(ma, ten, luong, tienHH) {
        var _this = _super.call(this, ma, ten, luong) || this;
        _this.tienHoanHong = tienHH;
        return _this;
    }
    TruongPhong.prototype.TinhLuong = function () {
        return _super.prototype.TinhLuong.call(this) * 3 + this.tienHoanHong;
    };
    return TruongPhong;
}(NhanVien));
var truongphong1 = new TruongPhong("123", "asdasdasdasd", 10000, 20000);
console.log(truongphong1.TinhLuong());
