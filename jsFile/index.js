"use strict";
// Các kiểu dữ liệu
var trangThai = true;
var tong = 1;
var title = "Nam";
var mangNguoiDung = [112, 3, 5];
var mangKhoaHoc = ["1", 2, true];
var mangThanhVien = ["1", 1]; //tuple
var NhanVien = /** @class */ (function () {
    function NhanVien(maNV, tenNV, luongCB) {
        this.maNV = maNV;
        this.tenNV = tenNV;
        this.luongCB = luongCB;
    }
    NhanVien.prototype.tinhLuong = function () {
        return this.luongCB + 10000;
    };
    return NhanVien;
}());
var nhanvien1 = new NhanVien("123", "Nam", 12000);
console.log(nhanvien1.tinhLuong());
