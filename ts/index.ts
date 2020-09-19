// Các kiểu dữ liệu
let trangThai: boolean = true;
let tong: number = 1;
let title: string = "Nam";
let mangNguoiDung: number[] = [112, 3, 5];
let mangKhoaHoc: Array<any> = ["1", 2, true];
let mangThanhVien: [string, number] = ["1", 1]; //tuple

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

const tinhTongParams = (...numbers: Array<number>) => {
  let tong: number = 0;
  numbers.forEach((num) => {
    tong += num;
  });
  return tong;
};

console.log(tinhTongParams(1, 2, 3, 4, 5));
